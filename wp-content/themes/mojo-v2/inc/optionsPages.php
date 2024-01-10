<?php 
/*
 * ACF Options pages
 */
if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title' 	=> 'Theme Settings',
        'menu_title'	=> 'Theme Settings',
        'menu_slug' 	=> 'main',
        'capability'	=> 'edit_posts',
        'redirect'		=> false
    ));

    acf_add_options_page(array(
        'page_title'    => 'Listing page',
        'menu_title'    => 'Listing page (Archive)',
        'menu_slug'     => 'archive_cases',
        'capability'    => 'edit_posts',
        'parent_slug'   => 'edit.php?post_type=case',
        'position'      => false,
        'icon_url'      => 'dashicons-images-alt2',
        'redirect'      => false,
    ));

    acf_add_options_page(array(
        'page_title'    => 'Listing page',
        'menu_title'    => 'Listing page (Archive)',
        'menu_slug'     => 'archive_service',
        'capability'    => 'edit_posts',
        'parent_slug'   => 'edit.php?post_type=services',
        'position'      => false,
        'icon_url'      => 'dashicons-images-alt2',
        'redirect'      => false,
    ));



}