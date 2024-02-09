<?php
/* Template Name: Our Clients */
get_header();
?>
<div data-barba="container" data-barba-namespace="ourclients">
    <div class="pageclient">
    <?php 
        getPartial('clientIntro', [
            'title1'         => get_field('intro_title_1'),
            'title2'         => get_field('intro_title_2'),
            'title3'         => get_field('intro_title_3'),
            'text1'          => get_field('intro_text_1'),
            'text2'          => get_field('intro_text_2')
        ]);

        getPartial('clientTypology', [
            'title'          => get_field('typo_title'),
            'items'          => get_field('typo_items'),
        ]);

        

        getPartial('clientNumbers', [
            'items'          => get_field('numbers'),
        ]);
        

        getPartial('globe', [
            'titleBefore'    => get_field('globe_before_title'),
            'textBefore'     => get_field('globe_before_text'),
            'subtitleBefore' => get_field('globe_before_subtitle'),
            
            'titleAfter'     => get_field('globe_after_title'),
            'textAfter'      => get_field('globe_after_text'),
        ]);
        

        getPartial('clientHover', [
            'title'          => get_field('client_title'),
            'image'          => get_field('client_image'),
            'clients'        => get_field('client_items'),
        ]); 

        
    ?>
    </div>
</div>
<?php get_footer();
