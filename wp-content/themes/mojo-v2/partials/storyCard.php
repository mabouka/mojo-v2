<?php
$modifier = $modifier ?? null;
$categories = get_the_terms($story->ID, 'storyCategory');
$categories = is_array($categories) ? array_slice($categories, 0, 2) : [];

$imageSizes = ['storyCardBig', 'storyCardBig@2x'];
$imageWidth = 515;
$imageHeight = 203;

if ($modifier === 'small') {
    $imageSizes = ['storyCardSmall', 'storyCardSmall@2x'];
    $imageWidth = 330;
    $imageHeight = 210;
}

$image = getCustomThumbnail($story->ID, $imageSizes);
$classes = 'storyCard js-in-view appear-fadeup';

if ($modifier) {
    $classes .= ' storyCard--' . $modifier;
}

?>

<article class="<?= esc_attr($classes); ?>">
    <a class="storyCard__link" href="<?= get_permalink($story->ID); ?>">
        <span class="sro"><?= get_the_title($story->ID); ?></span>
    </a>

    <div class="storyCard__media">
        <?php if ($image) : ?>
            <img
                class="storyCard__image"
                src="<?= $image->src[$imageSizes[0]] ?>"
                srcset="<?= $image->src[$imageSizes[0]] ?> 1x, <?= $image->src[$imageSizes[1]] ?> 2x"
                alt="<?= $image->alt ?>"
                width="<?= esc_attr($imageWidth); ?>"
                height="<?= esc_attr($imageHeight); ?>"
                loading="lazy">
        <?php endif; ?>
    </div>

    <div class="storyCard__content">
        <div class="storyCard__meta">
            <?php if ($categories) : ?>
                <div class="storyCard__categories">
                    <?php foreach ($categories as $category) : ?>
                        <span class="storyCard__category"><?= esc_html($category->name); ?></span>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

            <time class="storyCard__date" datetime="<?= get_the_date('c', $story->ID); ?>"><?= get_the_date('d.m.y', $story->ID); ?></time>
        </div>

        <h3 class="storyCard__title">
            <span><?= get_the_title($story->ID); ?></span>
        </h3>
    </div>
</article>
