<?php get_header(); ?>
<div class="view singleLead" data-barba="container" data-barba-namespace="singlelead" <?= get_field('color') ? ' style="--pagecolor:' . get_field('color') . ';"' : '' ?>>

    <?php
    getPartial('leadBanner', [
        'title' => get_field('banner_title'),
        'image' => get_field('banner_image'),
        'isVideo' => get_field('banner_is_video'),
        'videoMp4' => get_field('banner_video_mp4'),
        'videoMp4Mobile' => get_field('banner_video_mp4_mobile'),
        'videoWebm' => get_field('banner_video_webm'),
        'videoWebmMobile' => get_field('banner_video_webm_mobile'),
    ]);
    ?>


    <?php
    getPartial('leadPresentation', [
        'title' => get_field('presentation_title'),
        'text' => get_field('presentation_text'),
    ]);
    ?>

    <?php
    getPartial('leadLogos', [
        'logos' => get_field('logos'),
    ]);
    ?>

    <?php
    getPartial('leadDescription', [
        'title' => get_field('description_title'),
        'text' => get_field('description_text'),
        'linkLabel' => get_field('description_linklabel'),
    ]);
    ?>

    <?php if (get_field('banner_is_video')): ?>
        <?php
        getPartial('video', [
            "url"           => get_field('banner_video_mp4'),
            "urlWebm"       => get_field('banner_video_webm'),
            "urlMobile"     => get_field('banner_video_mp4_mobile'),
            "urlMobileWebm" => get_field('banner_video_webm_mobile'),
            "poster"        => ''
        ]);

        ?>
    <?php endif ?>

    <?php
    getPartial('leadCases', [
        'subtitle' => get_field('cases_subtitle'),
        'title' => get_field('cases_title'),
        'casesGallery' => get_field('cases'),
    ]);
    ?>

    <?php
    getPartial('leadServices', [
        "title"      => get_field('services_title'),
        "items"   => get_field('services_items'),
        "cta" => get_field('services_cta'),
    ]);
    ?>

    <?php
    getPartial('leadContact', [
        "subtitle"   => get_field('contact_subtitle'),
        "title"      => get_field('contact_title'),
        "form"      => get_field('contact_form'),

    ]);
    ?>

    <?php
    getPartial('leadReviews', [
        "title"      => get_field('reviews_title'),
        "reviews"    => get_field('reviews'),
    ]);
    ?>


    <?php
    getPartial('commitmentsFaq', [
        'modifier' => 'lead',
        'subtitle' => get_field('faq_subtitle'),
        'title'    => get_field('faq_title'),
        'items'    => get_field('faq_items')
    ]);
    ?>

    <?php
    getPartial('leadTeam', [
        'subtitle' => get_field('team_subtitle'),
        'title'    => get_field('team_title'),
        'items'    => get_field('team_items')
    ]);
    ?>
</div>
<?php get_footer();
