<?php

add_filter('wp_get_global_stylesheet', function ($stylesheet) {
    // 1. On remplace le sélecteur body par .guthContent
    $stylesheet = str_replace('body {', '.guthContent {', $stylesheet);

    // 2. On remplace le sélecteur universel (si WordPress l'utilise)
    $stylesheet = str_replace(':root {', '.guthContent {', $stylesheet);

    // 3. (Optionnel) Pour isoler totalement, on peut préfixer les autres styles
    // Mais attention, cela peut alourdir le chargement.

    return $stylesheet;
}, 20);





if (!function_exists('mojo_setup')) :
    function mojo_setup()
    {
        add_theme_support('post-thumbnails');
        add_theme_support('title-tag');
        // Scripts et styles sans l'attribut type="text/javascript" / "text/css", inutile en HTML5.
        add_theme_support('html5', ['script', 'style']);
    }
endif;
add_action('after_setup_theme', 'mojo_setup');



function disable_block_editor_for_page_ids($use_block_editor, $post)
{


    return $use_block_editor;
}
add_filter('use_block_editor_for_post', 'disable_block_editor_for_page_ids', 10, 2);
/**
 * Disable Editor
 *
 * @package      ClientName
 * @author       Bill Erickson
 * @since        1.0.0
 * @license      GPL-2.0+
 **/

/**
 * Templates and Page IDs without editor
 *
 */
function ea_disable_editor($id = false)
{

    $excluded_templates = array(
        'template-about.php',
        'template-ourclients.php',
        'template-contact.php',
        'template-commitments.php',
        'template-faq.php'
    );

    $excluded_ids = array(
        get_option('page_on_front')
    );

    if (empty($id))
        return false;

    $id = intval($id);
    $template = get_page_template_slug($id);

    return in_array($id, $excluded_ids) || in_array($template, $excluded_templates);
}

/**
 * Disable Gutenberg by template
 *
 */
function ea_disable_gutenberg($can_edit, $post_type)
{

    if (!(is_admin() && !empty($_GET['post'])))
        return $can_edit;

    if (ea_disable_editor($_GET['post']))
        $can_edit = false;

    return $can_edit;
}
add_filter('gutenberg_can_edit_post_type', 'ea_disable_gutenberg', 10, 2);
add_filter('use_block_editor_for_post_type', 'ea_disable_gutenberg', 10, 2);

/**
 * Disable Classic Editor by template
 *
 */
function ea_disable_classic_editor()
{

    $screen = get_current_screen();
    if ('page' !== $screen->id || !isset($_GET['post']))
        return;

    if (ea_disable_editor($_GET['post'])) {
        remove_post_type_support('page', 'editor');
    }
}
add_action('admin_head', 'ea_disable_classic_editor');



/*
 * Remove Simple Post
 */
function post_remove()
{
    remove_menu_page('edit.php');
}
add_action('admin_menu', 'post_remove');


/*
 * disable Comment
 */
require_once('inc/commentsDisabler.php');


/*
 * Disable WP HEAD
 */
require_once('inc/cleanHead.php');


/*
 * Option Pages
 */
require_once('inc/optionsPages.php');


/*
 * Images
 */

require_once('inc/images.php');


/*
 * Garde-fou à l'envoi des images (JPG trop lourds, photos en PNG, GIF)
 */

require_once('inc/uploadGuard.php');


/*
 * CSS découpé par page (base.css + page-*.css)
 */

require_once('inc/pageCss.php');


/*
 * Consentement (tarteaucitron) côté serveur
 */

require_once('inc/consent.php');


/*
 * Pages sans gabarit (index.php) : vraie 404
 */

require_once('inc/notFound.php');


/*
 * Vidéos YouTube du contenu : aperçu, lecteur chargé au clic
 */

require_once('inc/embeds.php');


/*
 * Données structurées : adresse et contact de l'agence
 */

require_once('inc/schema.php');


/*
 * Cas favoris (Options) : cas proposés en bas des études de cas
 */

require_once('inc/caseFavorites.php');


/*
 * Posttype
 */
require_once('inc/posttype/stories.php');
// case, services, people, lead et leurs taxonomies, quand l'extension Types est désactivée
require_once('inc/posttype/fromTypes.php');
//require_once('inc/posttype/work.php');

/*
 * Taxonomies
 */
require_once('inc/taxonomy/storyCategory.php');

