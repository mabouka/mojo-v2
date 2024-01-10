<?php 
    $child_args = array(
        'post_parent' => $service->ID, // The parent id.
        'post_type'   => 'services',
        'post_status' => 'publish'
    );
    
    $children = get_children( $child_args );
?>

<section class="serviceCard serviceCard--<?= get_field('color', $service) ?><?= isset($modifier) ? ' serviceCard--'.$modifier : '' ?> " >

    <a class="serviceCard__link" href="<?= get_the_permalink($service) ?>">
        <?= get_the_title($service); ?>
    </a>

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

    <?php $svg = get_field('svg', $service); ?>

    <?= $svg ?>

    <?= str_replace("serviceCard__picture", "serviceCard__picture serviceCard__picture--hover", $svg); ?>

    <h3 class="serviceCard__title"><?= get_the_title($service); ?></h3>

    <?php if (0 && str_contains($modifier, 'animated')): ?>
    <div class="glow"></div>
    <?php endif ?>

    <?php if ( $children && isset($modifier) && str_contains($modifier, 'full')): ?>
        <div class="serviceCard__hoverMenu">
            <?php foreach($children as $child): ?>
            <a class="serviceCard__hoverItem" href="<?= get_the_permalink($child) ?>">
                <?= get_the_title($child) ?>
            </a>
            <?php endforeach; ?>
            <a class="serviceCard__hoverMenuTitle" href="<?= get_the_permalink($service) ?>">
                <?= get_the_title($service); ?>
            </a>
        </div>

    <?php endif ?>



            </section>