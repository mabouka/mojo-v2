
<?php

get_header(); ?>

<div class="view" data-barba="container" data-barba-namespace="archivecase">
<?php

    getPartial('casesGrid', [
        'title'     => get_field('casepage_intro_title', 'options'),
    ]);

    getPartial('casesServices', [
        'title'     => get_field('casepage_expertise_title', 'options'),
        'text'      => get_field('casepage_expertise_text', 'options'),
        'button'    => get_field('casepage_expertise_button', 'options'),
    ]);

?>
</div>
<?php get_footer(); ?>