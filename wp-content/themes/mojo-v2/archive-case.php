
<?php

get_header(); ?>

<div class="view"  data-router-view="archivecase">
<?php

    getPartial('casesIntro', [
        'title'     => get_field('casepage_intro_title', 'options'),
    ]);

    getPartial('casesGrid');

    getPartial('casesServices', [
        'title'     => get_field('casepage_expertise_title', 'options'),
        'text'     => get_field('casepage_expertise_text', 'options'),
        'button'     => get_field('casepage_expertise_button', 'options'),
    ]);

?>
</div>
<?php get_footer(); ?>