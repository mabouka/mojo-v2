<section class="fullVideo<?= isset($class) ? ' ' . $class : '' ?>">

    <a class="fullVideo__link<?= (isset($link['lightbox']) && $link['lightbox']) ? ' openVideoLightBox' : '' ?>" href="<?= $link['url']; ?>">
        <?= $link['label']; ?>
    </a>

    <div class="fullVideo__text">
        <div class="fullVideo__textCenter">
            <?php if(isset($subTitle) && $subTitle): ?>
            <p class="fullVideo__client"><?= $subTitle ?></p>
            <?php endif; ?>
            <h3 class="fullVideo__name"><?= $title ?></h3>

        </div>
    </div>

    <?php if(isset($image) && $image): ?>
    <figure class="fullVideo__image">
        <picture>
            <source srcset="<?= $image['src']['mobileCinema']; ?>"
                    media="(max-width: 700px)">
            <img src="<?= $image['src']['cinemaScope']; ?>" srcset="<?= $image['src']['cinemaScope']; ?> 1x, <?= $image['src']['cinemaScope-retina']; ?> 2x" alt="<?= $image['alt']; ?>">

        </picture>
    </figure>

    
    <?php endif; ?>

</section>