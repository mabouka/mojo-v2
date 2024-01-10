<?php 

/**
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function work_init() {
    $labels = array(
        'name'               => 'Works', 
        'singular_name'      => 'Work', 
        'menu_name'          => 'Works', 
        'name_admin_bar'     => 'Works',
        'add_new'            => 'Add New', 
        'add_new_item'       => 'Add New Work',
        'new_item'           => 'New Work',
        'edit_item'          => 'Edit Work',
        'view_item'          => 'View Work',
        'all_items'          => 'All Works',
        'search_items'       => 'Search Works',
        'parent_item_colon'  => 'Parent Work:',
        'not_found'          => 'No Works found.',
        'not_found_in_trash' => 'No Works found in Trash.',
    );

    $args = array(
        'labels'             => $labels,
        'description'        => '',
        'public'             => true,
        'rewrite' => array('slug' => 'work'),
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'cap-adminability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 4,
        'menu_icon'          => 'dashicons-welcome-view-site',
        'supports'           => array( 'title', 'thumbnail', 'revisions' ),
    );

    register_post_type( 'work', $args );
}

add_action( 'init', 'work_init' );
