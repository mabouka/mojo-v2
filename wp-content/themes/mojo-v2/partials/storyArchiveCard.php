<?php
$modifier = $modifier ?? 'small';
$categories = get_the_terms($story->ID, 'storyCategory');
$categories = is_array($categories) ? array_slice($categories, 0, 2) : [];

$imageSizes = ['storyCardSmall', 'storyCardSmall@2x'];
$imageWidth = 330;
$imageHeight = 210;

if ($modifier === 'featured') {
    $imageSizes = ['storyArchiveFeatured', 'storyArchiveFeatured@2x'];
    $imageWidth = 691;
    $imageHeight = 619;
}

$image = getCustomThumbnail($story->ID, $imageSizes);
?>

<article class="storyArchiveCard storyArchiveCard--<?= esc_attr($modifier); ?> js-in-view appear-fadeup">
    <a class="storyArchiveCard__link" href="<?= get_permalink($story->ID); ?>">
        <span class="sro"><?= get_the_title($story->ID); ?></span>
    </a>

    <div class="storyArchiveCard__media">
        <?php if ($image) : ?>
            <img
                class="storyArchiveCard__image"
                src="<?= esc_url($image->src[$imageSizes[0]]); ?>"
                srcset="<?= esc_url($image->src[$imageSizes[0]]); ?> 1x, <?= esc_url($image->src[$imageSizes[1]]); ?> 2x"
                alt="<?= esc_attr($image->alt ?: get_the_title($story->ID)); ?>"
                width="<?= esc_attr($imageWidth); ?>"
                height="<?= esc_attr($imageHeight); ?>"
                loading="lazy">
        <?php endif; ?>
    </div>

    <div class="storyArchiveCard__content">
        <div class="storyArchiveCard__meta">
            <?php if ($categories) : ?>
                <span class="storyArchiveCard__categories">
                    <?php foreach ($categories as $category) : ?>
                        <span class="storyArchiveCard__category"><?= esc_html($category->name); ?></span>
                    <?php endforeach; ?>
                </span>
            <?php endif; ?>

            <time class="storyArchiveCard__date" datetime="<?= esc_attr(get_the_date('c', $story->ID)); ?>">
                <?= esc_html(get_the_date('d.m.y', $story->ID)); ?>
            </time>
        </div>

        <h2 class="storyArchiveCard__title">
            <span><?= get_the_title($story->ID); ?></span>
        </h2>
    </div>
</article>
