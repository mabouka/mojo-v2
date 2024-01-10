<?php
$the_query = new WP_Query([
    'post_type' => 'services',
    'post_per_page' => -1,
    'post_parent' => 0
]);
?>

<div class="casesServices">
    <div class="wrapper">
        <div class="casesServices__inside">
            <h2 class="casesServices__title"><?= $title; ?></h2>
            <?php if ($text): ?>
            <div class="casesServices__text">
                <?= $text; ?>
            </div>
            <?php endif ?>

            <?php if ($the_query->have_posts()) : ?>
            <div class="casesServices__grid">
                <?php foreach ($the_query->posts as $key => $service) : ?>
                        <?php getPartial('serviceCard', [
                            'service' => $service,
                            'modifier' => 'full'
                        ]); ?>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>


            <a class="casesServices__button btn btn--dark" href="<?= $button['url'] ?>">
                <?= $button['title'] ?>
            </a>
        </div>
    </div>
</div>