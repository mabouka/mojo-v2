<?php if ($url) : ?>
    <div class="video">
        <video class="video__video lazy" loop autoplay playsinline muted>
            <?php if ($urlMobile): ?>
            <source data-src="<?= $urlMobile ?>" media="screen and (max-width: 600px)">
            <?php endif ?>
            <source data-src="<?= $url ?>">
        </video>
    </div>
<?php endif; ?>