<?php get_header(); ?>
<div class="view singleCase"  data-barba="container" data-barba-namespace="singlecase" <?= get_field('color') ? ' style="--pagecolor:' . get_field('color') . ';"' : '' ?> >

    <?php
        getPartial('sCaseBanner', [
            'video' => get_field('banner_video'), 
            'videoWebm' => get_field('banner_video_webm'), 
            'videoMobile' => get_field('banner_video_mobile'), 
            'videoMobileWebm' => get_field('banner_video_mobile_webm'), 

            'image' => get_field('banner_image'),
            'imageMobile' => get_field('banner_mobile')

        ]);

        getPartial('sCaseFeatures', [
            'client'    => get_field('title'), 
            'location'  => get_field('location'),
            'service'   => get_field('type'), 
            'delivrables'  => get_field('job'),
            'link'      => get_field('link'),
        ]);

        getPartial('sCaseIntro', [
            'title' => get_field('baseline'), 
            'text'  => get_field('intro_text'),
        ]);
    ?>

    <div class="wrapper">
        <div class="content">
            <?php the_content(); ?>
        </div>
    </div>

    <?php 
        getPartial('sCaseRandom');
    ?>
   
</div>
<?php get_footer();
