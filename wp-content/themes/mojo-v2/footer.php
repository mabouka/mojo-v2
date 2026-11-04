<?php 
    $showFooter = true;
    if (is_404()) $showFooter = false;
?>

</main><!-- main, data router wrapper -->
<?php wp_reset_postdata(); ?>

<?php if ($showFooter): ?>

<footer class="footer">
    <div class="wrapper">
        <div class="footer__inside">

            <div class="footer__section footer__section--contact">
                <?php if ($text = get_field('footer_contactText', 'option')) : ?>
                <div class="footer__sectionText">
                    <?= $text ?>
                </div>
                <?php endif ?>

                <?php if ($link = get_field('footer_contactLink', 'option')) : ?>
                <a class="footer__sectionLink"  href="<?= $link['url'] ?>">
                    <?= $link['title'] ?>
                </a>
                <?php endif ?>
            </div>

            <div class="footer__section footer__section--newsletter">
                <?php if ($text = get_field('footer_newsletterText', 'option')) : ?>
                <div class="footer__sectionText">
                    <?= $text ?>
                </div>
                <?php endif ?>

                <?php if ($link = get_field('footer_newsletterLink', 'option')) : ?>
                <a class="footer__sectionLink"  href="<?= $link['url'] ?>">
                    <?= $link['title'] ?>
                </a>
                <?php endif ?>
            </div>
            
            <img class="footer__mobileLogo" src="<?= getUrl('dist/images/logoFooter.svg'); ?>" alt="Mojo" width="205" height="539">
            
            <?php if ($sitemap = getCustomMenu('Sitemap')) : ?>
                <div class="footer__menu footer__menu--sitemap">
                    <p class="footer__menuTitle"><?= __('Sitemap', 'mj'); ?></p>
                    <?php foreach ($sitemap as $key => $item) : ?>
                        <a class="footer__menuItem" href="<?= $item['url'] ?>">
                            <?= $item['title'] ?>
                        </a>
                    <?php endforeach; ?>
                    <?php // Retrait du consentement aussi simple que son recueil (RGPD) :
                          // ouvre le panneau tarteaucitron (voir le script en bas de page). ?>
                    <a class="footer__menuItem" href="#tarteaucitron" data-cookie-panel data-barba-prevent>
                        <?= ICL_LANGUAGE_CODE === 'fr' ? 'Gérer mes cookies' : 'Manage cookies' ?>
                    </a>
                </div>
            <?php endif; ?>
                

            <?php if ($social = getCustomMenu('social')) : ?>
                <div class="footer__menu footer__menu--social">
                    <p class="footer__menuTitle"><?= __('Social', 'mj'); ?></p>
                    <?php foreach ($social as $key => $item) : ?>
                        <a class="footer__menuItem" href="<?= $item['url'] ?>" target="_blank">
                            <?= $item['title'] ?>
                        </a>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>





            <span class="footer__copyright">© MOJO Agency <?= date('Y'); ?></span>
            <div class="footer__svgWrapper">
                <svg id="footerSvg" class="footerSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5000 1500">
                    <defs>
                        <g id="footerSvg_circleWrapper">
                            <g id="footerSvg_circleWrapperPos">
                                <circle id="footerSvg_circle" cx="0" cy="0" r="18" />
                            </g>
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
            <?php 
                $old_tree_nation = true;
                $new_tree_nation = false;
            ?>
            <?php if ($old_tree_nation): ?>
            <a class="footer__carbon" href="https://tree-nation.com/fr/profil/impact/mojo-agency#co2">
                <img src="https://tree-nation.com/images/tracking/label-co2-website-black-en.png" alt="Three Nation" width="157" height="50" style="width:157px;height:auto;">
            </a>
            <?php endif; ?>


            <?php if ($new_tree_nation): ?>
            <div class="footer__carbon">
            </div>
            <?php endif ?>
        </div>
    </div>
</footer>
<?php endif ?>

</div>

<?php getPartial('cursor'); ?>
<?php getPartial('menu'); ?>


<script type="text/javascript" id="mojo-manifest-js" src="<?= getUrlVersion('dist/js/manifest.js'); ?>"></script>
<script type="text/javascript" id="mojo-vendor-js" src="<?= getUrlVersion('dist/js/vendor.js'); ?>"></script>
<script type="text/javascript" id="mojo-main-js" src="<?= getUrlVersion('dist/js/main.js'); ?>"></script>

