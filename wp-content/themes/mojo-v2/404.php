<?php get_header(); ?>
<div data-router-view="404" class="error view">
    <div class="wrapper">
        <div class="error__inside">

            <h1 class="error__title"><?= __('Oops. <br>bad draw' , 'mj') ?></h1>
            <div class="error__secondaryContainer">

                <?php if ($sitemap = getCustomMenu('Sitemap')) : ?>
                <section class="error__secondary error__secondary--sitemap">
                    <h3 class="error__secondaryTitle"><?= __('Sitemap', 'mj') ?></h3>
                    <?php foreach ($sitemap as $key => $item) : ?>
                    <a class="error__secondaryItem" href="<?= $item['url'] ?>" target="_blank">
                        <?= $item['title'] ?>
                    </a>
                    <?php endforeach; ?>
                </section>
                <?php endif; ?>

                <?php if ($sitemap = getCustomMenu('more')) : ?>
                <section class="error__secondary error__secondary--more">
                    <h3 class="error__secondaryTitle"><?= __('More', 'mj') ?></h3>
                    <?php foreach ($sitemap as $key => $item) : ?>
                    <a class="error__secondaryItem" href="<?= $item['url'] ?>">
                        <?= $item['title'] ?>
                    </a>
                    <?php endforeach; ?>
                </section>
                <?php endif; ?>

            </div>

            <span class="error__copyright">© MOJO Agency <?= date('Y'); ?></span>

            <div class="errorCard errorCard--main">
                <span class="errorCard__title">
                    <span class="errorCard__line1"><?= __('Error', 'mj'); ?></span>
                    <span class="errorCard__line2">404</span>
                </span>

                <svg class="serviceCard__star serviceCard__star--tl " width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="serviceCard__star serviceCard__star--tr" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="serviceCard__star serviceCard__star--bl" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="serviceCard__star serviceCard__star--br" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
            </div>
            <?php for ($i=1; $i <= 6; $i++): ?>
            <div class="errorCard errorCard--<?= $i ?>">
                <svg class="serviceCard__star serviceCard__star--tl " width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="serviceCard__star serviceCard__star--tr" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="serviceCard__star serviceCard__star--bl" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="serviceCard__star serviceCard__star--br" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
            </div>
            <?php endfor; ?>
        </div>
    </div>

</div>
<?php get_footer(); ?>

