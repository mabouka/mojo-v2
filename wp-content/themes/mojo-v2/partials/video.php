<?php if ($url) : ?>
    <div class="video">
        <video class="video__video" loop autoplay playsinline muted>
        <?php if ($urlMobile): ?>
        <source src="<?= $urlMobile ?>" media="screen and (max-width: 600px)">
        <?php endif ?>
        <source src="<?= $url ?>">
        </video>
    </div>
<?php endif; ?>