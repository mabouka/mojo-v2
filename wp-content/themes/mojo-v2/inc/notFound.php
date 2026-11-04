<?php
// index.php n'est qu'un gabarit de secours (il affiche « index.php »). Les
// adresses qui y tombaient répondaient 200 avec une page vide : archives
// /lead/ et /fr/lead/, recherche (?s=), archives de secteur (/sector/…) et
// toute autre archive sans gabarit. Elles reçoivent désormais la page 404 du
// thème, avec le code 404, pour les visiteurs comme pour Google.
function mojoIndexTemplateTo404($template)
{
    if (basename($template) !== 'index.php') return $template;

    global $wp_query;
    $wp_query->set_404();
    status_header(404);
    nocache_headers();

    return get_404_template() ?: $template;
}
add_filter('template_include', 'mojoIndexTemplateTo404', 99);

// Yoast listait l'archive /lead/ dans lead-sitemap.xml : plus de lien vers
// une page qui répond 404 (les pages Lead elles-mêmes restent listées).
add_filter('wpseo_sitemap_post_type_archive_link', function ($link, $postType) {
    return $postType === 'lead' ? false : $link;
}, 10, 2);
// La traduction de l'archive (/fr/lead/) est ajoutée par WPML SEO par une autre
// voie : on retire l'entrée elle-même.
add_filter('wpseo_sitemap_url', function ($xml, $url) {
    $path = untrailingslashit((string) parse_url($url['loc'] ?? '', PHP_URL_PATH));
    return preg_match('~^(/[a-z]{2})?/lead$~', $path) ? '' : $xml;
}, 10, 2);
