<?php 
    global $post;
    $parent = array_reverse(get_post_ancestors($post->ID));
?>
<?php get_header(); ?>
<?php if ($parent): ?>
<div class="view"  data-router-view="singleserviceparent-child" s>
    <?php getPartial('serviceChHeader', [
        'parent' =>  $parent[0]
    ]); ?>

    <div class="serviceChild">
        <div class="wrapper">
            <div class="serviceChild__inside">
                <?php getPartial('serviceChIntro',[
                    'title' => get_the_title(),
                    'parent' => $parent[0]
                ]); ?>
               <div class="serviceChild__content">
                    <?= the_content(); ?>
               </div>

            </div>
        </div>
    </div>
    <?php getPartial('serviceGrid', [
        "modifier"  => 'service',
        "title"     => __('Our expertises', 'mj')
    ]); ?>


    <?php getPartial('ourServices'); ?>


    
</div>
<?php else: ?>
<div class="view"  data-router-view="singleserviceparent-parent">
    <?php
        getPartial('serviceHeader', [
            'title' => get_field('header_title') ? get_field('header_title') : get_the_title(), 
            'svg' => get_field('svg_big')
        ]);

        getPartial('serviceContent', [
            'content' => get_field('mainContent')
        ]);

        getPartial('littleCards', [
            'title' => get_field('card_title'),
            'items' => get_field('cards_items'),
        ]);

        getPartial('serviceProjects', [
            'title' => get_field('projects_title'),
            'items' => get_field('projects_items'),
        ]);

        getPartial('servicePeople', [
            'title' => get_field('people_title'),
            'items' => get_field('people_items'),
        ]);
    ?>    
</div>
<?php endif ?>

<?php get_footer();
