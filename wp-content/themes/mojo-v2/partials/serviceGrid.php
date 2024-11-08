<?php
$the_query = new WP_Query([
    'post_type' => 'services',
    'post_per_page' => -1,
    'post_parent' => 0
]);
?>
<?php if ($the_query->have_posts()) : ?>
    <?php if (isset($title)): ?>
    <div class="serviceGrid<?= isset($modifier) ? ' serviceGrid--' . $modifier : ' darkSection'?> ">
    <?php else: ?>
    <div class="serviceGrid<?= isset($modifier) ? ' serviceGrid--' . $modifier : ' darkSection'?>">
    <?php endif ?>
        <div class="wrapper">
            <div class="serviceGrid__inside">
                <?php if (isset($title)): ?>
                <h2 class="serviceGrid__title">
                    <?= $title; ?>
                </h2>
                <?php endif ?>
                <div class="serviceGrid__gridWrapper">
                    <div class="serviceGrid__grid">
                        <?php foreach ($the_query->posts as $key => $service) : ?>
                        <div class="serviceGrid__item">
                            <?php getPartial('serviceCard', [
                                'service' => $service,
                                'modifier' => 'full'
                            ]); ?>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>


            </div>
        </div>
    <?php if (isset($title)): ?>
    </section>
    <?php else: ?>
    </div>
    <?php endif ?>
    
<?php endif; ?>