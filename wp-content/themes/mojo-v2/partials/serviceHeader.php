<div class="serviceHeader serviceHeader--<?= get_field("color") ?>">
    <div class="wrapper">
        <div class="serviceHeader__inside">
            <a href="<?= get_post_type_archive_link("services") ?>" class="serviceHeader__back">
                <?= __('Back to Expertises', 'mj'); ?>
            </a>

            <h1 class="serviceHeader__title js-in-view appear-fade">
                <?= $title; ?>
            </h1>

            <?php if ($svg): ?>
                <img class="serviceHeader__picture js-in-view appear-fade" src="<?= $svg['url'] ?>" alt="<?= $svg['alt'] ?>">
            <?php endif ?>

        </div>
    </div>
</div>