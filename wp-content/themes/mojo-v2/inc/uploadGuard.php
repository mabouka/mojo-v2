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
    // Copie créée par WPML pour l'autre langue : le constat est sur l'original.
    if (!is_array($guard)) {
        $original = (int) apply_filters('wpml_object_id', $attachmentId, 'attachment', true, apply_filters('wpml_default_language', null));
        if ($original && $original !== (int) $attachmentId) $guard = get_post_meta($original, '_mojo_upload_guard', true);
    }
    if (!is_array($guard)) return '';

    switch ($guard[0]) {
        // Le ✅ en tête sert d'indicateur au JS (encart vert au lieu d'orange).
        case 'recompressed':
            return sprintf('✅ Nice try. This JPG was exported a little too generously, so it was quietly slimmed down on upload: %s KB → %s KB (quality %d). Nobody will notice. Except the developer.', number_format_i18n($guard[1]), number_format_i18n($guard[2]), MOJO_GUARD_JPG_QUALITY);
        case 'png_photo':
            return sprintf('👀 The developer saw that. This photo is a %s KB PNG with no transparency: as a JPG it would be 3 to 4 times lighter. Export it as JPG and upload it again, and all will be forgiven.', number_format_i18n($guard[1]));
        case 'gif':
            return sprintf('👀 Somewhere, a developer just sighed. Animated GIF of %s KB: a muted looping video (MP4) is usually 90 to 99%% lighter for the same animation. Export it as MP4 and use a video block instead.', number_format_i18n($guard[1]));
        case 'gif_static':
            return sprintf('👀 A still GIF of %s KB? The developer has questions. As JPG (photo) or PNG (graphic) it would be much lighter: export it again in one of these formats.', number_format_i18n($guard[1]));
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

// Message visible au moment de l'envoi.
// - Médias → Ajouter : encart sous chaque fichier envoyé (le résumé affiché par
//   WordPress n'a pas de filtre, il est complété en JS).
// - Éditeur de blocs : avis en haut de l'éditeur, d'après le champ ajouté à la
//   réponse de l'API au moment de l'envoi.
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

add_action('admin_enqueue_scripts', function ($hook) {
    if ($hook !== 'media-new.php') return;
    $url = wp_json_encode(add_query_arg(['action' => 'mojo_upload_guard', '_ajax_nonce' => wp_create_nonce('mojo_upload_guard')], admin_url('admin-ajax.php')));
    wp_add_inline_script('jquery-core', <<<JS
jQuery(function ($) {
    var done = {};
    new MutationObserver(function () {
        $('#media-items .media-item').each(function () {
            var item = $(this), link = item.find('a[href*="post.php?post="]').attr('href');
            var id = link && (link.match(/post=(\\d+)/) || [])[1];
            if (!id || done[id]) return;
            done[id] = true;
            $.get($url + '&id=' + id, function (res) {
                var message = res && res.success && res.data.message;
                if (!message) return;
                var ok = message.indexOf('✅') === 0;
                $('<div class="notice inline ' + (ok ? 'notice-success' : 'notice-warning') + '" style="margin:8px 10px 10px"><p></p></div>')
                    .find('p').text(message).end().appendTo(item);
            });
        });
    }).observe(document.getElementById('media-items') || document.body, { childList: true, subtree: true });
});
JS);
});

// Confirmation avant l'envoi d'un GIF ou d'un PNG lourd (la transparence d'un PNG
// n'est pas connue avant l'envoi : la question est posée pour tout PNG lourd).
function mojoGuardConfirmJs()
{
    $png = MOJO_GUARD_PNG_KB;
    $gif = MOJO_GUARD_GIF_KB;
    return <<<JS
window.mojoGuardConfirm = function (name, type, bytes) {
    var kb = Math.round(bytes / 1024), message = '';
    if (/gif$/i.test(type) && kb >= $gif) {
        message = '👀 The developer is watching you.\\n\\n“' + name + '” is a ' + kb.toLocaleString() + ' KB GIF. A muted looping video (MP4) would be 90 to 99% lighter, and every phone visiting the site would thank you.\\n\\nUpload this GIF anyway? (The developer will know.)';
    } else if (/png$/i.test(type) && kb >= $png) {
        message = '👀 The developer is watching you.\\n\\n“' + name + '” is a ' + kb.toLocaleString() + ' KB PNG. If it is a photo (no transparency), a JPG would be 3 to 4 times lighter. A logo or a cut-out with transparency is fine as PNG.\\n\\nUpload this PNG anyway?';
    }
    return !message || window.confirm(message);
};
JS;
}

add_action('admin_enqueue_scripts', function ($hook) {
    // Fenêtre de la médiathèque (wp.Uploader) : partout dans l'admin.
    wp_add_inline_script('wp-plupload', mojoGuardConfirmJs() . <<<JS
if (window.wp && wp.Uploader) {
    var mojoInit = wp.Uploader.prototype.init;
    wp.Uploader.prototype.init = function () {
        if (mojoInit) mojoInit.apply(this, arguments);
        this.uploader.bind('FilesAdded', function (up, files) {
            files.slice().forEach(function (file) {
                if (!mojoGuardConfirm(file.name, file.type, file.size)) up.removeFile(file);
            });
        }, null, 100);
    };
}
JS, 'after');

    // Médias → Ajouter (plupload de handlers.js, initialisé au chargement).
    if ($hook === 'media-new.php') {
        wp_add_inline_script('plupload-handlers', mojoGuardConfirmJs() . <<<JS
jQuery(window).on('load', function () {
    if (!window.uploader || !uploader.bind) return;
    uploader.bind('FilesAdded', function (up, files) {
        files.slice().forEach(function (file) {
            if (!mojoGuardConfirm(file.name, file.type, file.size)) {
                up.removeFile(file);
                files.splice(files.indexOf(file), 1);
            }
        });
    }, null, 100);
});
JS, 'after');
    }
});

add_action('enqueue_block_editor_assets', function () {
    wp_add_inline_script('wp-api-fetch', mojoGuardConfirmJs() . <<<JS
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
            var notices = wp.data.dispatch('core/notices');
            (message.indexOf('✅') === 0 ? notices.createSuccessNotice : notices.createWarningNotice)(message, { id: 'mojo-upload-guard-' + media.id });
        }).catch(function () {});
    }
    return result;
});
JS, 'after');
});
