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
        <source src="<?= $urlMobile ?>" media="screen and (max-width: 600px)">
        <?php endif ?>
        <source src="<?= $url ?>">
    </video>
    <div class="homeVideo__noise"></div>
</div>
