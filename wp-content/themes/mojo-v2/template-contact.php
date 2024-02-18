<?php
    /* Template Name: Contact */
    $title = get_field('intro_title');
    $text  = get_field('intro_text');
    $address  = get_field('address');
    $contactText  = get_field('intro_contact_text');
    $form = get_field('form');

    get_header();

        /*
        if ( function_exists( 'wpcf7_enqueue_scripts' ) ) {
        wpcf7_enqueue_scripts();
        }
        
        if ( function_exists( 'wpcf7_enqueue_styles' ) ) {
        wpcf7_enqueue_styles();
        }*/
        
    
?>
<div data-barba="container" data-barba-namespace="contact">
<div class="contact darkSection">
    <img class="contact__svg" src="<?= getUrl('dist/images/star-illustration.svg'); ?>" alt="" width="1299" height="773">


        <div class="wrapper">
            <div class="contact__inside">
                <h1 class="contact__title js-in-view fx-parent">
                    <?= splitCharWord($title); ?>
                </h1>
                <div class="contact__content  js-in-view appear-fadeup appear-delay4">
                    <div class="contact__text">
                        <?= $text; ?>
                    </div>

                    <div class="contact__contact">
                        <?php if ($address): ?>
                        <a target="_blank" href="https://www.google.be/maps/dir/''/<?= urlencode(strip_tags($address)) ?>" class="contact__address">
                        <?= $address ?>
                        </a>
                        <?php endif ?>

                        <?php if ($contactText): ?>
                        <div class="contact__contactText">
                        <?= $contactText ?>
                        </div>
                        <?php endif ?>

                    </div>

                    <div class="contact__form">
                        <?= do_shortcode($form) ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer();
