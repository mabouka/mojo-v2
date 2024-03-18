<?php
//define( 'WP_CACHE', true ); 
define('WP_CACHE', false);

if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && 
	strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false) {
    $_SERVER['HTTPS'] = 'on';
}
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
if(isset($_ENV['APP_ENV']) && $_ENV['APP_ENV'] === 'dev') {
        define('DB_NAME', 'mojo');
        define('DB_USER', 'root');
        define('DB_PASSWORD', '');
        define('DB_HOST', '127.0.0.1');
        define('DB_CHARSET', 'utf8mb4');
        define('DB_COLLATE', '');
        define('WP_DEBUG', true);
        define('WP_REDIS_DISABLED', true);
        define('WP_ALLOW_REPAIR', true );

        /*
        define('.COOKIE_DOMAIN.', 'mojo-agency.test');
        define('.SITECOOKIEPATH.', '.');
    
        if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $list = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);
                $_SERVER['REMOTE_ADDR'] = $list[0];
        }
        define( 'WP_HOME', 'https://mojo-agency.test' );
        define( 'WP_SITEURL', 'https://mojo-agency.test' );
        $_SERVER['HTTP_HOST'] = 'mojo-agency.test';
        $_SERVER['REMOTE_ADDR'] = 'https://mojo-agency.test';
        $_SERVER[ 'SERVER_ADDR' ] = 'mojo-agency.test';
        */

} else {
        define(‘WP_POST_REVISIONS’, 5);
        define('DB_NAME', 'hi1olg_test');
        define('DB_USER', 'hi1olg_test');
        define('DB_PASSWORD', 'DevMojo123!');
        define('DB_HOST', 'hi1olg.myd.infomaniak.com');
        define('DB_CHARSET', 'utf8mb4');
        define('DB_COLLATE', '');
        //define( 'WP_HOME', 'https://mojo-agency.org' );
        //define( 'WP_SITEURL', 'https://mojo-agency.org' );
}
/**#@+
 * Authentication Unique Keys and Salts.
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 */
require('wp-salt.php');
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';
/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('FS_METHOD', 'direct');
define('WPLANG', '');
define('FS_CHMOD_DIR', (0775 & ~umask()));
define('FS_CHMOD_FILE', (0664 & ~umask()));
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
/* That's all, stop editing! Happy blogging. */
/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH'))
        define('ABSPATH', dirname(__FILE__) . '/');
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
