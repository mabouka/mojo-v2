
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
    
</div>
