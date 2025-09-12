<?php
$contactPage = getPagebyTemplate('template-contact.php');

$address  = get_field('address', $contactPage->ID);
$contactText  = get_field('intro_contact_text', $contactPage->ID);

?>
<div class="contact contact--lead" id="contactForm">
    <div class="wrapper">
        <div class="contact__inside">


            <svg class="contact__illustration" width="638" height="638" viewBox="0 0 638 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M636.999 1.38965H519.452L213.43 498.29H636.999V1.38965Z" stroke="#131C23" />
                <path d="M69.6726 206.436C103.217 327.439 188.533 417.212 297.229 428.637C399.588 439.395 496.124 377.854 555.436 277.603L592.391 293.255C567.376 483.791 428.944 623.986 278.36 608.159C124.635 592.002 16.7519 419.521 37.4132 222.94C38.1157 216.256 39.5361 209.918 40.5469 203.375L69.6726 206.436Z" fill="#FF542E" />
                <mask id="mask0_207_2328" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="34" y="205" width="559" height="405">
                    <path d="M70.2756 208.54C104.222 328.479 189.177 417.279 297.242 428.637C399.601 439.395 496.137 377.854 555.449 277.603L592.404 293.255C567.389 483.791 428.957 623.987 278.373 608.16C124.648 592.002 16.7658 419.521 37.4272 222.941C37.8741 218.689 38.611 214.577 39.3484 210.464C39.6514 208.774 39.9539 207.083 40.2369 205.382L70.2756 208.54Z" fill="white" />
                </mask>
                <g mask="url(#mask0_207_2328)">
                    <path d="M636.997 1.39648H519.45L213.428 498.297H636.997V1.39648Z" fill="#FEC5D4" />
                </g>
            </svg>



            <h1 class="contact__title js-in-view fx-parent">
                <?php if ($subtitle) : ?>
                    <p class="contact__subtitle js-in-view appear-fade appear-delay4">
                        <?= $subtitle; ?>
                    </p>
                <?php endif; ?>
                <?= splitCharWord($title); ?>
            </h1>

            <div class="contact__content  js-in-view appear-fadeup appear-delay4">

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