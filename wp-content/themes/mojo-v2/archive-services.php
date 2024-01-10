<?php
get_header();
?>


<div class="view" data-router-view="archiveservice">
    <?php

    getPartial('serviceIntro', [
        'title'     => get_field('servicepage_title', 'options'),
        'text'      => get_field('servicepage_text', 'options'),
    ]);

    getPartial('serviceGrid');

    ?>
</div>
<?php get_footer();
