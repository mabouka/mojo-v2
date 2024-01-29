<?php if ($items): ?>
<section class="serviceProjects serviceProjects--<?= get_field("color") ?><?= $isLight ? ' serviceProjects--light' : '' ?>">
    <h2 class="serviceProjects__title"><?= $title; ?></h2>

    <?php 
        getPartial('caseAccordion', [
            'items'         => $items,
        ]);
    ?>

    <a class="serviceProjects__seeAll btn<?= $isLight ? ' btn--dark' : ' btn--light' ?>" href="<?= get_post_type_archive_link('case') ?>">
        <?= __('See all cases', 'mj'); ?>
    </a>
</section>
<?php endif ?>