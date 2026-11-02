<?php

// My function to modify the main query object
function my_modify_main_query($query)
{
    if (is_admin()) return $query;
    if (!$query->is_main_query()) return $query;
    if (is_singular('case')) return $query;

    if (is_post_type_archive('stories')) {
        $query->set('posts_per_page', 12);
        $query->set('orderby', 'date');
        $query->set('order', 'DESC');

        if (isset($_GET['storyCategory']) && $_GET['storyCategory']) {
            $query->set('tax_query', [[
                'taxonomy' => 'storyCategory',
                'field' => 'slug',
                'terms' => sanitize_text_field(wp_unslash($_GET['storyCategory'])),
                'operator' => 'IN',
            ]]);
        }

        return $query;
    }

    if (!$_GET) return $query;

    if ($query->get('post_type') != 'case' && is_post_type_archive('case')) return; //only on archive case !!!

    $query->query_vars['posts_per_page'] = -1;
    $tax_query = [];

    if (isset($_GET['cat-client']) && $_GET['cat-client']) {
        $tax_query[] = [
            'taxonomy' => 'client',
            'field' => 'slug',
            'terms' => sanitize_text_field($_GET['cat-client']),
            'operator' => 'IN'
        ];
    }

    if (isset($_GET['cat-territory']) && $_GET['cat-territory']) {
        $tax_query[] = [
            'taxonomy' => 'territory',
            'field' => 'slug',
            'terms' => sanitize_text_field($_GET['cat-territory']),
            'operator' => 'IN'
        ];
    }

    if (isset($_GET['cat-sector']) && $_GET['cat-sector']) {
        $tax_query[] = [
            'taxonomy' => 'sector',
            'field' => 'slug',
            'terms' => sanitize_text_field($_GET['cat-sector']),
            'operator' => 'IN'
        ];
    }

    if (isset($_GET['cat-service']) && $_GET['cat-service']) {
        $tax_query[] = [
            'taxonomy' => 'category',
            'field' => 'slug',
            'terms' => sanitize_text_field($_GET['cat-service']),
            'operator' => 'IN'
        ];
    }

    if ($tax_query) {
        $query->set('tax_query', array_merge(['relation' => 'AND'], $tax_query));
    }
}

add_action('pre_get_posts', 'my_modify_main_query');
