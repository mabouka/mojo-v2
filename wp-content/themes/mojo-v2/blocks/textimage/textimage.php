<?php
/**
 * Text image Block template.
 *
 * @param array $block The block settings and attributes.
 */
    $image = get_field( 'image' );
    $title = get_field( 'title' );
    $text  = get_field( 'text' );
    $side  = get_field( 'side' );

 ?>

<div class="textImage textImage--<?= $side ?>">

    <?php if ($image): ?>
    
    <figure class="textImage__image">
        <picture>
            <source srcset="<?= $image['sizes']['twoImagesMobile'] ?>" media="(max-width: 600px)">
            <img src="<?= $image['sizes']['twoImages'] ?>" srcset="<?= $image['sizes']['twoImages'] ?> 1x, <?= $image['sizes']['twoImages'] ?> 2x" alt="<?= $image['alt']; ?>" width="625" height="700">
        </picture>
    </figure>
    <?php endif ?>
    <div class="textImage__content">

        <?php if ($title): ?>
        <h2 class="textImage__title">
            <?= $title ?>
        </h2>
        <?php endif ?>

        <?php if ($text): ?>
        <div class="textImage__text">
            <?= $text ?>
        </div>
        <?php endif ?>
    </div>

</div>
