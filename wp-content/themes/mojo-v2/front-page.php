<?php get_header(); ?>
<div class="view" data-router-view="home">
    <?php
    getPartial('homeIntro', [
        "text"      => get_field('intro')
    ]);

    getPartial('homeVideo', [
        "url"       => get_field('video_url'),
        "text"      => get_field('video_text')
    ]);

    getPartial('homePurpose', [
        "title"     => get_field('purpose_title'),
        "text"      => get_field('purpose_text'),
        "button"    => get_field('purpose_button')
    ]);

    getPartial('featuredCases', [
        "subtitle"  => get_field('featured_subtitle'),
        "title"     => get_field('featured_title'),
        "text"      => get_field('featured_text'),
        "gallery"   => get_field('featured_galery'),
        "cases"     => get_field('featured_cases'),
    ]);

    getPartial('homeService', [
        "text"      => get_field('services_text'),
    ]);

    getPartial('ourClients', [
        "title"     => get_field('ourclient_title'),
        "text"      => get_field('ourclient_text'),
        "clients"   => get_field('ourclient_clients'),
        "logos"     => get_field('ourclient_logos')
    ]);

    getPartial('video', [
        "url"     => get_field('video2_url'),
    ]);

    getPartial('homeTransformation', [
        "title"     => get_field('transformation_title'),
        "text"      => get_field('transformation_text'),
        "link"   => get_field('transformation_link'),
    ]);
    ?>



</div>
<?php get_footer();