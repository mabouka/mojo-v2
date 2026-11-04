<div class="serviceHeader serviceHeader--<?= get_field("color") ?>">
    <div class="wrapper">
        <div class="serviceHeader__inside">
            <a href="<?= get_post_type_archive_link("services") ?>" class="serviceHeader__back">
                <?= __('Back to Expertises', 'mj'); ?>
            </a>

            <?php // Sans fondu : titre et illustration visibles dès le premier affichage (LCP). ?>
            <h1 class="serviceHeader__title">
                <?= $title; ?>
            </h1>

            <?php if ($svg): ?>
                <img class="serviceHeader__picture" fetchpriority="high" src="<?= $svg['url'] ?>" alt="<?= $svg['alt'] ?>">
            <?php endif ?>

        </div>
    </div>
</div>