/*
 * Filter Query from cases
 */
require_once('inc/mainQuery.php');

/*
 * Menus Helpers;
 */

function wpml_shortcode_func()
{
    if (function_exists('icl_get_languages')) {

        $output    = '';
        $languages = icl_get_languages('skip_missing=0&orderby=id&order=asc');

        $output .= '<div class="lang_selector">';

        foreach ($languages as $i => $data) :
            if ($data['language_code'] == mojoLang()) :
                $output .= '<a class="active" href="' . $data['url'] . '">' . $i . '</a>';
            else :
                $output .= '<a href="' . $data['url'] . '">' . $i . '</a>';
            endif;
        endforeach;

        $output .= '</div>';

        return $output;
    }
}
add_shortcode('wpml_lang_selector', 'wpml_shortcode_func');

require_once('inc/BridgeWalker.php');

function getCustomMenu($menu_slug)
{
    $menu_items = array();

    if (($locations = get_nav_menu_locations()) && isset($locations[$menu_slug])) {
        $menu = get_term($locations[$menu_slug]);
        $menu_items = wp_get_nav_menu_items($menu->term_id);

        $walker    = new Bridge_Walker_Nav_Menu;
        $items     = $walker->walk($menu_items, 0);
        return $items;
    }
}

if (!function_exists('setup_theme_menu')) :
    function setup_theme_menu()
    {
        register_nav_menus(array(
            'main'      => __('Main', 'mj'),
            'more'      => __('More', 'mj'),
            'social'      => __('Social', 'mj'),
            'Sitemap'      => __('Sitemap', 'mj'),
        ));
    }
endif;
add_action('after_setup_theme', 'setup_theme_menu');


/**
 * Helpers
 */

function getPartial($name, $variables = array(), $print = true)
{
    $output = NULL;
    $folder = 'partials';
    $filepath = get_template_directory() . '/' . $folder . '/' . $name . '.php';

    if (file_exists($filepath)) {
        // Extract the variables to a local namespace
        extract($variables);

        // Start output buffering
        ob_start();

        // Include the template file
        include $filepath;

        // End buffering and return its contents
        $output = ob_get_clean();
    }
    if ($print) {
        print $output;
    }
    return $output;
}

function isUrlCurrent($url)
{
    return $url == getCurrentLocation();
}

function truncate($text, $count)
{
    if (strlen($text) > $count) {
        $lastPos = ($count - 3) - strlen($text);
        $text = substr($text, 0, strrpos($text, ' ', $lastPos)) . '...';
    }
    return $text;
}

function getBodyClass()
{
    $class = [];

    if (is_admin_bar_showing()) {
        $class[] = 'adminbar';
    }

    if (is_404()) {
        $class[] = 'page-error';
    }

    return implode(' ', $class);
}

function getCurrentLocation()
{
    if (
        isset($_SERVER['HTTPS']) &&
        ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) ||
        isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&
        $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https'
    ) {
        $protocol = 'https://';
    } else {
        $protocol = 'http://';
    }
    return $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
}

function getModifier($baseClass, $arrayOfModifier)
{
    if (count($arrayOfModifier) < 1) return;
    $str = '';
    foreach ($arrayOfModifier as $modifier) {
        $str .= ' ' . $baseClass . '--' . $modifier;
    }
    return $str;
}

function getUrlVersion($path)
{
    $filename = get_theme_file_path($path);

    if (file_exists($filename)) {
        $url = get_theme_file_uri($path);
        $timestamp = date("U", filemtime($filename));
        return $url . '?last-modification=' . $timestamp;
    }
}

function getUrl($path)
{
    $filename = get_theme_file_path($path);

    if (file_exists($filename)) {
        $url = get_theme_file_uri($path);
        return $url;
    }
}

function getCustomThumbnail($id, $size)
{
    $imageId = get_post_thumbnail_id($id);
    if (!$imageId) return;
    $image = new stdClass;
    if (is_string($size)) {
        $data = wp_get_attachment_image_src($imageId, $size);
        $image->src = $data[0];
    } elseif (is_array($size)) {
        $src = [];
        foreach ($size as $itemSize) {
            $src[$itemSize] = wp_get_attachment_image_src($imageId, $itemSize)[0];
        }
        $image->src = $src;
        $data = wp_get_attachment_image_src($imageId, $size[0]);
    }
    // Dimensions de la (première) taille : attributs width/height des <img>
    $image->width = $data[1] ?? '';
    $image->height = $data[2] ?? '';
    $image->alt = get_post_meta($imageId, '_wp_attachment_image_alt', true);
    return $image;
}

