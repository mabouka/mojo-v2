<!doctype html>
<html <?php language_attributes(); ?> class="no-js" dir="ltr">

<head>

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="<?php bloginfo('charset'); ?>">


    
    <!-- WPHEAD START -->
    <?php wp_head(); ?>
    <!-- WPHEAD END -->



    <!-- Preload -->
    <link rel="prefetch" href="https://ssl.google-analytics.com">

    <link rel="preload" href="<?= getUrlVersion('dist/css/main.css'); ?>" as="style">
    <link rel="preload" href="<?= getUrlVersion('dist/js/manifest.js'); ?>" as="script">
    <link rel="preload" href="<?= getUrlVersion('dist/js/vendor.js'); ?>" as="script">
    <link rel="preload" href="<?= getUrlVersion('dist/js/main.js'); ?>" as="script">

    <link rel="preload" href="<?= getUrl('dist/fonts/dm-sans-4.woff2'); ?>" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?= getUrl('dist/fonts/Cambon-Regular.woff2'); ?>" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?= getUrl('dist/fonts/Cambon-SemiBold.woff2'); ?>" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?= getUrl('dist/fonts/Cambon-Bold.woff2'); ?>" as="font" type="font/woff2" crossorigin>

    <!-- Responsive -->
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?= getUrlVersion('dist/css/main.css'); ?>">

    <?php 
        $gtag = 'GTM-KCC9J67B';
    ?>
    <!-- InView & JS -->
    <script>
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
        if ('IntersectionObserver' in window) document.documentElement.classList.add('inview'); 
        else document.documentElement.classList.add('no-inview'); 
    </script>

    <!-- Google Tag Manager -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=<?= $gtag ?>"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){
            dataLayer.push(arguments)
        };
        gtag('js', new Date());
        gtag('config', '<?= $gtag ?>', {
            send_page_view: false,
            });
    </script>
    </head>

<body <?php body_class(); ?> <body data-barba="wrapper">

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?= $gtag ?>"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div class="curtain">&nbsp;</div>

    <a class="gotocontent sro" href="#mainContent">
        <?php _e('Go to the main content', 'mj'); ?>
    </a>

    <?php getPartial("svg"); ?>

    <?php
    $isDark = true;
    $show = true;
    $withoutLogo = false;

    // dark light
    if (is_front_page()) $isDark = false;
    if (is_post_type_archive('services')) $isDark = false;
    if (is_singular('services')) $isDark = false;
    if (is_singular('case')){
        $headerColor = get_field('header_color');
        if($headerColor === 'light') $isDark = false;
    } 
    if(is_404()) $isDark = false;
    if(is_page_template( 'template-contact.php' )) $isDark = false;

    // show or not
    if (is_singular('services')) {
        global $post;
        $parent = array_reverse(get_post_ancestors($post->ID));
        if($parent) {
            $show = false;
        }
        else{
            $withoutLogo = true;
        }
    }


    ?>

    <header class="header<?= $isDark ? ' header--dark' : ' header--light' ?><?= $withoutLogo ? ' header--withoutLogo' : '' ?><?= $show ? ' ' : ' header--hidden' ?>" role="banner">
        <div class="wrapper">
            <div class="header__inside">
                <a class="header__logo" href="<?= home_url(); ?>" title="<?= __('Go back home', 'mj'); ?>">
                    <svg class="header__logoSvg" width="98" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#FAF6ED">
                            <path d="M31.644.625h-3.798L16.605 18.78V.625H11.997L0 20h5.46L15.796 3.31V20H21.31L31.644 3.31V20h.81V.625h-.81Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M35 10c0-5.523 4.844-10 10.818-10 5.975 0 10.818 4.477 10.818 10s-4.843 10-10.818 10C39.844 20 35 15.523 35 10Zm5.833 8.105c2.633 1.608 7-.717 9.754-5.194 2.753-4.476 2.85-9.409.217-11.017-2.634-1.607-7 .718-9.754 5.195-2.753 4.476-2.85 9.409-.217 11.016ZM76.363 10c0-5.523 4.844-10 10.819-10C93.156 0 98 4.477 98 10s-4.844 10-10.818 10c-5.975 0-10.819-4.477-10.819-10Zm5.833 8.105c2.633 1.608 7-.717 9.754-5.194 2.753-4.476 2.85-9.409.217-11.017-2.634-1.607-7 .718-9.754 5.195-2.753 4.476-2.85 9.409-.217 11.016Z" />
                            <path d="m65.828.625-2.882 4.529h10.057V9.54c.005.376-.074.749-.233 1.093-1.324 2.773-3.77 4.64-6.58 4.64-2.985 0-5.559-2.104-6.815-5.164h-.8c-.009.173-.03.342-.03.518 0 5.176 3.423 9.373 7.644 9.373 4.135 0 7.494-4.03 7.63-9.06V.624h-7.99Z" />
                        </g>
                    </svg>
                </a>
                <?= getLanguageLinks(); ?>
                <a href="#menu" class="header__menu openMenu" title="<?= __("Menu", "mj") ?>" data-cursor-stick>
                    <span class="sro"><?= __('Open menu', 'mj'); ?></span>
                    <svg class="header__menuSvg" width="24" height="21" viewBox="0 0 23.984 21.4">
                        <path d="m6.282,6.611C3.097,6.611,1.452,5.177,0,3.913l1.153-1.216c1.399,1.218,2.607,2.27,5.128,2.27s3.732-1.052,5.132-2.27c1.453-1.264,3.099-2.698,6.285-2.698s4.832,1.433,6.285,2.697l-1.153,1.217c-1.401-1.218-2.609-2.27-5.132-2.27s-3.733,1.052-5.133,2.27c-1.453,1.264-3.099,2.698-6.285,2.698Z" fill="#faf6ed" fill-rule="evenodd" stroke-width="0" />
                        <path d="m6.281,14.006C3.098,14.006,1.453,12.573.001,11.31l1.151-1.218.002.002c1.399,1.218,2.607,2.27,5.127,2.27s3.732-1.052,5.132-2.271c1.453-1.264,3.099-2.697,6.285-2.697s4.833,1.433,6.285,2.697l-1.152,1.216c-1.4-1.219-2.609-2.27-5.132-2.27s-3.733,1.051-5.133,2.27c-1.453,1.265-3.099,2.698-6.285,2.698Z" fill="#faf6ed" fill-rule="evenodd" stroke-width="0" />
                        <path d="m6.282,21.4c-3.184,0-4.83-1.433-6.282-2.698l1.154-1.216c1.398,1.219,2.607,2.271,5.128,2.271s3.732-1.052,5.132-2.27c1.453-1.265,3.099-2.698,6.285-2.698s4.833,1.433,6.285,2.697l-1.152,1.216c-1.4-1.218-2.61-2.27-5.132-2.27s-3.733,1.052-5.133,2.271c-1.453,1.264-3.099,2.697-6.285,2.697Z" fill="#faf6ed" fill-rule="evenodd" stroke-width="0" />
                    </svg>
                </a>
            </div>
        </div>

    </header><!-- header -->
    
    <div class="scrollContainer">
        <main class="mainContent" id="mainContent" role="main">