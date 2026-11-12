<?php if ($url) : ?>
    <div class="video">
        <?php
        // Sources posées par LazyVideos (src/js/classes/lazyVideos.js) : gardées dans
        // data-sources, car un <source> sans src n'est pas du HTML valide.
        $mobileMedia = 'screen and (max-width: 600px)';
        $sources = [];
        if ($urlMobile) $sources[] = ['src' => $urlMobile, 'media' => $mobileMedia, 'type' => 'video/mp4'];
        if ($urlMobileWebm) $sources[] = ['src' => $urlMobileWebm, 'media' => $mobileMedia, 'type' => 'video/webm'];
        $sources[] = ['src' => $url, 'type' => 'video/mp4'];
        if ($urlWebm) $sources[] = ['src' => $urlWebm, 'type' => 'video/webm'];
        ?>
        <video class="video__video lazy" loop autoplay playsinline muted data-sources="<?= esc_attr(wp_json_encode($sources, JSON_UNESCAPED_SLASHES)) ?>"></video>
    </div>
<?php endif; ?>