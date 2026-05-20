<div class="homeVideo">
    <div class="wrapper">
        <div class="homeVideo__inside">
            <p class="homeVideo__text">
                <?= $text; ?>
            </p>
        </div>
    </div>
    <video class="homeVideo__video lazy" loop autoplay playsinline muted preload="none" <?= $poster ? 'poster="' . $poster['url'] . '"' : '' ?>>
        <source data-src="<?= $url ?>" type="video/mp4">
    </video>
    <div class="homeVideo__noise"></div>
</div>
