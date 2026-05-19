<?php
get_header();
?>


<div class="view" data-barba="container" data-barba-namespace="archiveservice" data-page-css="<?= getUrlVersion('dist/css/page-services-archive.css') ?>">
    <?php

    getPartial('serviceIntro', [
        'title'     => get_field('servicepage_title', 'options'),
        'text'      => get_field('servicepage_text', 'options'),
    ]);

    getPartial('serviceGrid');

    ?>
</div>
<?php get_footer();
