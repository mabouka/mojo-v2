<?php

function mojo_register_story_category_taxonomy()
{
    $labels = [
        'name' => __('Categories', 'mj'),
        'singular_name' => __('Category', 'mj'),
        'search_items' => __('Search Categories', 'mj'),
        'all_items' => __('All Categories', 'mj'),
        'parent_item' => __('Parent Category', 'mj'),
        'parent_item_colon' => __('Parent Category:', 'mj'),
        'edit_item' => __('Edit Category', 'mj'),
        'update_item' => __('Update Category', 'mj'),
        'add_new_item' => __('Add New Category', 'mj'),
        'new_item_name' => __('New Category Name', 'mj'),
        'menu_name' => __('Categories', 'mj'),
    ];

    register_taxonomy('storyCategory', ['stories'], [
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => ['slug' => 'story-category'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'mojo_register_story_category_taxonomy');

function mojo_limit_story_categories_script()
{
    $screen = get_current_screen();
    if (!$screen || $screen->post_type !== 'stories') return;

    wp_add_inline_script('wp-edit-post', '
        wp.domReady(function () {
            var subscribe = wp.data.subscribe;
            var dispatch  = wp.data.dispatch;
            var select    = wp.data.select;
            var lastValid = select("core/editor").getEditedPostAttribute("storyCategory") || [];

            subscribe(function () {
                var terms = select("core/editor").getEditedPostAttribute("storyCategory") || [];
                if (terms.length > 2) {
                    dispatch("core/editor").editPost({ storyCategory: lastValid });
                    dispatch("core/notices").createWarningNotice(
                        "Maximum 2 catégories autorisées.",
                        { id: "story-cat-limit", isDismissible: true }
                    );
                } else {
                    lastValid = terms;
                }
            });
        });
    ');
}
add_action('admin_enqueue_scripts', 'mojo_limit_story_categories_script');

function mojo_limit_story_categories_on_save($post_id, $post)
{
    if ($post->post_type !== 'stories' || wp_is_post_revision($post_id)) return;

    $terms = wp_get_post_terms($post_id, 'storyCategory', ['fields' => 'ids']);
    if (is_array($terms) && count($terms) > 2) {
        wp_set_post_terms($post_id, array_slice($terms, 0, 2), 'storyCategory');
    }
}
add_action('save_post', 'mojo_limit_story_categories_on_save', 20, 2);
