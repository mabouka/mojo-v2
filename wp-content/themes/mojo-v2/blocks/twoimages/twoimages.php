<?php
/**
 * Testimonial Block template.
 *
 * @param array $block The block settings and attributes.
 */

    $images = get_field( 'images' );
 ?>
<?php if ($images): ?>
<div class="twoImages">
    <?php foreach ($images as $image): ?>
    <figure class="twoImages__item">
        <picture>
            <source srcset="<?= $image['sizes']['twoImagesMobile'] ?>" media="(max-width: 600px)">
            <img src="<?= $image['sizes']['twoImages'] ?>" srcset="<?= $image['sizes']['twoImages'] ?> 1x, <?= $image['sizes']['twoImages@2x'] ?> 2x" alt="<?= $image['alt']; ?>" width="625" height="700">
        </picture>
    </figure>
    <?php endforeach ?>
</div>
<?php endif ?>
