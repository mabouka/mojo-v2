<nav class="menu">
    <div class="wrapper">
        <div class="menu__inside">

            <h2 class="menu__title sro"><?= __('Navigation','mj') ?></h2>

            <div class="menu__header">
                <a class="menu__headerLogo" href="<?= home_url(); ?>" title="<?= __('Go back home', 'mj'); ?>">
                    <svg class="menu__headerLogoSvg" width="98" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#FAF6ED">
                            <path d="M31.644.625h-3.798L16.605 18.78V.625H11.997L0 20h5.46L15.796 3.31V20H21.31L31.644 3.31V20h.81V.625h-.81Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M35 10c0-5.523 4.844-10 10.818-10 5.975 0 10.818 4.477 10.818 10s-4.843 10-10.818 10C39.844 20 35 15.523 35 10Zm5.833 8.105c2.633 1.608 7-.717 9.754-5.194 2.753-4.476 2.85-9.409.217-11.017-2.634-1.607-7 .718-9.754 5.195-2.753 4.476-2.85 9.409-.217 11.016ZM76.363 10c0-5.523 4.844-10 10.819-10C93.156 0 98 4.477 98 10s-4.844 10-10.818 10c-5.975 0-10.819-4.477-10.819-10Zm5.833 8.105c2.633 1.608 7-.717 9.754-5.194 2.753-4.476 2.85-9.409.217-11.017-2.634-1.607-7 .718-9.754 5.195-2.753 4.476-2.85 9.409-.217 11.016Z" />
                            <path d="m65.828.625-2.882 4.529h10.057V9.54c.005.376-.074.749-.233 1.093-1.324 2.773-3.77 4.64-6.58 4.64-2.985 0-5.559-2.104-6.815-5.164h-.8c-.009.173-.03.342-.03.518 0 5.176 3.423 9.373 7.644 9.373 4.135 0 7.494-4.03 7.63-9.06V.624h-7.99Z" />
                        </g>
                    </svg>
                </a>
                <?= getLanguageLinks('menu__headerLanguage'); ?>
                <a href="#menu" class="menu__headerClose closeMenu" title="<?= __("Close Menu", "mj") ?>">
                    <svg class="menu__headerCloseSvg" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 1L1.5 22" stroke="#131C23" stroke-width="2"/>
                        <path d="M22.5 22L1.5 1" stroke="#131C23" stroke-width="2"/>
                    </svg>
                </a>
            </div>


            <?php if ($sitemap = getCustomMenu('main')) : ?>
            <?php 
                global $wp;
                $current_url = home_url(add_query_arg(array(), $wp->request));
            ?>
            <div class="menu__main">
                <?php foreach ($sitemap as $key => $item) : ?>
                <?php 
                    $isCurrent = $item['url'] === $current_url . '/';
                    ?>
                <a class="menu__mainItem<?= $isCurrent ? ' menu__mainItem--current' : '' ?> menu__mainItem--<?= $key ?>" href="<?= $item['url'] ?>">
                    <span><?= $item['title'] ?></span>
                </a>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>


            <?php if ($sitemap = getCustomMenu('social')) : ?>
            <section class="menu__secondary menu__secondary--social">
                <h3 class="sro"><?= __('Social Media', 'mj') ?></h3>
                <?php foreach ($sitemap as $key => $item) : ?>
                <a class="menu__secondaryItem" href="<?= $item['url'] ?>" target="_blank">
                    <?= $item['title'] ?>
                </a>
                <?php endforeach; ?>
            </section>
            <?php endif; ?>

            <div class="menu__copyright">
                © MOJO Agency <?= date('Y'); ?>
            </div>
            <nav class="menu__mobileLang">
                <?= get2LanguageLinks('menu__mobileLangItem') ?> 
            </nav>





        </div>
    </div>

</nav>