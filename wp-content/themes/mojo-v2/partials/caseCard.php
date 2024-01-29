<?php
    $image = getCustomThumbnail($case->ID, ['caseCard', 'caseCard@2x']);
    $imageCard  = get_field('card_image', $case);
    $video = get_field('card_video', $case);
?>

<section class="js-is-center caseCard<?= $video ? ' caseCard--video' :'' ?> ">
    <a class="caseCard__link" href="<?= get_the_permalink($case); ?>">
        <?= get_the_title($case); ?>
    </a>

    <?php if($video): ?>
    <div class="caseCard__videoContainer">
        <img class="caseCard__videoPoster" src="<?= $imageCard ? $imageCard['sizes']['caseCard@2x'] : $image->src['caseCard@2x'] ?>" src="<?= $video ?>" alt="">
        <video class="caseCard__video" poster="<?= $imageCard ? $imageCard['sizes']['caseCard@2x'] : $image->src['caseCard@2x'] ?>" src="<?= $video ?>"  playsinline muted lazyload></video>
    </div>

    <?php elseif($imageCard): ?>
    <figure class="caseCard__image">
        <img 
            src="<?= $imageCard['sizes']['caseCard'] ?>" 
            srcset="<?= $imageCard['sizes']['caseCard'] ?> 1x, <?= $imageCard['sizes']['caseCard@2x'] ?> 2x" 
            alt="<?= $imageCard['alt']?>"
            width="625"
            height="500"
            lazyload
        >
    </figure>
    <?php elseif($image): ?>
    <figure class="caseCard__image">
        <img 
            src="<?= $image->src['caseCard'] ?>" 
            srcset="<?= $image->src['caseCard'] ?> 1x, <?= $image->src['caseCard@2x'] ?> 2x" 
            alt="<?= $image->alt ?>"
            width="625"
            height="500"
            lazyload
        >
    </figure>
    <?php endif; ?>

    <h2 class="caseCard__title"><?= get_the_title($case); ?></h2>

    <?php
    $categories = get_the_category($case);
    if ($categories) : ?>
        <ul class="caseCard__categories">
            <?php foreach ($categories as $category) : ?>
                <li class="caseCard__category">
                    <?= $category->name; ?>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>

</section>