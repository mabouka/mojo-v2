<?php


if (!function_exists('mojo_setup')) :
    function mojo_setup()
    {
        add_theme_support('post-thumbnails');
        add_theme_support('title-tag');;
    }
endif;
add_action('after_setup_theme', 'mojo_setup');



function disable_block_editor_for_page_ids( $use_block_editor, $post ) {


    if ( (!$post->post_parent) && $post->post_type === "services") {
        return false;

    }
    return $use_block_editor;
}
add_filter( 'use_block_editor_for_post', 'disable_block_editor_for_page_ids', 10, 2 );
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
        'template-commitments.php'
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
 * Posttype
 */
//require_once('inc/posttype/work.php');


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
            if ($data['language_code'] == ICL_LANGUAGE_CODE) :
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
        $image->src = wp_get_attachment_image_src($imageId, $size)[0];
    } elseif (is_array($size)) {
        $src = [];
        foreach ($size as $itemSize) {
            $src[$itemSize] = wp_get_attachment_image_src($imageId, $itemSize)[0];
        }
        $image->src = $src;
    }
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
        'posts_per_page' => 1
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


add_action( 'after_setup_theme', 'my_theme_setup' );
function my_theme_setup(){
    load_theme_textdomain( 'mj', get_template_directory() . '/languages' );
}

function getLanguageLinks($class = "header__language")
{
    if (!function_exists('icl_get_languages')) {
        return '';
    }
    $languages = icl_get_languages('skip_missing=0');
    $active = $languages[ICL_LANGUAGE_CODE];
    $link = '';
    if (!empty($languages)) {
        foreach ($languages as $c => $l) {
            if (!$l['active']) {
                $link .= '<a href="' . $l['url'] . '" class="' . $class.'">';
                $link .= '<abbr title="' . $l['native_name'] . '">' . ucfirst($c) . '</abbr>';
                $link .= '</a>';
            }
        }
    }
    else{
        $link .= '<a href="' . $l['url'] . '" class="' . $class.'">';
        $link .= '<abbr title="' . $l['native_name'] . '">' . ucfirst($c) . '</abbr>';
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
function mojo_register_acf_blocks() {
    /**
     * We register our block's with WordPress's handy
     * register_block_type();
     *
     * @link https://developer.wordpress.org/reference/functions/register_block_type/
     */
    register_block_type( __DIR__ . '/blocks/quoteimage' );
    register_block_type( __DIR__ . '/blocks/twoimages' );
    register_block_type( __DIR__ . '/blocks/textimage' );
    register_block_type( __DIR__ . '/blocks/textgallery' );
    register_block_type( __DIR__ . '/blocks/fullblackimage' );
    register_block_type( __DIR__ . '/blocks/fullimage' );
    register_block_type( __DIR__ . '/blocks/wrapperimage' );
    register_block_type( __DIR__ . '/blocks/imagesslider' );

}
// Here we call our tt3child_register_acf_block() function on init.
add_action( 'init', 'mojo_register_acf_blocks' );


/**
 * Change submit from input to button
 *
 * Do not use example provided by Gravity Forms as it strips out the button attributes including onClick
 */
function wd_gf_update_submit_button( $button_input, $form ) {

    //save attribute string to $button_match[1]
    preg_match( "/<input([^\/>]*)(\s\/)*>/", $button_input, $button_match );

    //remove value attribute (since we aren't using an input)
    $button_atts = str_replace( "value='" . $form['button']['text'] . "' ", "", $button_match[1] );

    // create the button element with the button text inside the button element instead of set as the value
    return '<button ' . $button_atts . '><span>' . $form['button']['text'] . '</span></button>';

}
add_filter('gform_submit_button', 'wd_gf_update_submit_button', 10, 2);
add_filter( 'gform_disable_css', '__return_true' );