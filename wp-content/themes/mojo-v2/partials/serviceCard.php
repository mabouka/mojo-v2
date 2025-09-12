<?php
$child_args = array(
    'post_parent' => $service->ID, // The parent id.
    'post_type'   => 'services',
    'post_status' => 'publish'
);
$color = get_field('color', $service);
$children = get_children($child_args);
?>

<section class="serviceCard serviceCard--<?= $color ?><?= isset($modifier) ? ' serviceCard--' . $modifier : '' ?> ">


    <svg class="serviceCard__star serviceCard__star--tl " width="11" height="11">
        <use xlink:href="#star"></use>
    </svg>
    <svg class="serviceCard__star serviceCard__star--tr" width="11" height="11">
        <use xlink:href="#star"></use>
    </svg>
    <svg class="serviceCard__star serviceCard__star--bl" width="11" height="11">
        <use xlink:href="#star"></use>
    </svg>
    <svg class="serviceCard__star serviceCard__star--br" width="11" height="11">
        <use xlink:href="#star"></use>
    </svg>

    <?php
    $whitecard = [
        'dodgerblue'
    ]; ?>

    <?php if (!in_array($color, $whitecard)): ?>

        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--tl " width="11" height="11">
            <use xlink:href="#star"></use>
        </svg>
        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--tr" width="11" height="11">
            <use xlink:href="#star"></use>
        </svg>
        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--bl" width="11" height="11">
            <use xlink:href="#star"></use>
        </svg>
        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--br" width="11" height="11">
            <use xlink:href="#star"></use>
        </svg>

    <?php else: ?>

        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--tl " width="11" height="11">
            <use xlink:href="#whiteStar"></use>
        </svg>
        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--tr" width="11" height="11">
            <use xlink:href="#whiteStar"></use>
        </svg>
        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--bl" width="11" height="11">
            <use xlink:href="#whiteStar"></use>
        </svg>
        <svg class="serviceCard__star serviceCard__star--hover serviceCard__star--br" width="11" height="11">
            <use xlink:href="#whiteStar"></use>
        </svg>

    <?php endif ?>

    <?php if ($static = get_field('svg_static', $service)): ?>
        <img class="serviceCard__picture" loading="lazy" src="<?= $static['url'] ?>" alt="<?= $static['alt'] ?>">
    <?php endif ?>


    <?php if ($hover = get_field('svg_hover', $service)): ?>
        <img class="serviceCard__picture serviceCard__picture--hover" loading="lazy" src="<?= $hover['url'] ?>" alt="<?= $hover['alt'] ?>">
    <?php endif ?>


    <h3 class="serviceCard__title"><?= get_the_title($service); ?></h3>

    <div class="serviceCard__hoverMenu">
        <span class="serviceCard__hoverMenuTitle">
            <?= get_the_title($service); ?>
        </span>
        <?php if ($children && isset($modifier) && str_contains($modifier, 'full')): ?>
            <?php foreach ($children as $child): ?>
                <span class="serviceCard__hoverItem">
                    <?= get_the_title($child) ?>
                </span>
            <?php endforeach; ?>
        <?php endif ?>

    </div>

</section>