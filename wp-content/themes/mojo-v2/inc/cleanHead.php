<?php 

/**
 * remove title
 */

/**
 * Clean Wp Head
 */

function remove_xmlrpc_pingback_ping( $methods ) {
    unset( $methods['pingback.ping'] );
    return $methods;
 } ;
 
 function cleanHead() {
     remove_action('wp_head', 'wlwmanifest_link'); //<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://example.com/wp-includes/wlwmanifest.xml" />
     remove_action('wp_head', 'wp_generator'); //<meta name="generator" content="WordPress 2.8.4" />
     remove_action('wp_head', 'rsd_link'); //<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://example.com/xmlrpc.php?rsd" />
     remove_action( 'wp_head', 'wp_shortlink_wp_head'); // link shortlink
 
     //Oembed
     remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 ); //oembed
     remove_action( 'wp_head', 'wp_oembed_add_host_js' ); //oembed
     remove_action('rest_api_init', 'wp_oembed_register_route'); //oembed
     remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10); //oembed

     //Emoji
     remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
     remove_action( 'wp_print_styles', 'print_emoji_styles' );
 }

    //Remove Gutenberg Block Library CSS from loading on the frontend
    function smartwp_remove_wp_block_library_css(){

        if ( is_single() && 'case' == get_post_type() ) {

        }
        else{
            wp_dequeue_style( 'wp-block-library' );
            wp_dequeue_style( 'wp-block-library-theme' );
        }
    } 

    add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );

    add_action( 'wp_enqueue_scripts', function() {


        if ( is_single() && 'case' == get_post_type() ) {

        }
        else{
            wp_dequeue_style( 'classic-theme-styles' );
            wp_dequeue_style( 'global-styles' );
        }
    }, 20 );

    //WPML
    define('ICL_DONT_LOAD_LANGUAGE_SELECTOR_CSS', true);

    function prefix_disable_wpml_block_styles() {

        if ( is_single() && 'case' == get_post_type() ) {

        }
        else{
            if ( class_exists( 'WPML\BlockEditor\Loader' ) ) {
                wp_deregister_style( WPML\BlockEditor\Loader::SCRIPT_NAME );
            }
        }
    }
     
    add_action( 'wp_enqueue_scripts', 'prefix_disable_wpml_block_styles', 11 );

    //YOAST
    add_filter( 'wpseo_debug_markers', '__return_false' );

    


 add_filter( 'xmlrpc_methods', 'remove_xmlrpc_pingback_ping' );
 add_action( 'init', 'cleanHead' );
 add_filter( 'emoji_svg_url', '__return_false' );
 
