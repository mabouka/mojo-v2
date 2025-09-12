<div class="leadBanner">
    <?php if ($isVideo) : ?>
        <video class="leadBanner__video" src="<?= $video; ?>" autoplay playsinline muted>
            <?php if ($videoMp4Mobile): ?>
                <source src="<?= $videoMp4Mobile ?>" media="screen and (max-width: 600px)" type="video/mp4">
            <?php endif ?>
            <?php if ($videoWebmMobile): ?>
                <source src="<?= $videoWebmMobile ?>" media="screen and (max-width: 600px)" type="video/webm">
            <?php endif ?>

            <source src="<?= $videoMp4 ?>" type="video/mp4">
            <?php if ($videoWebm): ?>
                <source src="<?= $videoWebm ?>" type="video/webm">
            <?php endif ?>
        </video>
    <?php elseif ($image) : ?>
        <img class="leadBanner__image" src="<?= $image['sizes']['leadBanner']; ?>" srcset="<?= $image['sizes']['leadBanner@2x']; ?> 2x" alt="">
    <?php endif; ?>
    <div class="wrapper">
        <h1 class="leadBanner__title"><?= $title; ?></h1>
    </div>
</div>