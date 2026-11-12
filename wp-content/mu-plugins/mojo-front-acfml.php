<?php
/**
 * Plugin Name: MOJO – ACF Multilingual seulement dans l'admin
 * Description: Ne charge pas ACF Multilingual (acfml) quand un visiteur consulte le site.
 *
 * ACF Multilingual sert à traduire et synchroniser les champs ACF quand on
 * enregistre une page dans l'admin. Sur le site public, il ne change rien à ce
 * qui s'affiche (texte des 240 pages identique avec et sans lui, vérifié sur le
 * staging le 12/11/2026) mais coûte environ 40 ms par page hors cache (jusqu'à
 * 70 ms sur l'accueil).
 *
 * Il reste chargé partout ailleurs : admin, AJAX, tâches planifiées, API REST
 * (éditeur de blocs, éditeur de traduction de WPML), WP-CLI, connexion.
 * Pour revenir en arrière : supprimer ce fichier.
 */

defined('ABSPATH') || exit;

function mojo_front_without_acfml()
{
    if (is_admin()) return false;                                   // admin et admin-ajax.php
    if (defined('DOING_AJAX') && DOING_AJAX) return false;
    if (defined('DOING_CRON') && DOING_CRON) return false;
    if (defined('WP_CLI') && WP_CLI) return false;
    if (defined('XMLRPC_REQUEST') && XMLRPC_REQUEST) return false;
    if (defined('REST_REQUEST') && REST_REQUEST) return false;
    $uri = (string) ($_SERVER['REQUEST_URI'] ?? '');
    $rest = '/' . trim((string) (function_exists('rest_get_url_prefix') ? rest_get_url_prefix() : 'wp-json'), '/') . '/';
    if (strpos($uri, $rest) !== false || isset($_GET['rest_route'])) return false;          // API REST
    if (strpos($uri, 'wp-login.php') !== false || strpos($uri, 'wp-cron.php') !== false) return false;
    if (isset($_GET['preview']) || isset($_GET['wpml-preview'])) return false;               // aperçus de l'éditeur
    if (isset($_GET['mojo-acfml'])) return false;                                            // mesure avant / après : garde l'extension
    return true;
}

if (mojo_front_without_acfml()) {
    add_filter('option_active_plugins', function ($plugins) {
        return array_values(array_filter((array) $plugins, function ($p) {
            return strpos($p, 'acfml/') !== 0;
        }));
    }, 1);
}
