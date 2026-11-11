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
                          // ouvre le panneau tarteaucitron (voir le script en bas de page).
                          // Chaîne traduisible du thème ; tant qu'elle n'a pas de
                          // traduction (.po ou WPML), libellé français par défaut.
                          $manageCookies = __('Manage cookies', 'mj');
                          if ($manageCookies === 'Manage cookies' && mojoLang() === 'fr') $manageCookies = 'Gérer mes cookies'; ?>
                    <a class="footer__menuItem" href="#tarteaucitron" data-cookie-panel data-barba-prevent>
                        <?= esc_html($manageCookies) ?>
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
                        <?php // Disque qui suit la souris (classes/LogoCursor.js : transform + r). ?>
                        <circle id="footerSvg_circle" cx="0" cy="0" r="0" />
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

                        <?php // Découpe géométrique (pas de masque) : à chaque image, le
                              // navigateur ne redessine que la zone du disque. ?>
                        <clipPath id="footerSvg_circleClip">
                            <use xlink:href="#footerSvg_circle" />
                        </clipPath>

                        <clipPath id="footerSvg_clipPath">
                            <use xlink:href="#tr_path" />
                        </clipPath>
                    </defs>

                    <rect id="footer_limit" x="1857.5" y="788" width="1285" height="712" />


                    <use xlink:href="#footerSvg_circle" fill="#784FE0" />
                    <use xlink:href="#footerSvg_logo" fill="#FAF6ED" />
                    <use xlink:href="#footerSvg_logo" fill="#FFC833" clip-path="url(#footerSvg_circleClip)" />

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
        // load.js est en async : on attend que tarteaucitron et son catalogue de
        // services existent (tarteaucitron.job, lui, peut ne pas encore être
        // créé). Toutes les 100 ms pendant 3 s, puis toutes les 500 ms ; on ne
        // renonce qu'au bout de 60 s (réseau très lent, script bloqué).
        function whenReady(fn, tries) {
            tries = tries || 0;
            if (window.tarteaucitron && tarteaucitron.services) return fn();
            if (tries >= 144) return; // 30 × 100 ms + 114 × 500 ms = 60 s
            setTimeout(function () { whenReady(fn, tries + 1); }, tries < 30 ? 100 : 500);
        }

        function consent(state, keys) {
            var update = {};
            keys.forEach(function (key) { update[key] = state; });
            gtag('consent', 'update', update);
        }

        // Retrait de l'accord en cours de visite : tarteaucitron n'appelle pas
        // `fallback` (il recharge la page à la fermeture du panneau). D'ici là,
        // Google doit savoir tout de suite qu'il ne peut plus poser de cookies.
        document.addEventListener('mojoga4_disallowed', function () {
            consent('denied', ['analytics_storage']);
        });
        document.addEventListener('mojogads_disallowed', function () {
            consent('denied', ['ad_storage', 'ad_user_data', 'ad_personalization']);
        });

        var isSetUp = false;
        function setup() {
            if (isSetUp) return;
            isSetUp = true;

            // Protection (recette D4) : tarteaucitron recompte les cookies de
            // chaque service de sa liste (checkCount, appelé par proPing et par
            // l'affichage) sans vérifier que le service existe. Un nom encore
            // inconnu le faisait planter (« reading 'cookies' ») : la config du
            // staging sur tarteaucitron.io inscrit nos services avant que ce
            // script les déclare. On saute les inconnus ; sans effet sinon.
            var checkCount = tarteaucitron.cookie && tarteaucitron.cookie.checkCount;
            if (typeof checkCount === 'function') {
                tarteaucitron.cookie.checkCount = function (key) {
                    if (!tarteaucitron.services[key]) return;
                    return checkCount.apply(this, arguments);
                };
            }

            // « cookies » : tarteaucitron ne supprime au refus que les noms
            // exacts listés. _ga_<ID> pour chaque flux GA4 : RS946CZMGV (celui
            // du site) et CB1DX5V2VF (flux inconnu vu en 2024, cookie de 400 j
            // peut-être encore présent chez des visiteurs).
            // Clé lue côté serveur par inc/consent.php (« mesure d'audience »).
            tarteaucitron.services.mojoga4 = {
                key: 'mojoga4',
                type: 'analytic',
                name: 'Google Analytics',
                uri: 'https://policies.google.com/privacy',
                needConsent: true,
                cookies: ['_ga', '_gid', '_ga_RS946CZMGV', '_ga_CB1DX5V2VF'],
                js: function () { consent('granted', ['analytics_storage']); },
                fallback: function () { consent('denied', ['analytics_storage']); }
            };
            tarteaucitron.services.mojogads = {
                key: 'mojogads',
                type: 'ads',
                name: 'Google Ads',
                uri: 'https://policies.google.com/privacy',
                needConsent: true,
                cookies: ['_gcl_au', '_gcl_aw', '_gcl_dc'],
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
            (tarteaucitron.job = tarteaucitron.job || []).push('mojoga4');
            (tarteaucitron.job = tarteaucitron.job || []).push('mojogads');
            (tarteaucitron.job = tarteaucitron.job || []).push('treenation');
        }

        // Dès que load.js a fini de s'exécuter (événement load du script, avant
        // toute autre tâche) : nos services et la protection sont en place avant
        // que tarteaucitron puisse s'en servir. Le sondage reste en repli (script
        // déjà chargé quand cette ligne s'exécute, ou événement manqué).
        var tacScript = document.getElementById('tarteaucitron-js');
        if (tacScript) tacScript.addEventListener('load', function () { whenReady(setup); });
        whenReady(setup);

        // Lenis (défilement fluide) capte la molette sur toute la page : sans
        // data-lenis-prevent, la liste des services du panneau ne défile pas.
        // Le panneau peut être créé tard (réseau lent) : on le marque dès qu'il
        // apparaît dans le DOM (observateur coupé ensuite), et de nouveau à
        // chaque ouverture (événement tac.open_panel, ou clic en repli).
        function letPanelScroll() {
            var list = document.getElementById('tarteaucitronServices');
            if (!list) return false;
            list.setAttribute('data-lenis-prevent', '');
            return true;
        }
        if (!letPanelScroll() && window.MutationObserver) {
            var panelObserver = new MutationObserver(function () {
                if (letPanelScroll()) panelObserver.disconnect();
            });
            panelObserver.observe(document.body, { childList: true, subtree: true });
        }
        document.addEventListener('tac.open_panel', letPanelScroll);
        document.addEventListener('click', function (e) {
            if (!e.target.closest('[data-cookie-panel], #tarteaucitronManager, #tarteaucitronPersonalize, #tarteaucitronPersonalize2')) return;
            setTimeout(letPanelScroll, 0);
        });

        // Le tableau de bord n'accepte qu'une URL de confidentialité (l'anglaise) :
        // avant que tarteaucitron ne la suive (phase de capture), on met celle
        // de la langue de la page : la page de confidentialité choisie dans
        // Réglages > Confidentialité, dans sa traduction WPML ; à défaut, les
        // adresses actuelles.
        <?php
        $privacyId = (int) get_option('wp_page_for_privacy_policy');
        $privacyUrl = $privacyId ? get_permalink(apply_filters('wpml_object_id', $privacyId, 'page', true)) : false;
        if (!$privacyUrl) {
            $privacyUrl = home_url(mojoLang() === 'fr' ? '/fr/politique-de-confidentialite/' : '/privacy-policy/');
        }
        ?>
        var privacyUrl = <?= wp_json_encode($privacyUrl, JSON_UNESCAPED_SLASHES) ?>;
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