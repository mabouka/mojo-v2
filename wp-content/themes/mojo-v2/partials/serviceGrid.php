<?php
$the_query = new WP_Query([
    'post_type' => 'services',
    'posts_per_page' => 4,
    'post_parent' => 0,
    'post_status' => 'publish',
]);
?>
<?php if ($the_query->have_posts()) : ?>
    <div class="serviceGrid<?= isset($modifier) ? ' serviceGrid--' . $modifier : ' darkSection' ?>">
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
                                        'modifier' => 'animated',
                                        'headingLevel' => isset($title) ? 3 : 2,
                                    ]); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>


                </div>
            </div>
    </div>

    <?php endif; ?>
