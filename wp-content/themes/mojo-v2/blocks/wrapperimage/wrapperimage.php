<?php
/**
 * Wrapper Image Block template.
 *
 * @param array $block The block settings and attributes.
 */
    $image = get_field( 'image' );
 ?>

<div class="wrapperImage">
    <?php if ($image): ?>
    <figure class="wrapperImage__image">
        <picture>
            <source srcset="<?= $image['sizes']['fullImageMobile'] ?>" media="(max-width: 600px)">
            <img src="<?= $image['sizes']['wrapperImage'] ?>" width="<?= $image['sizes']['wrapperImage-width'] ?>" height="<?= $image['sizes']['wrapperImage-height'] ?>">
        </picture>
    </figure>
    <?php endif ?>
</div>
