<div class="homeVideo">
    <div class="wrapper">
        <div class="homeVideo__inside">
            <p class="homeVideo__text">
                <?= $text; ?>
            </p>
        </div>
    </div>
    <?php
    // Source posée par homeVideo.js selon la largeur d'écran : un seul fichier
    // téléchargé (avec plusieurs <source>, le Chrome de PageSpeed les chargeait
    // toutes, ~8 Mo), et seulement après la première peinture.
    // Plus de WebM : ils pesaient 60 % de plus que les MP4, lus partout.
    ?>
    <video class="homeVideo__video" loop autoplay playsinline muted preload="none"
        data-src="<?= esc_url($url) ?>"
        <?php if ($urlMobile): ?>data-src-mobile="<?= esc_url($urlMobile) ?>"<?php endif ?>
        <?= $poster ? 'poster="' . esc_url($poster['url']) . '"' : '' ?>>
    </video>
    <div class="homeVideo__noise"></div>
</div>
