<?php
    $image = getCustomThumbnail($case->ID, ['caseCard', 'caseCard@2x']);
    $video = get_field('video', $case);
?>

<section class="caseCard<?= $video ? ' caseCard--video' :'' ?>">
    <a class="caseCard__link" href="<?= get_the_permalink($case); ?>">
        <?= get_the_title($case); ?>
    </a>
    <?php if($video): ?>
    <div class="caseCard__videoContainer">
        <video class="caseCard__video" src="<?= $video ?>" playsinline muted></video>
    </div>
    <?php else: ?>
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