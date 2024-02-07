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

<div class="fullBlackImage<?= $isService ? ' fullBlackImage--service': '' ?>">
    <?php if ($image): ?>
    <figure class="fullBlackImage__image">
        <picture>
            <source srcset="<?= $image['sizes']['fullBlackImageMobile'] ?>" media="(max-width: 600px)">
            <img src="<?= $image['sizes']['fullBlackImage'] ?>" width="<?= $image['sizes']['fullBlackImage-width'] ?>" height="<?= $image['sizes']['fullBlackImage-height'] ?>">
        </picture>
    </figure>
    <?php endif ?>
</div>
