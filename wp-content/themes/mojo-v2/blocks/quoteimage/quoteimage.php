<?php
/**
 * Testimonial Block template.
 *
 * @param array $block The block settings and attributes.
 */
    $image = get_field( 'image' );
    $quote = get_field( 'quote' );
    $cite  = get_field( 'cite' );
    $side  = get_field( 'side' );

 ?>
<div class="quoteImage quoteImage--<?= $side ?>">

    <?php if ($image): ?>
    
    <figure class="quoteImage__image">
        <picture>
            <source srcset="<?= $image['sizes']['twoImagesMobile'] ?>" media="(max-width: 600px)">
            <img src="<?= $image['sizes']['twoImages'] ?>" srcset="<?= $image['sizes']['twoImages'] ?> 1x, <?= $image['sizes']['twoImages@2x'] ?> 2x" alt="<?= $image['alt']; ?>" width="625" height="700">
        </picture>
    </figure>
    <?php endif ?>


    <?php if ($quote): ?>
    <blockquote class="quoteImage__quote">
        <div class="quoteImage__quoteText">
            <?= $quote ?>
        </div>
        <cite class="quoteImage__cite">
            <?= $cite ?>
        </cite>
    </blockquote>
    <?php endif ?>


</div>