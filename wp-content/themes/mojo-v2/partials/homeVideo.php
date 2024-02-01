<div class="homeVideo">
    <div class="wrapper">
        <div class="homeVideo__inside">
            <p class="homeVideo__text">
                <?= $text; ?>
            </p>
        </div>
    </div>
    <video class="homeVideo__video" loop autoplay playsinline muted>
        <?php if ($urlMobile): ?>
        <source src="<?= $urlMobile ?>" media="screen and (max-width: 600px)">
        <?php endif ?>
        <source src="<?= $url ?>" type="application/x-mpegURL">
    </video>
    <div class="homeVideo__noise"></div>
</div>
