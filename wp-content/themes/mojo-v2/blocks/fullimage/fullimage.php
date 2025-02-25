<?php
/**
 * Full Black Image Block template.
 *
 * @param array $block The block settings and attributes.
 */
    $image = get_field( 'image' );
    $isService = false;
    if (is_singular('services')) {
        global $post;
        $parent = array_reverse(get_post_ancestors($post->ID));
        if($parent) {
            $isService = true;
        }
    }
 ?>

<div class="fullImage<?= $isService ? ' fullImage--service': '' ?>">
    <?php if ($image): ?>
    <figure class="fullImage__image">
        <picture>
            <source srcset="<?= $image['sizes']['fullImageMobile'] ?>" media="(max-width: 600px)">
            <img src="<?= $image['sizes']['fullImage'] ?>" width="<?= $image['sizes']['fullImage-width'] ?>" height="<?= $image['sizes']['fullImage-height'] ?>">
        </picture>
    </figure>
    <?php endif ?>
</div>
