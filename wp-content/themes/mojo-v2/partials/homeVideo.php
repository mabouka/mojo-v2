<div class="homeVideo">
    <div class="wrapper">
        <div class="homeVideo__inside">
            <p class="homeVideo__text">
                <?= $text; ?>
            </p>
        </div>
    </div>
    <?php
    // Source posée par homeVideo.js selon l'écran ET le format lisible : un seul
    // fichier téléchargé (avec plusieurs <source>, un navigateur sans HEVC les
    // essayait l'une après l'autre : ~8 Mo pour le Chrome de PageSpeed), et
    // seulement après la première peinture.
    // Les MP4 sont en HEVC (Safari, appareils avec décodage matériel) ; les WebM
    // (VP9) restent indispensables pour les autres navigateurs.
    ?>
    <video class="homeVideo__video" loop autoplay playsinline muted preload="none"
        data-src="<?= esc_url($url) ?>"
        <?php if ($urlWebm): ?>data-src-webm="<?= esc_url($urlWebm) ?>"<?php endif ?>
        <?php if ($urlMobile): ?>data-src-mobile="<?= esc_url($urlMobile) ?>"<?php endif ?>
        <?php if ($urlMobileWebm): ?>data-src-mobile-webm="<?= esc_url($urlMobileWebm) ?>"<?php endif ?>
        <?= $poster ? 'poster="' . esc_url($poster['url']) . '"' : '' ?>>
    </video>
    <div class="homeVideo__noise"></div>
</div>
