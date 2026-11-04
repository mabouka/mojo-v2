<?php
add_image_size('social', 1200, 630, true);

add_image_size('featuredCases--big', 625, 350, true);
add_image_size('featuredCases--big@2x', 625 * 2, 350 * 2, true);

add_image_size('featuredCases--small', 294, 260, true);
add_image_size('featuredCases--small@2x', 294 * 2, 260 * 2, true);

add_image_size('featuredVideo', 625, 625, true);
add_image_size('featuredVideo@2x', 625 * 2, 625 * 2, true);

add_image_size('logo', 9999, 70, false);
add_image_size('logo@2x', 9999 * 2, 70 * 2, false);

add_image_size('teamCard', 405, 405, true);
add_image_size('teamCard@2x', 405 * 2, 405 * 2, true);

add_image_size('caseCard', 625, 500, true);
add_image_size('caseCard@2x', 625 * 2, 500 * 2, true);

add_image_size('caseCardMobile', 345, 274, true);
add_image_size('caseCardMobile@2x', 345 * 2, 274 * 2, true);

//add_image_size('caseLong', 1440, 440, true);

add_image_size('caseFull', 1920, 720, true);

add_image_size('caseFullMobile', 375, 720, true);
add_image_size('caseFullMobile@2x', 375 * 2, 720 * 2, true);

add_image_size('twoImages', 625, 700, true);
add_image_size('twoImages@2x', 625 * 2, 700 * 2, true);
add_image_size('twoImagesMobile', 345 * 2, 387 * 2, true);

add_image_size('textGallery', 625, 9999, false);
add_image_size('textGallery@2x', 625 * 2, 9999 * 2, false);
// mobile : fullImageMobile

add_image_size('fullBlackImage', 9999, 700, false);
add_image_size('fullBlackImageMobile', 9999, 265 * 2, false);

add_image_size('fullImage', 1920, 9999, false);
add_image_size('fullImageMobile', 375 * 2, 9999, false);

add_image_size('wrapperImage', 1285, 9999, false);
// mobile : fullImageMobile



add_image_size('imagesslider', 500, 500, true);
add_image_size('imagesslider@2x', 500 * 2, 500 * 2, true);
add_image_size('imagessliderMobile', 345, 345, true);
add_image_size('imagessliderMobile@2x', 345 * 2, 345 * 2, true);


add_image_size('leadBanner', 1440, 806, true);
add_image_size('leadBanner@2x', 1440 * 2, 806 * 2, true);


add_image_size('storyCardBig', 515, 203, true);
add_image_size('storyCardBig@2x', 515 * 2, 203 * 2, true);

add_image_size('storyCardSmall', 330, 210, true);
add_image_size('storyCardSmall@2x', 330 * 2, 210 * 2, true);

add_image_size('storyArchiveFeatured', 691, 619, true);
add_image_size('storyArchiveFeatured@2x', 691 * 2, 619 * 2, true);

add_image_size('storyHero', 1065, 553, true);
add_image_size('storyHero@2x', 1065 * 2, 553 * 2, true);

// SVG : WordPress n'en connaît pas les dimensions (métadonnées à 0) et le plugin
// svg-support renvoie alors 1×1 → <img width="1" height="1">, donc un carré
// réservé puis un saut de mise en page au chargement. On lit les dimensions
// réelles dans le fichier (width/height ou viewBox) et on les ajuste à la
// taille demandée, comme WordPress le ferait pour une image bitmap.
function mojoSvgIntrinsicSize($attachmentId)
{
    static $cache = [];
    if (array_key_exists($attachmentId, $cache)) return $cache[$attachmentId];

    $cache[$attachmentId] = null;
    $file = get_attached_file($attachmentId);
    if (!$file || !is_readable($file)) return null;

    // La balise <svg> est au début du fichier : inutile de tout lire.
    $head = file_get_contents($file, false, null, 0, 4096);
    if (!preg_match('/<svg\b[^>]*>/is', $head, $tag)) return null;

    $attr = function ($name) use ($tag) {
        return preg_match('/\s' . $name . '\s*=\s*["\']([^"\']*)["\']/i', $tag[0], $m) ? trim($m[1]) : null;
    };
    $width  = (float) $attr('width');   // "100%" ou "12em" → ignorés plus bas
    $height = (float) $attr('height');
    $unitless = fn($v) => $v === null || preg_match('/^[\d.]+(px)?$/', $v);

    if (!($width > 0 && $height > 0 && $unitless($attr('width')) && $unitless($attr('height')))) {
        $viewBox = preg_split('/[\s,]+/', (string) $attr('viewBox'));
        if (count($viewBox) !== 4) return null;
        $width  = (float) $viewBox[2];
        $height = (float) $viewBox[3];
    }
    if ($width <= 0 || $height <= 0) return null;

    return $cache[$attachmentId] = [$width, $height];
}

