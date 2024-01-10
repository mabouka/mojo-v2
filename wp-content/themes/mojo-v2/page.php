<?php get_header(); ?>
<div data-router-view="pageTemplate" class="pageTemplate view">
    <div class="wrapper">
        <div class="pageTemplate__inside">
            <h1 class="pageTemplate__title">
                <?= get_the_title(); ?>
            </h1>

            <div class="pageTemplate__content">
                <?php the_content(); ?>
            </div>

        </div>
    </div>
</div>
<?php get_footer(); ?>