function getPagebyTemplate($templateName)
{
    $page = get_posts(array(
        'post_type' => 'page',
        'meta_key' => '_wp_page_template',
        'meta_value' => $templateName,
        'hierarchical' => 0,
        'posts_per_page' => 1,
        // Page de la langue courante : get_posts ignore WPML par défaut, et les pages
        // EN et FR ont la même date de création, donc la base renvoyait l'une ou
        // l'autre au hasard (adresse « Belgique » sur la page lead anglaise).
        'suppress_filters' => false,
        'orderby' => 'ID',
        'order' => 'ASC',
    ));
    if ($page) return current($page);
}

function getTemplateLink($templateName)
{
    $page = getPagebyTemplate($templateName);
    if ($page) return get_permalink($page);
}

function formatPhone($number)
{
    $number = str_replace("+", "00", $number);
    $number = preg_replace('/[^0-9]/', '', $number);
    return $number;
}

function slugify($text)
{
    // replace non letter or digits by -
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);

    // transliterate
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

    // remove unwanted characters
    $text = preg_replace('~[^-\w]+~', '', $text);

    // trim
    $text = trim($text, '-');

    // remove duplicate -
    $text = preg_replace('~-+~', '-', $text);

    // lowercase
    $text = strtolower($text);

    if (empty($text)) {
        return 'n-a';
    }

    return $text;
}

function isExternal($url)
{
    $url = parse_url($url);
    $site = parse_url(get_site_url());

    return $url['host'] != $site['host'];
}


add_action('after_setup_theme', 'my_theme_setup');
function my_theme_setup()
{
    load_theme_textdomain('mj', get_template_directory() . '/languages');
}

// Langues WPML sans jamais faire tomber la page : une traduction corrompue
// peut faire planter icl_get_languages(), appelé dans le header de chaque page.
// En cas d'échec, le sélecteur de langue disparaît, le reste de la page s'affiche.
function mojoLanguages()
{
    if (!function_exists('icl_get_languages')) {
        return [];
    }
    try {
        $languages = icl_get_languages('skip_missing=0');
    } catch (\Throwable $e) {
        error_log('mojoLanguages : ' . $e->getMessage());
        return [];
    }
    return is_array($languages) ? $languages : [];
}

// Langue de la page. ICL_LANGUAGE_CODE n'existe que si WPML est actif : le
// lire sans garde ferait tomber le site (erreur 500) si WPML était désactivé.
function mojoLang()
{
    return defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : 'en';
}

// Lien Google Maps vers une adresse saisie dans l'admin sur plusieurs lignes
// (<br>, retours à la ligne) : lignes jointes par des virgules, sans %0D%0A dans
// l'URL. Format officiel de Google (api=1) : ouvre le lieu, pas un itinéraire.
function mapsUrl($address)
{
    $text  = wp_strip_all_tags(preg_replace('/<br\s*\/?>/i', "\n", (string) $address));
    $lines = array_filter(array_map('trim', preg_split('/\R+/', html_entity_decode($text, ENT_QUOTES, 'UTF-8'))));
    return 'https://www.google.com/maps/search/?api=1&query=' . rawurlencode(implode(', ', $lines));
}

function getLanguageLinks($class = "header__language")
{
    $link = '';
    foreach (mojoLanguages() as $c => $l) {
        if (!empty($l['active']) || empty($l['url'])) continue;
        $link .= '<a href="' . esc_url($l['url']) . '" class="' . esc_attr($class) . '" data-barba-prevent>';
        $link .= '<abbr title="' . esc_attr($l['native_name'] ?? '') . '">' . esc_html(ucfirst($c)) . '</abbr>';
        $link .= '</a>';
    }
    return $link;
}

function get2LanguageLinks($class = "header__language")
{
    $link = '';
    foreach (mojoLanguages() as $c => $l) {
        if (empty($l['url'])) continue;
        $current = !empty($l['active']) ? ' ' . $class . '--current' : '';
        $link .= '<a href="' . esc_url($l['url']) . '" class="' . esc_attr($class . $current) . '" data-barba-prevent>';
        $link .= '<abbr title="' . esc_attr($l['native_name'] ?? '') . '">' . esc_html(ucfirst($c)) . '</abbr>';
        $link .= '</a>';
    }
    return $link;
}



