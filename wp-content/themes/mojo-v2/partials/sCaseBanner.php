<?php 
    global $post;
    $purpose = [];
    $terms = get_the_terms( $post, 'purpose' );
    if($terms && $terms[0]){
        $purpose = [
            'color' => get_field('color', $term),
            'text'  => get_field('text', $term)
        ];
    }
    
?>
<div class="sCaseBanner">

    <?php if ($video): ?>
    <div class="sCaseBanner__video">
        <video src="<?= $video ?>" autoplay playsinline muted loop poster="<?= $image['sizes']['caseFull'] ?>"></video>
    </div>
    <?php elseif($image): ?>
    <figure class="sCaseBanner__image">
        <img src="<?= $image['sizes']['caseFull'] ?>" alt="<?= $image['alt'] ?>">
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
