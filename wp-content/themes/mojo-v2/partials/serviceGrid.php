<?php
$the_query = new WP_Query([
    'post_type' => 'services',
    'post_per_page' => -1,
    'post_parent' => 0
]);
?>
<?php if ($the_query->have_posts()) : ?>
    <?php if (isset($title)): ?>
    <div class="serviceGrid<?= isset($modifier) ? ' serviceGrid--' . $modifier : ''?>">
    <?php else: ?>
    <div class="serviceGrid<?= isset($modifier) ? ' serviceGrid--' . $modifier : ''?>">
    <?php endif ?>
        <div class="wrapper">
            <div class="serviceGrid__inside">
                <?php if (isset($title)): ?>
                <h2 class="serviceGrid__title">
                    <?= $title; ?>
                </h2>
                <?php endif ?>

                <div class="serviceGrid__grid">
                <?php foreach ($the_query->posts as $key => $service) : ?>
                    <?php getPartial('serviceCard', [
                        'service' => $service,
                        'modifier' => 'full'
                    ]); ?>
                <?php endforeach; ?>
                </div>

            </div>
        </div>
    <?php if (isset($title)): ?>
    </section>
    <?php else: ?>
    </div>
    <?php endif ?>
    
<?php endif; ?>