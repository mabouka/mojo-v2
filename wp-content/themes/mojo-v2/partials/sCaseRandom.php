<?php 
    wp_reset_postdata();

    $the_query = new WP_Query([
        'post_type' => 'case',
        'post_status' => 'publish',
        'orderby' => 'rand',
        'order' => 'DESC',
        'posts_per_page' => 2,
        'post__not_in' => [get_the_ID()],


    ]);

?>


<section class="sCaseRandom">
    <div class="wrapper">
        <div class="sCaseRandom__inside">
            <h2 class="sCaseRandom__title">
                <?= __('Want to see more ?','mj'); ?>
            </h2>

            <?php if ($the_query->have_posts()) : ?>
            <div class="sCaseRandom__grid">
                <?php while($the_query->have_posts()): $the_query->the_post(); ?>
                    <?php
                         global $post;
                    getPartial('caseCard', [
                        'case' => $post
                    ]); ?>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
            <?php endif; ?>
        </div>
    </div>
</section>