/**
 * We use WordPress's init hook to make sure
 * our blocks are registered early in the loading
 * process.
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 */
function mojo_register_acf_blocks()
{
    /**
     * We register our block's with WordPress's handy
     * register_block_type();
     *
     * @link https://developer.wordpress.org/reference/functions/register_block_type/
     */
    register_block_type(__DIR__ . '/blocks/quoteimage');
    register_block_type(__DIR__ . '/blocks/twoimages');
    register_block_type(__DIR__ . '/blocks/textimage');
    register_block_type(__DIR__ . '/blocks/textgallery');
    register_block_type(__DIR__ . '/blocks/fullblackimage');
    register_block_type(__DIR__ . '/blocks/fullimage');
    register_block_type(__DIR__ . '/blocks/wrapperimage');
    register_block_type(__DIR__ . '/blocks/imagesslider');
}
// Here we call our tt3child_register_acf_block() function on init.
add_action('init', 'mojo_register_acf_blocks');



function rjs_lwp_contactform_css_js()
{
    wp_dequeue_script('contact-form-7');
    wp_dequeue_style('contact-form-7');
    wp_dequeue_script('wpcf7-recaptcha-js');
    wp_dequeue_script('wp-polyfill-js');
    wp_dequeue_script('regenerator-runtime-js');
    wp_dequeue_script('wp-polyfill-inert-js');
    wp_dequeue_script('wpcf7-recaptcha-js-extra');
    wp_dequeue_script('wpcf7-recaptcha-js');

    wp_dequeue_style('mfcf7_zl_button_style');
    wp_dequeue_script('jquery-migrate-js');
    wp_dequeue_script('mfcf7_zl_multiline_files_script');
    wp_dequeue_script('jquery-core-js');
}
add_action('wp_enqueue_scripts', 'rjs_lwp_contactform_css_js');
add_action('wpcf7_enqueue_styles', function () {
    wp_deregister_style('contact-form-7');
});
add_action('wpcf7_enqueue_scripts', function () {
    wp_deregister_script('jquery-form');
});

add_filter('wpcf7_load_js', '__return_false');
add_filter('wpcf7_load_css', '__return_false');

// Plugin « Multiline files » : il ajoute avant le champ fichier une copie cachée
// (même id « your-file ») pour son bouton « ajouter un fichier », dont le script
// est retiré ci-dessus. Cette copie donnait un id en double (HTML invalide) et
// c'est elle que visaient le libellé et ContactForm.js. On ne vide que ce modèle
// (le plugin passe aussi le vrai champ par ce filtre) : tout vise alors le vrai
// champ, même nom à l'envoi (your-file[]).
// Le plugin ajoute son bouton « ajouter un fichier » dans un <p><label>…</label></p>,
// alors que le champ est déjà dans le <p> du formulaire : un paragraphe dans un
// paragraphe, donc un </p> en trop (HTML invalide). Le bouton est caché (c'est le
// libellé du thème qui sert de bouton) : on garde son champ, sans l'enveloppe.
add_filter('wpcf7_form_elements', function ($html) {
    return preg_replace(
        ['#<p><label>(<span class="wpcf7-form-control-wrap" data-name="[^"]*-zl-mfcf7-upld-btn">.*?</span>)</label></p>#s',
         // Conteneur vide du plugin : un <div> ferme le <p> du champ (même problème).
         '#<div id="mfcf7_zl_multifilecontainer"></div>#'],
        ['$1', '<span id="mfcf7_zl_multifilecontainer"></span>'],
        $html
    );
});

// Le plugin met aussi value="Upload" sur le champ fichier : attribut interdit
// sur un <input type="file"> (HTML invalide), et sans effet. On le retire.
add_filter('cf7_multilinefile_atts', function ($atts) {
    unset($atts['value']);
    return $atts;
});

add_filter('cf7_multilinefile_input', function ($format) {
    if (strpos($format, 'mfcf7-zl-multiline-sample') !== false) return '';
    // Message d'erreur (%3$s) sorti de l'enveloppe du champ, cachée en CSS (c'est
    // le libellé qui sert de bouton) : sinon « fichier trop lourd » reste invisible.
    return str_replace('%3$s', '', $format) . '%3$s';
});

