<?php 
    global $post;
    $parent = array_reverse(get_post_ancestors($post->ID));
?>
<?php get_header(); ?>
<?php if ($parent): ?>
<div data-barba="container" data-barba-namespace="singleservicechild">

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
<div data-barba="container" data-barba-namespace="singleserviceparent">
    <?php
        $isLight = false;
        $color = get_field('color');
        $colorLight = [
            'pink',
            'sungloworange',
            'lightblue'
        ];
        if(in_array($color, $colorLight)) $isLight = true;

        getPartial('serviceHeader', [
            'title' => get_field('header_title') ? get_field('header_title') : get_the_title(), 
            'svg' => get_field('svg_single'),
            'isLight' => $isLight
        ]);

        getPartial('serviceContent', [
            'content' => get_field('mainContent'),
            'isLight' => $isLight

        ]);

        getPartial('littleCards', [
            'title' => get_field('card_title'),
            'items' => get_field('cards_items'),
            'isLight' => $isLight

        ]);

        getPartial('serviceProjects', [
            'title' => get_field('projects_title'),
            'items' => get_field('projects_items'),
            'isLight' => $isLight
        ]);

        getPartial('servicePeople', [
            'title' => get_field('people_title'),
            'items' => get_field('people_items'),
            'isLight' => $isLight
        ]);
    ?>    
</div>
<?php endif ?>
<?php get_footer();