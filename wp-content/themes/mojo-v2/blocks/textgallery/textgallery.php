<?php
/**
 * Text Gallery Block template.
 *
 * @param array $block The block settings and attributes.
 */
    $images = get_field( 'images' );
    $title  = get_field( 'title' );
    $text   = get_field( 'text' );
    $side   = get_field( 'side' );

?>

<div class="textGallery textGallery--<?= $side ?>">

    <?php if($images): ?>
    <div class="textGallery__images">
        <?php foreach ($images as $image): ?>
        <figure class="textGallery__image">
            <picture>
                <source srcset="<?= $image['sizes']['fullImageMobile'] ?>" media="(max-width: 600px)">
                <img src="<?= $image['sizes']['textGallery'] ?>" srcset="<?= $image['sizes']['textGallery'] ?> 1x, <?= $image['sizes']['textGallery@2x'] ?> 2x" alt="<?= $image['alt']; ?>" width="625" height="700">

            </picture>
        </figure>
        <?php endforeach ?>
    </div>
    <?php endif ?>

    <div class="textGallery__content">

        <?php if ($title): ?>
        <h2 class="textGallery__title">
            <?= $title ?>
        </h2>
        <?php endif ?>

        <?php if ($text): ?>
        <div class="textGallery__text">
            <?= $text ?>
        </div>
        <?php endif ?>
        
    </div>

</div>
