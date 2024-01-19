<?php
/* Template Name: About */
get_header();
?>
<div class="view" data-barba="container" data-barba-namespace="about">
    <?php
    getPartial('aboutIntro', [
        'title'     => get_field('intro_title'),
        'text'      => get_field('intro_text'),
        'link'      => get_field('intro_link')
    ]);

    getPartial('teamGrid', [
        'citation'  => get_field('teamGrid_citation'),
        'text'      => get_field('teamGrid_text'),
    ])
    ?>
</div>
<?php get_footer();
