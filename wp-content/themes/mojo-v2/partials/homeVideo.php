<div class="homeVideo">
    <div class="wrapper">
        <div class="homeVideo__inside">
            <p class="homeVideo__text">
                <?= $text; ?>
            </p>
        </div>
    </div>
    <video class="homeVideo__video" loop autoplay playsinline muted <?= $poster ? 'poster="' . $poster['url'] . '"': '' ?>>

        <?php if ($urlMobile): ?>
        <source src="<?= $urlMobile ?>" media="screen and (max-width: 600px)" type="video/mp4">
        <?php endif ?>
        <?php if ($urlMobileWebm): ?>
        <source src="<?= $urlMobileWebm ?>" media="screen and (max-width: 600px)" type="video/webm">
        <?php endif ?>

        <source src="<?= $url ?>" type="video/mp4">
        <?php if ($urlWebm): ?>
        <source src="<?= $urlWebm ?>" type="video/webm">
        <?php endif ?>
    </video>
    <div class="homeVideo__noise"></div>
</div>
