<?php

function mojo_register_stories_post_type()
{
    $labels = [
        'name' => __('Stories', 'mj'),
        'singular_name' => __('Story', 'mj'),
        'menu_name' => __('Stories', 'mj'),
        'name_admin_bar' => __('Story', 'mj'),
        'add_new' => __('Add New', 'mj'),
        'add_new_item' => __('Add New Story', 'mj'),
        'new_item' => __('New Story', 'mj'),
        'edit_item' => __('Edit Story', 'mj'),
        'view_item' => __('View Story', 'mj'),
        'all_items' => __('All Stories', 'mj'),
        'search_items' => __('Search Stories', 'mj'),
        'parent_item_colon' => __('Parent Story:', 'mj'),
        'not_found' => __('No stories found.', 'mj'),
        'not_found_in_trash' => __('No stories found in Trash.', 'mj'),
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'rewrite' => ['slug' => 'stories'],
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'has_archive' => 'stories',
        'hierarchical' => false,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-format-aside',
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'author', 'revisions'],
    ];

    register_post_type('stories', $args);
}

add_action('init', 'mojo_register_stories_post_type');

function mojo_register_stories_rewrite_rules()
{
    add_rewrite_rule(
        '^stories/page/([0-9]+)/?$',
        'index.php?post_type=stories&paged=$matches[1]',
        'top'
    );

    add_rewrite_rule(
        '^stories/?$',
        'index.php?post_type=stories',
        'top'
    );
}

add_action('init', 'mojo_register_stories_rewrite_rules', 20);

function mojo_flush_stories_rewrite_rules()
{
    if (get_option('mojo_stories_rewrite_flushed')) {
        return;
    }

    mojo_register_stories_post_type();
    flush_rewrite_rules(false);
    update_option('mojo_stories_rewrite_flushed', 1);
}

add_action('init', 'mojo_flush_stories_rewrite_rules', 99);
