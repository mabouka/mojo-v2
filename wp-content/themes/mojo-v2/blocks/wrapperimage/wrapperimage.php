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
        <img src="<?= $image['sizes']['wrapperImage'] ?>" width="<?= $image['sizes']['wrapperImage-width'] ?>" height="<?= $image['sizes']['wrapperImage-height'] ?>">
    </figure>
    <?php endif ?>
</div>