<?php 
    
    $recaptcha = WPCF7_RECAPTCHA::get_instance()->get_sitekey();
?>

<script type="text/javascript">
    window.recaptchaKey = '<?= $recaptcha ?>';
</script>
<!-- Consentement (tarteaucitron, chargé en async dans le <head>).
     LinkedIn Insight est un service réglé sur tarteaucitron.io. Les autres sont
     déclarés ici :
     - Google Analytics et Google Ads : GTM les charge dans tous les cas
       (Consent Mode avancé) ; ces services ne font que transmettre le choix à
       Google. Le Consent Mode de tarteaucitron ne s'active que s'il charge
       lui-même GA ou Ads, ce qui n'est pas notre cas.
     - tree-nation, absent du catalogue tarteaucitron. -->
<script>
    (function () {
        // load.js est en async : on attend que tarteaucitron existe (10 s max).
        function whenReady(fn, tries) {
            tries = tries || 0;
            if (window.tarteaucitron && tarteaucitron.job) return fn();
            if (tries < 100) setTimeout(function () { whenReady(fn, tries + 1); }, 100);
        }

        function consent(state, keys) {
            var update = {};
            keys.forEach(function (key) { update[key] = state; });
            gtag('consent', 'update', update);
        }

        whenReady(function () {
            // Clé lue côté serveur par inc/consent.php (« mesure d'audience »).
            tarteaucitron.services.mojoga4 = {
                key: 'mojoga4',
                type: 'analytic',
                name: 'Google Analytics',
                uri: 'https://policies.google.com/privacy',
                needConsent: true,
                cookies: ['_ga', '_gid'],
                js: function () { consent('granted', ['analytics_storage']); },
                fallback: function () { consent('denied', ['analytics_storage']); }
            };
            tarteaucitron.services.mojogads = {
                key: 'mojogads',
                type: 'ads',
                name: 'Google Ads',
                uri: 'https://policies.google.com/privacy',
                needConsent: true,
                cookies: ['_gcl_au'],
                js: function () { consent('granted', ['ad_storage', 'ad_user_data', 'ad_personalization']); },
                fallback: function () { consent('denied', ['ad_storage', 'ad_user_data', 'ad_personalization']); }
            };
            tarteaucitron.services.treenation = {
                key: 'treenation',
                type: 'analytic',
                name: 'Tree-Nation',
                uri: 'https://tree-nation.com/privacy-policy',
                needConsent: true,
                cookies: [],
                js: function () {
                    tarteaucitron.addScript('https://tree-nation.com/js/track.js', '', function () {
                        if (typeof window.treenation_track === 'function') treenation_track('6322d1badbb2d');
                    });
                }
            };
            tarteaucitron.job.push('mojoga4');
            tarteaucitron.job.push('mojogads');
            tarteaucitron.job.push('treenation');
        });

        // Le tableau de bord n'accepte qu'une URL de confidentialité (l'anglaise) :
        // avant que tarteaucitron ne la suive (phase de capture), on met celle
        // de la langue de la page.
        var privacyUrl = <?= wp_json_encode(home_url(ICL_LANGUAGE_CODE === 'fr' ? '/fr/politique-de-confidentialite/' : '/privacy-policy/'), JSON_UNESCAPED_SLASHES) ?>;
        document.addEventListener('click', function (e) {
            if (!e.target.closest('#tarteaucitronPrivacyUrl, #tarteaucitronPrivacyUrlDialog')) return;
            if (window.tarteaucitron && tarteaucitron.parameters) tarteaucitron.parameters.privacyUrl = privacyUrl;
        }, true);

        // « Gérer mes cookies » (footer) : liens présents dans chaque page
        // chargée par Barba, d'où la délégation sur document.
        document.addEventListener('click', function (e) {
            var link = e.target.closest('[data-cookie-panel]');
            if (!link || !window.tarteaucitron || !tarteaucitron.userInterface) return;
            e.preventDefault();
            tarteaucitron.userInterface.openPanel();
        });
    })();
</script>

<!-- WPFOOTER START -->
<?php //wp_footer(); ?>
<!-- WPFOOTER END -->



</body>

</html>