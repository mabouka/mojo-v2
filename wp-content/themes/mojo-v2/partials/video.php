<?php if ($url) : ?>
    <div class="video">
        <video class="video__video lazy" loop autoplay playsinline muted>
            <?php if ($urlMobile): ?>
            <source data-src="<?= $urlMobile ?>" media="screen and (max-width: 600px)" type="video/mp4">
            <?php endif ?>
            <?php if ($urlMobileWebm): ?>
            <source data-src="<?= $urlMobileWebm ?>" media="screen and (max-width: 600px)" type="video/webm">
            <?php endif ?>
            <source data-src="<?= $url ?>" type="video/mp4">
            <?php if ($urlWebm): ?>
            <source data-src="<?= $urlWebm ?>" type="video/webm">
            <?php endif ?>
        </video>
    </div>
<?php endif; ?>