<?php 
    global $post;
    $isDark = true;
    $purpose = [];
    $terms = get_the_terms( $post, 'purpose' );
    if($terms && $terms[0]){
        $purpose = [
            'color' => get_field('color', $terms[0]),
            'text'  => get_field('text', $terms[0])
        ];
    }

    $headerColor = get_field('header_color', $post);
    if($headerColor === 'light') $isDark = false;
    
?>
<div class="sCaseBanner<?= !$isDark ? ' darkSection' : '' ?>">

    <?php if ($video): ?>
    <div class="sCaseBanner__video">
        <video autoplay playsinline muted loop <?= $image ? ('poster="' . $image['sizes']['caseFull'] .'"') : '' ?>>
            <?php if ($videoMobileWebm): ?>
            <source src="<?= $videoMobileWebm ?>" media="(max-width: 600px)" type="video/webm>
            <?php endif ?>
            <?php if ($videoMobile): ?>
            <source src="<?= $videoMobile ?>" media="(max-width: 600px)" type="video/mp4>
            <?php endif ?>
            <?php if ($videoWebm): ?>
            <source src="<?= $videoWebm ?>" type="video/webm>
            <?php endif ?>
            <source src="<?= $video ?>" type="video/mp4>
        </video>
    </div>
    <?php elseif($image): ?>
    <figure class="sCaseBanner__image">
        <picture>
            <?php if ($imageMobile): ?>
            <source srcset="<?= $imageMobile['sizes']['caseFullMobile'] ?> 1x, <?= $imageMobile['sizes']['caseFullMobile@2x'] ?> 2x" media="(max-width:600px)" >
            <?php endif ?>
            <img src="<?= $image['sizes']['caseFull'] ?>" alt="<?= $image['alt'] ?>">
        
        </picture>
    </figure>
    <?php endif ?>
    <div class="wrapper">
    <?php if ($purpose): ?>
    <div class="purposeDisc purposeDisc--<?= $purpose['color'] ?>">
        <div class="purposeDisc__text">
            <?= $purpose['text'] ?>
        </div>
    </div>
    <?php endif ?>
    </div>


    
</div>