// Le plugin rattache ses erreurs (taille, type) au bouton « your-file-zl-mfcf7-upld-btn »
// de la copie retirée ci-dessus : on les reporte sur le vrai champ pour qu'elles
// s'affichent sous « + Ajouter une pièce jointe ».
foreach (['wpcf7_validate_multilinefile', 'wpcf7_validate_multilinefile*'] as $hook) {
    add_filter($hook, function ($result, $tag) {
        $tag = $tag instanceof WPCF7_FormTag ? $tag : new WPCF7_FormTag($tag);
        $invalid = $result->get_invalid_fields();
        $btn = $tag->name . '-zl-mfcf7-upld-btn';
        if (isset($invalid[$btn]) && !isset($invalid[$tag->name])) {
            $result->invalidate($tag, $invalid[$btn]['reason']);
        }
        return $result;
    }, 20, 2);
}

function deregister_polyfill()
{

    //wp_deregister_script( 'wp-polyfill' );
    //wp_deregister_script( 'regenerator-runtime' );

}
add_action('wp_enqueue_scripts', 'deregister_polyfill');

function splitCharWord($text, $charIndex = 0)
{
    if (!$text) return;
    $text = str_replace('<br>', '£', $text);
    $output = '';

    $lines = explode("<br />", trim($text));
    foreach ($lines as $key => $line) {
        $words = explode(" ", trim($line));
        foreach ($words as $word) {
            $output .= '<span class="fx-word">';
            foreach (mb_str_split($word) as $char) {
                $charIndex++;
                // --i : rang de la lettre, seul lu par le CSS pour décaler
                // l'animation (src/scss/base/_inview.scss), quelle que soit la
                // longueur du titre (plus de classe fx-letter--N).
                $output .= '<span class="fx-letter" style="--i:' . $charIndex . '">';
                $output .= $char;
                $output .= '</span>';
            }
            $output .= '</span><span class="fx-space"> </span>';
        }
        $output .= '<br />';
    }
    $output = str_replace('£', '<br>', $output);

    return $output;
}


// updates 
add_filter('automatic_updates_is_vcs_checkout', '__return_false', 1);


/* FAQPage JSON-LD depuis ACF (sections > items > title/text)
 * Ciblé sur le template : template-faq.php
 */

// 1) Couper la FAQ Yoast UNIQUEMENT sur ce template
add_filter('wpseo_schema_needs_faq', function ($needs) {
    if (is_page_template('template-faq.php')) {
        return false;
    }
    return $needs;
}, 20);

// 2) Injecter notre node FAQPage dans le graphe Yoast
add_filter('wpseo_schema_graph', function ($graph) {
    if (!is_page_template('template-faq.php')) {

        return $graph;
    }

    // Sécurité : ACF dispo ?
    if (!function_exists('have_rows')) {
        return $graph;
    }

    $faq_items = [];

    // Repeater parent : sections
    if (have_rows('sections')) {
        while (have_rows('sections')) {
            the_row();

            // Repeater enfant : items (title, text)
            if (have_rows('items')) {
                while (have_rows('items')) {
                    the_row();

                    $q = trim((string) get_sub_field('title'));           // Question
                    $a = (string) get_sub_field('text');                  // Réponse (HTML possible)

                    if ($q && $a) {
                        // Google préfère du texte “propre” (pas d’HTML crado)
                        // On garde simple : on strippe les tags ; si tu DOIS garder <ul><br>, adapte ici.
                        $a_clean = wp_strip_all_tags($a, true);

                        $faq_items[] = [
                            '@type' => 'Question',
                            'name'  => $q,
                            'acceptedAnswer' => [
                                '@type' => 'Answer',
                                'text'  => $a_clean,
                            ],
                        ];
                    }
                }
            }
        }
    }

    // Si rien à injecter, on ne touche pas au graphe
    if (empty($faq_items)) {
        return $graph;
    }



    // Construire le node FAQPage
    $faq_node = [
        '@type'      => 'FAQPage',
        '@id'        => trailingslashit(get_permalink()) . '#/schema/faq',
        'mainEntity' => $faq_items,
    ];

    // Ajouter au @graph de Yoast
    if (is_array($graph) && isset($graph['@graph']) && is_array($graph['@graph'])) {
        $graph['@graph'][] = $faq_node;
    } elseif (is_array($graph)) {
        $graph[] = $faq_node;
    }



    return $graph;
}, 20);
