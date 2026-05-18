<?php
global $post;
$childPages = get_posts([
    'post_type'      => 'services',
    'post_parent'    => $post->ID,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
]);
?>

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

            <?php if ($childPages): ?>
                <nav class="serviceHeader__nav js-in-view appear-fade" aria-label="<?= esc_attr__('Service sections', 'mj'); ?>">
                    <?php foreach ($childPages as $child): ?>
                        <a href="#littleCards" class="serviceHeader__navItem"><?= $child->post_title ?></a>
                    <?php endforeach ?>
                </nav>
            <?php endif ?>

        </div>
    </div>
</div>