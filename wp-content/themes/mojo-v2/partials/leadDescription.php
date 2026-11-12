<section class="leadDescription">
    <div class="wrapper">
        <div class="leadDescription__inside">
            <?php // Champ ACF éditeur : ses <p> ne sont pas permis dans un titre, on les retire (strong et br restent). ?>
            <h2 class="leadDescription__title"><?= trim(preg_replace('#</?p\b[^>]*>#i', '', (string) $title)); ?></h2>
            <div class="leadDescription__content">
                <div class="leadDescription__text"><?= $text; ?></div>
                <a class="leadDescription__link btn btn--blue" href="#contactForm"><?= $linkLabel; ?></a>
            </div>
        </div>
    </div>
</section>