<?php
    wp_reset_postdata();

    // 2 cas au hasard parmi les favoris (Options → Cas favoris), ou parmi toutes
    // les études de cas s'il y en a moins de 2.
    $favorites = array_values(array_diff(mojoFavoriteCaseIds(), [get_the_ID()]));

    $the_query = new WP_Query([
        'post_type' => 'case',
        'post_status' => 'publish',
        'orderby' => 'rand',
        'posts_per_page' => 2,
        'post__not_in' => [get_the_ID()],
    ] + (count($favorites) >= 2 ? ['post__in' => $favorites] : []));

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