<?php
/**
 * Performance Optimizations
 * Advanced WordPress performance enhancements
 */

// Database Query Optimization
function optimize_database_queries() {
    // Limit post revisions
    if (!defined('WP_POST_REVISIONS')) {
        define('WP_POST_REVISIONS', 3);
    }
    
    // Increase memory limit
    if (!defined('WP_MEMORY_LIMIT')) {
        define('WP_MEMORY_LIMIT', '256M');
    }
    
    // Enable object caching
    if (!defined('WP_CACHE_KEY_SALT')) {
        define('WP_CACHE_KEY_SALT', 'mojo-agency-' . NONCE_SALT);
    }
}
add_action('init', 'optimize_database_queries');

// Remove unnecessary WordPress features
function remove_wp_features() {
    // Remove WordPress version from head
    remove_action('wp_head', 'wp_generator');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove Windows Live Writer
    remove_action('wp_head', 'wlwmanifest_link');
    
    // Remove index link
    remove_action('wp_head', 'index_rel_link');
    
    // Remove previous link
    remove_action('wp_head', 'parent_post_rel_link', 10, 0);
    
    // Remove start link
    remove_action('wp_head', 'start_post_rel_link', 10, 0);
    
    // Remove links for adjacent posts
    remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
    
    // Remove WP version from css
    remove_action('wp_head', 'wp_generator');
    
    // Remove WP version from RSS
    add_filter('the_generator', '__return_empty_string');
}
add_action('after_setup_theme', 'remove_wp_features');

// Optimize database cleanup
function cleanup_database() {
    global $wpdb;
    
    // Clean up spam comments
    $wpdb->query("DELETE FROM {$wpdb->comments} WHERE comment_approved = 'spam'");
    
    // Clean up trashed comments
    $wpdb->query("DELETE FROM {$wpdb->comments} WHERE comment_approved = 'trash'");
    
    // Clean up orphaned comment meta
    $wpdb->query("DELETE FROM {$wpdb->commentmeta} WHERE comment_id NOT IN (SELECT comment_ID FROM {$wpdb->comments})");
    
    // Clean up orphaned post meta
    $wpdb->query("DELETE FROM {$wpdb->postmeta} WHERE post_id NOT IN (SELECT ID FROM {$wpdb->posts})");
    
    // Clean up auto-drafts older than 7 days
    $wpdb->query("DELETE FROM {$wpdb->posts} WHERE post_status = 'auto-draft' AND post_date < DATE_SUB(NOW(), INTERVAL 7 DAY)");
}

// Schedule database cleanup weekly
if (!wp_next_scheduled('mojo_database_cleanup')) {
    wp_schedule_event(time(), 'weekly', 'mojo_database_cleanup');
}
add_action('mojo_database_cleanup', 'cleanup_database');

// Critical CSS inlining
function inline_critical_css() {
    $critical_css_file = get_template_directory() . '/dist/css/critical.css';
    if (file_exists($critical_css_file)) {
        echo '<style id="critical-css">' . file_get_contents($critical_css_file) . '</style>';
    }
}
add_action('wp_head', 'inline_critical_css', 1);

// Preload key requests
function preload_key_requests() {
    // Preload main stylesheet
    echo '<link rel="preload" href="' . get_template_directory_uri() . '/dist/css/main.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">';
    
    // Preload main JavaScript
    echo '<link rel="preload" href="' . get_template_directory_uri() . '/dist/js/main.js" as="script">';
    
    // Preload critical images
    if (is_front_page()) {
        $hero_image = get_field('hero_image');
        if ($hero_image) {
            echo '<link rel="preload" href="' . $hero_image['url'] . '" as="image">';
        }
    }
}
add_action('wp_head', 'preload_key_requests', 2);

// Optimize images automatically
function optimize_uploaded_images($metadata, $attachment_id) {
    $file = get_attached_file($attachment_id);
    $filetype = wp_check_filetype($file);
    
    if (in_array($filetype['type'], ['image/jpeg', 'image/jpg', 'image/png'])) {
        // Add WebP conversion logic here if needed
        // This would require additional server-side tools
    }
    
    return $metadata;
}
add_filter('wp_generate_attachment_metadata', 'optimize_uploaded_images', 10, 2);

// Reduce HTTP requests by combining CSS files
function combine_css_files() {
    if (is_admin()) return;
    
    global $wp_styles;
    $combined_css = '';
    $theme_dir = get_template_directory();
    
    foreach ($wp_styles->queue as $handle) {
        if (isset($wp_styles->registered[$handle])) {
            $src = $wp_styles->registered[$handle]->src;
            if (strpos($src, get_template_directory_uri()) !== false) {
                $file_path = str_replace(get_template_directory_uri(), $theme_dir, $src);
                if (file_exists($file_path)) {
                    $combined_css .= file_get_contents($file_path);
                    wp_dequeue_style($handle);
                }
            }
        }
    }
    
    if (!empty($combined_css)) {
        echo '<style id="combined-css">' . $combined_css . '</style>';
    }
}
add_action('wp_head', 'combine_css_files', 100);

// Enable output buffering for compression
function start_output_buffering() {
    if (!is_admin()) {
        ob_start('compress_output');
    }
}

function compress_output($buffer) {
    // Remove unnecessary whitespace
    $buffer = preg_replace('/\s+/', ' ', $buffer);
    $buffer = preg_replace('/>\s+</', '><', $buffer);
    
    return $buffer;
}
add_action('init', 'start_output_buffering');

// Disable unnecessary WordPress features for performance
function disable_wp_features_for_performance() {
    // Disable XML-RPC
    add_filter('xmlrpc_enabled', '__return_false');
    
    // Remove query strings from static resources
    function remove_query_string($src) {
        $output = preg_split("/(&ver|\?ver)/", $src);
        return $output[0];
    }
    add_filter('script_loader_src', 'remove_query_string', 15, 1);
    add_filter('style_loader_src', 'remove_query_string', 15, 1);
    
    // Disable pingbacks
    function disable_pingback(&$links) {
        foreach ($links as $l => $link) {
            if (0 === strpos($link, get_option('home'))) {
                unset($links[$l]);
            }
        }
    }
    add_action('pre_ping', 'disable_pingback');
    
    // Remove pingback header
    function remove_x_pingback($headers) {
        unset($headers['X-Pingback']);
        return $headers;
    }
    add_filter('wp_headers', 'remove_x_pingback');
}
add_action('init', 'disable_wp_features_for_performance');