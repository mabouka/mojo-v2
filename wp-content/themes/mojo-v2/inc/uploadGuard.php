<?php
// Garde-fou à l'envoi des images. WordPress ne recompresse une image que s'il
// doit la redimensionner : un JPG exporté en qualité maximale à la taille exacte
// d'une bannière (750 × 1440, 1920 × 720…) était servi tel quel (1,8 Mo pour la
// bannière Euractiv). Ici :
// - JPG trop lourd pour ses dimensions : ré-enregistré en qualité 85, même nom,
//   sans message ;
// - PNG sans transparence (une photo) ou GIF lourd : avertissement dans la
//   médiathèque, sans rien modifier (changer de format changerait l'adresse).

const MOJO_GUARD_JPG_KB_PER_MP = 300; // au-delà : export en qualité trop haute
const MOJO_GUARD_JPG_QUALITY = 85;
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

        // Métadonnées retirées (EXIF, IPTC, XMP : position GPS, appareil…),
        // choix voulu ; seul le profil de couleur est gardé.
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
        update_post_meta($attachmentId, '_mojo_upload_guard', ['recompressed', (int) round($before / 1024), (int) round($after / 1024), MOJO_GUARD_JPG_QUALITY]);
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
    // Copie créée par WPML pour l'autre langue : le constat est sur l'original.
    if (!is_array($guard)) {
        $original = (int) apply_filters('wpml_object_id', $attachmentId, 'attachment', true, apply_filters('wpml_default_language', null));
        if ($original && $original !== (int) $attachmentId) $guard = get_post_meta($original, '_mojo_upload_guard', true);
    }
    if (!is_array($guard)) return '';

    switch ($guard[0]) {
        // JPG recompressé : en silence (constat gardé sur le média, pas de message).
        case 'recompressed':
            return '';
        case 'png_photo':
            return sprintf('👀 Max saw that. This photo is a %s KB PNG with no transparency: as a JPG it would be 3 to 4 times lighter. Export it as JPG and upload it again, and all will be forgiven.', number_format_i18n($guard[1]));
        case 'gif':
            return sprintf('👀 Somewhere, Max just sighed. Animated GIF of %s KB: a muted looping video (MP4) is usually 90 to 99%% lighter for the same animation. Export it as MP4 and use a video block instead.', number_format_i18n($guard[1]));
        case 'gif_static':
            return sprintf('👀 A still GIF of %s KB? Max has questions. As JPG (photo) or PNG (graphic) it would be much lighter: export it again in one of these formats.', number_format_i18n($guard[1]));
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

// Message visible au moment de l'envoi :
// - avant : confirmation pour un GIF ou un PNG lourd (la transparence d'un PNG
//   n'est pas connue avant l'envoi, la question est posée pour tout PNG lourd) ;
// - après : fenêtre avec l'avertissement (Médias → Ajouter, médiathèque, fenêtre
//   « Ajouter un média »), en plus d'un encart sous le fichier dans Médias →
//   Ajouter ; avis en haut de l'éditeur de blocs.
register_rest_field('attachment', 'mojo_upload_guard', [
    'get_callback' => fn($attachment) => mojoGuardMessage($attachment['id']),
    'schema' => ['type' => 'string', 'context' => ['edit']],
]);

add_action('wp_ajax_mojo_upload_guard', function () {
    check_ajax_referer('mojo_upload_guard');
    if (!current_user_can('upload_files')) wp_send_json_error();
    $id = (int) ($_GET['id'] ?? 0);
    wp_send_json_success(['message' => $id ? mojoGuardMessage($id) : '']);
});

function mojoGuardJs()
{
    $png = MOJO_GUARD_PNG_KB;
    $gif = MOJO_GUARD_GIF_KB;
    $ajax = wp_json_encode(add_query_arg(['action' => 'mojo_upload_guard', '_ajax_nonce' => wp_create_nonce('mojo_upload_guard')], admin_url('admin-ajax.php')));
    return <<<JS
window.mojoGuardConfirm = function (name, type, bytes) {
    var kb = Math.round(bytes / 1024), message = '';
    if (/gif$/i.test(type) && kb >= $gif) {
        message = '👀 Max is watching you.\\n\\n“' + name + '” is a ' + kb.toLocaleString() + ' KB GIF. A muted looping video (MP4) would be 90 to 99% lighter, and every phone visiting the site would thank you.\\n\\nUpload this GIF anyway? (Max will know.)';
    } else if (/png$/i.test(type) && kb >= $png) {
        message = '👀 Max is watching you.\\n\\n“' + name + '” is a ' + kb.toLocaleString() + ' KB PNG. If it is a photo (no transparency), a JPG would be 3 to 4 times lighter. A logo or a cut-out with transparency is fine as PNG.\\n\\nUpload this PNG anyway?';
    }
    return !message || window.confirm(message);
};
// Constat du garde-fou pour un média envoyé : callback(message) s'il y en a un.
window.mojoGuardFetch = function (id, callback) {
    if (!id) return;
    fetch($ajax + '&id=' + encodeURIComponent(id), { credentials: 'same-origin' })
        .then(function (r) { return r.json(); })
        .then(function (res) { if (res && res.success && res.data.message) callback(res.data.message); })
        .catch(function () {});
};
JS;
}

add_action('admin_enqueue_scripts', function ($hook) {
    // Médiathèque et fenêtre « Ajouter un média » (wp.Uploader) : partout dans l'admin.
    wp_add_inline_script('wp-plupload', mojoGuardJs() . <<<JS
if (window.wp && wp.Uploader) {
    var mojoInit = wp.Uploader.prototype.init;
    wp.Uploader.prototype.init = function () {
        if (mojoInit) mojoInit.apply(this, arguments);
        // Fichier refusé : retiré aussi du tableau, sinon le gestionnaire de
        // WordPress (appelé après) créait une vignette « en cours » qui restait.
        this.uploader.bind('FilesAdded', function (up, files) {
            files.slice().forEach(function (file) {
                if (!mojoGuardConfirm(file.name, file.type, file.size)) {
                    up.removeFile(file);
                    files.splice(files.indexOf(file), 1);
                }
            });
        }, null, 100);
        this.uploader.bind('FileUploaded', function (up, file, response) {
            var data = {};
            try { data = JSON.parse(response.response).data || {}; } catch (e) {}
            mojoGuardFetch(data.id, function (message) { window.alert(message); });
        });
    };
}
JS, 'after');

    // Médias → Ajouter (plupload de handlers.js). uploadSuccess() est appelée par
    // son nom à chaque fichier envoyé : on la complète.
    if ($hook === 'media-new.php') {
        wp_add_inline_script('plupload-handlers', mojoGuardJs() . <<<JS
jQuery(window).on('load', function () {
    if (window.uploader && uploader.bind) {
        uploader.bind('FilesAdded', function (up, files) {
            files.slice().forEach(function (file) {
                if (!mojoGuardConfirm(file.name, file.type, file.size)) {
                    up.removeFile(file);
                    files.splice(files.indexOf(file), 1);
                }
            });
        }, null, 100);
    }
    if (typeof window.uploadSuccess === 'function') {
        var mojoUploadSuccess = window.uploadSuccess;
        window.uploadSuccess = function (fileObj, serverData) {
            mojoUploadSuccess.apply(this, arguments);
            var id = parseInt(serverData, 10);
            mojoGuardFetch(id, function (message) {
                jQuery('<div class="notice inline notice-warning" style="margin:0 0 8px"><p></p></div>')
                    .find('p').text(message).end().insertAfter('#media-item-' + fileObj.id);
                window.alert(message);
            });
        };
    }
});
JS, 'after');
    }
});

add_action('enqueue_block_editor_assets', function () {
    wp_add_inline_script('wp-api-fetch', mojoGuardJs() . <<<JS
wp.apiFetch.use(function (options, next) {
    var file = options.body instanceof FormData && options.body.get('file');
    if (file && file.name && !mojoGuardConfirm(file.name, file.type, file.size)) {
        return Promise.reject({ code: 'mojo_upload_cancelled', message: 'Upload cancelled.' });
    }
    var result = next(options);
    if ((options.method || '').toUpperCase() === 'POST' && /\\/wp\\/v2\\/media(\\?|$)/.test(options.path || options.url || '')) {
        result.then(function (media) {
            var message = media && media.mojo_upload_guard;
            if (!message || !wp.data) return;
            wp.data.dispatch('core/notices').createWarningNotice(message, { id: 'mojo-upload-guard-' + media.id });
        }).catch(function () {});
    }
    return result;
});
JS, 'after');
});
