<?php
$the_query = new WP_Query([
    'post_type' => 'services',
    'post_per_page' => -1,
    'post_parent' => 0
]);
?>

<div class="homeService__pin">

    <section class="homeService darkSection">


        <div class="wrapper">
            <div class="homeService__inside">
                <h2 class=" sro"><?= __('Our services', 'mj'); ?></h2>

                <?php if ($text) : ?>
                    <div class="homeService__text js-in-view appear-fade">
                        <?= $text; ?>
                    </div>
                <?php endif; ?>

                <?php if ($the_query->have_posts()) : ?>
                    <div class="homeService__cardContainer" id="section_to-pin">
                    <div class="homeService__triggerStart"></div>
                    <div class="homeService__triggerEnd"></div>
                        <div class="homeService__groupSlide">
                            <div class="homeService__realSize">
                                <?php foreach ($the_query->posts as $key => $service) : ?>
                                    <div class="homeService__cardSlide" id="cardSlide-<?= $key ?>">
                                        <?php getPartial('serviceCard', [
                                            'service' => $service,
                                            'modifier' => "animated"
                                        ]); ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>

                <?php endif; ?>

                <a href="<?= get_post_type_archive_link('services'); ?>" class="btn btn--light">
                    <?= __('All services', 'mj'); ?>
                </a>

            </div>
        </div>
    </section>

</div>
