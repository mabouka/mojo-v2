<?php
/* Template Name: Commitments */

$args = [
    'post_type' => 'case',
    'tax_query' => [
        'relation' => 'AND',
        [
            'taxonomy' => 'purpose',
            'field' => 'slug',
            'terms' => array( 'mojo-for-good', 'mojo-impact	', 'solidarity-days' ),
        ]
    ]
];
$the_query = new WP_Query( $args );
$items = $the_query->posts;

get_header();
?>
<div class="view commitments" data-barba="container" data-barba-namespace="commitments">
    <?php
    getPartial('commitmentsIntro', [
        'title1'     => get_field('intro_title_line1'),
        'title2'     => get_field('intro_title_line2'),
        'intro'     => get_field('intro_intro'),
        'text'      => get_field('intro_text'),
    ]);

    getPartial('commitmentsPurpose', [
        'text'          => get_field('purposes_text'),
        'presentation'  => get_field('purposes_presentation'),
        'cards'         => get_field('purposes'),
    ]);
    ?>
    <section class="commitments__case darkSection">
        <h2 class="commitments__caseTitle sro"><?= __('Cases where we took iniatives', 'mj') ?></h2>
        <?php 
        getPartial('caseAccordion', [
            'items'         => $items,
            'modifier'      => 'commitments'
        ]);
        ?>
        <div class="wrapper commitments__caseButton">
            <a href="<?= get_post_type_archive_link('case'); ?>" class="commitments__caseLink btn btn--light">
                <?= __('See all cases', 'mj'); ?>
            </a>
        </div>
    </section>

    <?php 
        getPartial('commitmentsEarth', [
            'items'         => $items,
            'title'         => get_field('earth_title'),
            'image'         => get_field('earth_image'),
            'textLeft'      => get_field('earth_textLeft'),
            'textRight'     => get_field('earth_textRight')
        ]);
    ?>

    <?php 
        getPartial('commitmentsFaq', [
            'title'         => get_field('faq_title'),
            'items'         => get_field('faq_items')
        ]);
    ?>
</div>
<?php get_footer();
