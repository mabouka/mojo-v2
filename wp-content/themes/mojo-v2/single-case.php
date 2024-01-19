<?php get_header(); ?>
<div class="view singleCase"  data-barba="container" data-barba-namespace="singlecase" <?= get_field('color') ? ' style="--pagecolor:' . get_field('color') . ';"' : '' ?> >

    <?php
        getPartial('sCaseBanner', [
            'video' => get_field('banner_video'), 
            'image' => get_field('banner')
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
        getPartial('sCaseNext', [
            
        ]);
    ?>
   
</div>
<?php get_footer();
