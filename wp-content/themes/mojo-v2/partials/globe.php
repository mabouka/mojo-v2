<section class="globe" data-base-url="<?= get_site_url() . '/wp-content/themes/mojo-v2/dist/images/globe/'; ?>">
    <div class="wrapper">
        <div class="globe__inside">
            <div class="globe__left">
                <div class="globe__before">
                    <h2 class="globe__title"><?= $titleBefore; ?></h2>
                    <p class="globe__subtitle"><?= $subtitleBefore; ?></p>

                    <div class="globe__text">
                        <?= $textBefore; ?>
                    </div>
                </div>

                <div class="globe__after">
                    <h2 class="globe__title"><?= $titleAfter; ?></h2>
                    <div class="globe__text">
                        <?= $textAfter; ?>
                    </div>
                </div>
            </div>
            <div class="globe__right">
                <canvas class="globe__anim" width="1285" height="953"></canvas>

            </div>




        </div>
    </div>
</section>