function mojoSvgImageSrc($image, $attachmentId, $size)
{
    if (!$image || get_post_mime_type($attachmentId) !== 'image/svg+xml') return $image;
    if (!($intrinsic = mojoSvgIntrinsicSize($attachmentId))) return $image;
    [$width, $height] = $intrinsic;

    // Boîte de la taille demandée (9999 ou 0 = pas de limite). Même pour une
    // taille recadrée, le fichier servi reste le SVG d'origine : on le fait
    // tenir dans la boîte en gardant son ratio.
    static $sizes = null;
    $box = null;
    if (is_array($size)) {
        $box = ['width' => $size[0], 'height' => $size[1] ?? 0];
    } elseif ($size !== 'full') {
        $sizes ??= wp_get_registered_image_subsizes();
        $box = $sizes[$size] ?? null;
    }

    if ($box) {
        $ratios = [];
        if ($box['width'] && $box['width'] < 9999)   $ratios[] = $box['width'] / $width;
        if ($box['height'] && $box['height'] < 9999) $ratios[] = $box['height'] / $height;
        if ($ratios) {
            $scale  = min($ratios); // un SVG peut être agrandi sans perte
            $width  *= $scale;
            $height *= $scale;
        }
    }

    $image[1] = max(1, (int) round($width));
    $image[2] = max(1, (int) round($height));
    return $image;
}
// Après bodhi_svgs_dimension_fallback (priorité 10) qui force 1×1.
add_filter('wp_get_attachment_image_src', 'mojoSvgImageSrc', 20, 3);

// Pages case : la bannière (sCaseBanner) est toujours au-dessus du contenu.
// WordPress ne mettait aucune image du contenu en lazy, et ajoutait
// fetchpriority="high" à la première, prise à tort pour l'image principale :
// tout partait au chargement (~2,5 Mo sur euractiv-en).
function mojoCaseContentImages($image, $context)
{
    if ($context !== 'the_content' || !is_singular('case')) return $image;
    $image = preg_replace('/\sfetchpriority=(["\'])high\1/i', '', $image);
    if (!preg_match('/\sloading=/i', $image)) {
        $image = preg_replace('/^<img\b/i', '<img loading="lazy"', $image);
    }
    return $image;
}
add_filter('wp_content_img_tag', 'mojoCaseContentImages', 20, 2);

// Bloc vidéo Gutenberg : chargé à l'approche de l'écran par LazyVideos
// (src/js/classes/lazyVideos.js : <video class="lazy"> + <source data-src>)
// au lieu d'être téléchargé dès l'ouverture de la page. L'autoplay est
// conservé : il démarre une fois la source posée.
// Les dimensions de la vidéo (médiathèque) sont ajoutées en width/height : sans
// source chargée, le navigateur réservait 150 px de haut, puis la page sautait.
function mojoLazyContentVideo($html, $block = [])
{
    if (is_admin() || wp_is_json_request()) return $html;
    $meta = !empty($block['attrs']['id']) ? wp_get_attachment_metadata((int) $block['attrs']['id']) : [];
    return preg_replace_callback('/<video\b([^>]*?)\ssrc=(["\'])([^"\']+)\2([^>]*)>/i', function ($m) use ($meta) {
        $attrs = preg_replace('/\spreload=(["\'])[^"\']*\1/i', '', $m[1] . $m[4]);
        if (!empty($meta['width']) && !empty($meta['height']) && !preg_match('/\swidth=/i', $attrs)) {
            $attrs .= ' width="' . (int) $meta['width'] . '" height="' . (int) $meta['height'] . '"';
        }
        $attrs = preg_match('/\sclass=["\']/', $attrs)
            ? preg_replace('/\sclass=(["\'])/', ' class=$1lazy ', $attrs, 1)
            : $attrs . ' class="lazy"';
        $type = preg_match('/\.webm(\?|$)/i', $m[3]) ? 'video/webm' : 'video/mp4';
        return '<video' . $attrs . ' preload="none"><source data-src="' . esc_url($m[3]) . '" type="' . $type . '">';
    }, $html);
}
add_filter('render_block_core/video', 'mojoLazyContentVideo', 10, 2);

// Switch to Image Magick
function change_graphic_lib($array)
{
    return array('WP_Image_Editor_GD', 'WP_Image_Editor_Imagick');
}
add_filter('wp_image_editors', 'change_graphic_lib');
