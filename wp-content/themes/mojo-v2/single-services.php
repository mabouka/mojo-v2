<?php
global $post;
$ancestors = get_post_ancestors($post->ID);
$parent    = array_reverse($ancestors);

// N2 pages (1 ancestor = direct child of N1) redirect to N1
if (count($ancestors) === 1) {
    wp_redirect(get_permalink($ancestors[0]), 301);
    exit;
}
?>
<?php get_header(); ?>
<?php if ($parent): ?>
    <div data-barba="container" data-barba-namespace="singleservicechild" data-page-css="<?= getUrlVersion('dist/css/page-service-child.css') ?>" data-blocks="true">

        <?php getPartial('serviceChHeader', [
            'parent' =>  $parent[0]
        ]); ?>

        <div class="serviceChild">
            <div class="wrapper">
                <div class="serviceChild__inside">
                    <div class="serviceChild__body">
                        <h1 class="serviceChild__title js-in-view appear-fade"><?= get_the_title(); ?></h1>
                        <div class="serviceChild__content guthContent guthContent--medium  js-in-view appear-fade appear-delay2">
                            <?= the_content(); ?>
                        </div>
                    </div>

                    <?php getPartial('serviceChIntro', [
                        'parent' => $parent[0]
                    ]); ?>
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
    <div data-barba="container" data-barba-namespace="singleserviceparent" data-page-css="<?= getUrlVersion('dist/css/page-service-parent.css') ?>" data-blocks="true">
        <?php
        $isLight = false;
        $color = get_field('color');
        $colorLight = [
            'pink',
            'sungloworange',
            'lightblue'
        ];
        if (in_array($color, $colorLight)) $isLight = true;

        getPartial('serviceHeader', [
            'title' => get_field('header_title') ? get_field('header_title') : get_the_title(),
            'svg' => get_field('svg_single'),
            'isLight' => $isLight
        ]);
        ?>

        <div class="serviceContent  js-in-view appear-fade guthContent guthContent--wide">
            <?php the_content(); ?>
        </div>

        <?php
        $childPages = get_posts([
            'post_type'      => get_post_type(),
            'post_parent'    => get_the_ID(),
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
        ]);
        getPartial('littleCards', [
            'title'   => get_field('card_title'),
            'items'   => $childPages,
            'isLight' => $isLight,
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
