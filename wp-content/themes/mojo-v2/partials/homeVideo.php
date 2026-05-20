<div class="homeVideo">
    <div class="wrapper">
        <div class="homeVideo__inside">
            <p class="homeVideo__text">
                <?= $text; ?>
            </p>
        </div>
    </div>
    <video class="homeVideo__video" loop autoplay playsinline muted <?= $poster ? 'poster="' . $poster['url'] . '"' : '' ?>>
        <source src="<?= $url ?>" type="video/mp4">
    </video>
    <div class="homeVideo__noise"></div>
</div>
