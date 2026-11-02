<?php
/**
 * CSS découpé par page : base.css (toutes pages) + un bundle par type de page.
 *
 * Source de vérité unique « page courante → bundle ». header.php l'écrit dans
 * le <head> avec l'attribut data-page-css ; lors des navigations Barba, le
 * Router lit ce <link> dans le <head> de la page récupérée et le charge
 * (Barba ne remplace que le conteneur, pas le <head>).
 *
 * Bundles compilés depuis src/scss/page-*.scss.
 */

function mojoPageCssBundle()
{
    if (is_front_page())                                 return 'page-home';
    if (is_post_type_archive('case'))                    return 'page-cases';
    if (is_singular('case'))                             return 'page-single-case';
    if (is_post_type_archive('services'))                return 'page-services-archive';
    if (is_singular('services'))                         return 'page-services';
    if (is_singular('lead'))                             return 'page-lead';
    if (is_post_type_archive('stories'))                 return 'page-stories';
    if (is_singular('stories'))                          return 'page-single-story';
    if (is_page_template('template-about.php'))          return 'page-about';
    if (is_page_template('template-ourclients.php'))     return 'page-clients';
    if (is_page_template('template-commitments.php'))   return 'page-commitments';
    if (is_page_template('template-contact.php'))        return 'page-contact';

    // 404, page.php, template-faq.php, index.php, single-work.php
    return 'page-misc';
}

/**
 * <link> CSS du <head> : base.css + bundle de la page.
 * Un fichier absent (dist/ non déployé) n'émet rien plutôt qu'un href vide,
 * qui ferait recharger la page HTML comme feuille de style.
 */
function mojoPageCssLinks($preload = false)
{
    $files = ['dist/css/base.css', 'dist/css/' . mojoPageCssBundle() . '.css'];
    foreach ($files as $i => $path) {
        $url = getUrlVersion($path);
        if (!$url) continue;
        if ($preload) {
            echo '<link rel="preload" href="' . esc_url($url) . '" as="style">' . "\n";
        } else {
            $attr = $i === 1 ? ' data-page-css' : '';
            echo '<link rel="stylesheet" href="' . esc_url($url) . '"' . $attr . '>' . "\n";
        }
    }
}
