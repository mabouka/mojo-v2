<?php 
    $showFooter = true;
    if (is_404()) $showFooter = false;
    if (is_singular('case')) $showFooter = false;
    if (is_singular('services')) {
        global $post;
        $parent = array_reverse(get_post_ancestors($post->ID));
        if($parent) {
            $showFooter = false;
        }
    }

?>

</main><!-- main, data router wrapper -->
<?php wp_reset_postdata(); ?>

<?php if ($showFooter): ?>

<footer class="footer">
    <div class="wrapper">
        <div class="footer__inside">
            <?php if ($text = get_field('footer_text', 'option')) : ?>
                <div class="footer__text">
                    <?= $text ?>
                </div>
            <?php endif ?>


            <?php if ($sitemap = getCustomMenu('Sitemap')) : ?>
                <nav class="footer__menu footer__menu--sitemap">
                    <h2 class="footer__menuTitle"><?= __('Sitemap', 'mj'); ?></h2>
                    <?php foreach ($sitemap as $key => $item) : ?>
                        <a class="footer__menuItem" href="<?= $item['url'] ?>">
                            <?= $item['title'] ?>
                        </a>
                    <?php endforeach; ?>
                </nav>
            <?php endif; ?>

            <?php if ($social = getCustomMenu('social')) : ?>
                <nav class="footer__menu footer__menu--social">
                    <h2 class="footer__menuTitle"><?= __('Social', 'mj'); ?></h2>
                    <?php foreach ($social as $key => $item) : ?>
                        <a class="footer__menuItem" href="<?= $item['url'] ?>" target="_blank">
                            <?= $item['title'] ?>
                        </a>
                    <?php endforeach; ?>
                </nav>
            <?php endif; ?>

            <span class="footer__copyright">© MOJO Agency <?= date('Y'); ?></span>
            <div class="footer__svgWrapper">
                <svg id="footerSvg" class="footerSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5000 1500">
                    <defs>
                        <g id="footerSvg_circleWrapper">
                            <circle id="footerSvg_circle" class="st0" cx="0" cy="0" r="18" />
                        </g>
                        <g id="footerSvg_logo">
                            <path d="M2139.82,1283.16h-33.84l-100.13,156.13v-144.3v-11.83h-7.21h-33.84l-106.87,166.62h48.65l92.06-143.54v143.54
                            h0.49h6.73h41.92l92.06-143.54v143.54h7.22v-154.79v-11.83H2139.82z" />
                            <path class="st2" fill-rule="evenodd" clip-rule="evenodd" d="M2169.71,1363.79c0-47.5,43.15-86,96.37-86c53.22,0,96.37,38.51,96.37,86s-43.14,86-96.37,86
                            C2212.86,1449.79,2169.71,1411.28,2169.71,1363.79z M2221.67,1433.49c23.46,13.83,62.36-6.17,86.89-44.67
                            c24.53-38.5,25.39-80.92,1.93-94.75c-23.46-13.82-62.36,6.17-86.89,44.67C2199.08,1377.25,2198.22,1419.66,2221.67,1433.49z" />
                            <path class="st2" fill-rule="evenodd" clip-rule="evenodd" d="M2538.19,1363.79c0-47.5,43.15-86,96.37-86s96.37,38.51,96.37,86s-43.14,86-96.37,86
                            S2538.19,1411.28,2538.19,1363.79z M2590.15,1433.49c23.46,13.83,62.36-6.17,86.89-44.67c24.53-38.5,25.39-80.92,1.93-94.75
                            c-23.46-13.82-62.36,6.17-86.89,44.67C2567.55,1377.25,2566.69,1419.66,2590.15,1433.49z" />
                            <path class="st1" d="M2444.33,1283.16l-25.67,38.95h89.59v37.72c0.05,3.23-0.66,6.44-2.07,9.4c-11.8,23.85-33.59,39.91-58.63,39.91
                            c-26.59,0-49.51-18.1-60.7-44.41h-7.12c-0.08,1.49-0.26,2.94-0.26,4.46c0,44.52,30.49,80.61,68.09,80.61
                            c36.83,0,66.76-34.66,67.96-77.92v-88.7H2444.33L2444.33,1283.16z" />
                        </g>

                        <!-- the masks -->
                        <mask id="footerSvg_circleMask">
                            <use xlink:href="#footerSvg_circleWrapper" fill="white" />
                        </mask>
                        <mask id="footerSvg_logoMask">
                            <use xlink:href="#footerSvg_logo" fill="white" />
                        </mask>

                        <clipPath id="footerSvg_clipPath">
                            <use xlink:href="#tr_path" />
                        </clipPath>
                    </defs>

                    <rect id="footer_limit" x="1857.5" y="788" width="1285" height="712" />


                    <use xlink:href="#footerSvg_circleWrapper" fill="#784FE0" />
                    <use xlink:href="#footerSvg_logo" fill="#FAF6ED" />

                    <g mask="url(#footerSvg_circleMask)">
                        <rect width="100%" height="100%" fill="#FFC833" mask="url(#footerSvg_logoMask)" />
                    </g>

                    <rect id="footer_sensible" x="1808.5" y="1233.5" width="972" height="266" />

                </svg>
            </div>



        </div>
    </div>
</footer>
<?php endif ?>

</div>


<?php getPartial('menu'); ?>

<script src="<?= getUrlVersion('dist/js/main.js'); ?>"></script>
<?php wp_footer(); ?>

</body>

</html>