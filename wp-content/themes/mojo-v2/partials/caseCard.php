<?php
    $image = getCustomThumbnail($case->ID, ['caseCard', 'caseCard@2x', 'caseCardMobile', 'caseCardMobile@2x']);
    $imageCard  = get_field('card_image', $case);
    $video = get_field('card_video', $case);
    $videoMobile = get_field('card_videoMobile', $case);    

?>

<section class="caseCard<?= $video ? ' caseCard--video' :'' ?> ">
    <a class="caseCard__link" href="<?= get_the_permalink($case); ?>">
        <?= get_the_title($case); ?>
    </a>

    <?php if($video): ?>
    <div class="caseCard__videoContainer">
        <picture>
        <?php if ($imageCard): ?>
            <?php if (isset($mobileOnly) && $mobileOnly): ?>
            <source 
                srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                media="screen and (min-width: 601px)"
            >
            <?php endif ?>
            <source 
                srcset="<?= $imageCard['sizes']['caseCardMobile'] ?> 1x, <?= $imageCard['sizes']['caseCardMobile@2x'] ?> 2x" 
                media="screen and (max-width: 600px)"
            >
            <img 
                class="caseCard__videoPoster"
                src="<?= $imageCard['sizes']['caseCard'] ?>" 
                srcset="<?= $imageCard['sizes']['caseCard'] ?> 1x, <?= $imageCard['sizes']['caseCard@2x'] ?> 2x" 
                alt="<?= $imageCard['alt']?>"
                width="625"
                height="500"
                lazyload
            >
        <?php else: ?>
            <?php if (isset($mobileOnly) && $mobileOnly): ?>
            <source 
                srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                media="screen and (min-width: 601px)"
            >
            <?php endif ?>
            <source 
                srcset="<?= $image->src['caseCardMobile'] ?> 1x, <?= $image->src['caseCardMobile@2x'] ?> 2x" 
                media="screen and (max-width: 600px)"
            >

            <img 
                class="caseCard__videoPoster"
                src="<?= $image->src['caseCard'] ?>" 
                srcset="<?= $image->src['caseCard'] ?> 1x, <?= $image->src['caseCard@2x'] ?> 2x" 
                alt="<?= $image->alt ?>"
                width="625"
                height="500"
                lazyload
            >
        
        <?php endif ?>        
        </picture>
        <video class="caseCard__video" 
        
            <?php if(0): ?>
            poster="<?= $imageCard ? $imageCard['sizes']['caseCard@2x'] : $image->src['caseCard@2x'] ?>"  
            <?php endif; ?>

            loop playsinline muted lazyload>
            <?php if ($videoMobile): ?>
            <source src="<?= $videoMobile ?>"  media="screen and (max-width: 600px)">
            <?php endif ?>

            <?php if (isset($mobileOnly) && $mobileOnly): ?>
                <source src="<?= $video ?>"  media="screen and (max-width: 600px)">
            <?php else: ?>
                <source src="<?= $video ?>" >
            <?php endif; ?>

        </video>
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