<section class="leadPresentation">
    <div class="wrapper">
        <div class="leadPresentation__inside">
            <h2 class="leadPresentation__title"><?= $title; ?></h2>
            <div class="leadPresentation__text"><?= $text; ?></div>
            <?php if (!empty($ctaLabel)): ?>
            <a class="leadPresentation__cta btn btn--dark" href="#contactForm"><?= esc_html($ctaLabel); ?></a>
            <?php endif ?>
        </div>
    </div>
</section>