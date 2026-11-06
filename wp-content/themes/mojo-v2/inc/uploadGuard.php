<?php
// Garde-fou à l'envoi des images. WordPress ne recompresse une image que s'il
// doit la redimensionner : un JPG exporté en qualité maximale à la taille exacte
// d'une bannière (750 × 1440, 1920 × 720…) était servi tel quel (1,8 Mo pour la
// bannière Euractiv). Ici :
// - JPG trop lourd pour ses dimensions : ré-enregistré en qualité 80, même nom ;
// - PNG sans transparence (une photo) ou GIF lourd : avertissement dans la
//   médiathèque, sans rien modifier (changer de format changerait l'adresse).

const MOJO_GUARD_JPG_KB_PER_MP = 300; // au-delà : export en qualité trop haute
const MOJO_GUARD_JPG_QUALITY = 80;
const MOJO_GUARD_PNG_KB = 300;
const MOJO_GUARD_GIF_KB = 1024;

// JPG recompressé dès l'envoi, avant que WordPress n'en tire les autres tailles.
function mojoGuardRecompressJpeg($upload)
{
    if (($upload['type'] ?? '') !== 'image/jpeg' || !class_exists('Imagick')) return $upload;

    $file = $upload['file'];
    $size = @getimagesize($file);
    $bytes = filesize($file);
    if (!$size || !$bytes) return $upload;

    // Plus grande que le seuil de WordPress (2560 px) : il en fait une copie
    // réduite et recompressée, c'est elle qui est servie.
    $threshold = (int) apply_filters('big_image_size_threshold', 2560, $size, $file, 0);
    if ($threshold && max($size[0], $size[1]) > $threshold) return $upload;
    if ($bytes / 1024 / ($size[0] * $size[1] / 1e6) < MOJO_GUARD_JPG_KB_PER_MP) return $upload;

    try {
        $im = new Imagick($file);
        // Photo de téléphone tournée par ses métadonnées : on laisse WordPress faire.
        if (!in_array($im->getImageOrientation(), [Imagick::ORIENTATION_UNDEFINED, Imagick::ORIENTATION_TOPLEFT], true)) return $upload;

        $icc = null;
        try { $icc = $im->getImageProfile('icc'); } catch (Exception $e) {}
        $im->stripImage();
        if ($icc) $im->profileImage('icc', $icc);
        $im->setImageCompressionQuality(MOJO_GUARD_JPG_QUALITY);
        $im->setSamplingFactors(['2x2', '1x1', '1x1']);
        $im->setInterlaceScheme(Imagick::INTERLACE_PLANE);
        $blob = $im->getImagesBlob();
        $im->clear();
    } catch (Exception $e) {
        return $upload;
    }

    // Moins de 15 % de gain : l'original est gardé.
    if (strlen($blob) > $bytes * 0.85) return $upload;
    if (file_put_contents($file, $blob) === false) return $upload;
    clearstatcache(true, $file);

    $GLOBALS['mojoGuardRecompressed'][$file] = [$bytes, strlen($blob)];
    return $upload;
}
add_filter('wp_handle_upload', 'mojoGuardRecompressJpeg');

// Constat enregistré sur le média, affiché ensuite dans la médiathèque.
function mojoGuardInspect($attachmentId)
{
    $file = get_attached_file($attachmentId);
    if (!$file || !is_file($file)) return;
    $type = get_post_mime_type($attachmentId);
    $kb = (int) round(filesize($file) / 1024);

    if (isset($GLOBALS['mojoGuardRecompressed'][$file])) {
        [$before, $after] = $GLOBALS['mojoGuardRecompressed'][$file];
        update_post_meta($attachmentId, '_mojo_upload_guard', ['recompressed', (int) round($before / 1024), (int) round($after / 1024)]);
    } elseif ($type === 'image/png' && $kb >= MOJO_GUARD_PNG_KB && class_exists('Imagick')) {
        try {
            $im = new Imagick($file);
            $opaque = !$im->getImageAlphaChannel();
            if (!$opaque) {
                $range = $im->getImageChannelRange(Imagick::CHANNEL_ALPHA);
                $opaque = $range['minima'] >= 0.98 * Imagick::getQuantum();
            }
            $im->clear();
            if ($opaque) update_post_meta($attachmentId, '_mojo_upload_guard', ['png_photo', $kb]);
        } catch (Exception $e) {}
    } elseif ($type === 'image/gif' && $kb >= MOJO_GUARD_GIF_KB) {
        $frames = 2;
        if (class_exists('Imagick')) {
            try { $im = new Imagick($file); $frames = $im->getNumberImages(); $im->clear(); } catch (Exception $e) {}
        }
        update_post_meta($attachmentId, '_mojo_upload_guard', [$frames > 1 ? 'gif' : 'gif_static', $kb]);
    }
}
add_action('add_attachment', 'mojoGuardInspect');

// Texte affiché pour un média (textes de l'admin en anglais, comme le reste).
function mojoGuardMessage($attachmentId)
{
    $guard = get_post_meta($attachmentId, '_mojo_upload_guard', true);
    if (!is_array($guard)) return '';

    switch ($guard[0]) {
        case 'recompressed':
            return sprintf('✅ Optimised on upload: %s KB → %s KB (JPG quality %d).', $guard[1], $guard[2], MOJO_GUARD_JPG_QUALITY);
        case 'png_photo':
            return sprintf('⚠️ This photo is a PNG (%s KB) with no transparency. Saved as JPG, it would be about 3 to 4 times lighter: export it as JPG and upload it again.', $guard[1]);
        case 'gif':
            return sprintf('⚠️ Animated GIF of %s KB. A muted looping video (MP4) is usually 90 to 99%% lighter for the same animation: export it as MP4 and use a video block instead.', number_format_i18n($guard[1]));
        case 'gif_static':
            return sprintf('⚠️ Still GIF of %s KB. As JPG (photo) or PNG (graphic) it would be much lighter: export it again in one of these formats.', number_format_i18n($guard[1]));
    }
    return '';
}

// Détails du média (fenêtre de la médiathèque et page d'édition).
add_filter('attachment_fields_to_edit', function ($fields, $post) {
    $message = mojoGuardMessage($post->ID);
    if ($message) {
        $fields['mojo_upload_guard'] = [
            'label' => 'Optimisation',
            'input' => 'html',
            'html' => '<p style="margin:0">' . esc_html($message) . '</p>',
        ];
    }
    return $fields;
}, 10, 2);

// Colonne de la médiathèque en mode liste.
add_filter('manage_media_columns', function ($columns) {
    $columns['mojo_upload_guard'] = 'Optimisation';
    return $columns;
});
add_action('manage_media_custom_column', function ($column, $attachmentId) {
    if ($column === 'mojo_upload_guard') echo esc_html(mojoGuardMessage($attachmentId));
}, 10, 2);
