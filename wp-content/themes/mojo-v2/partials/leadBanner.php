<div class="leadBanner">

    <?php
        // Image du haut = élément LCP. Avant : 1x / 2x seulement, donc la
        // version 2 880 px (≈ 530 Ko) sur les téléphones. En largeurs, le
        // navigateur prend la plus petite qui suffit à son écran.
        $sizes = $image['sizes'];
        $srcset = [];
        foreach (['fullImageMobile', 'leadBanner', 'leadBanner@2x'] as $size) {
            if (!empty($sizes[$size]) && !empty($sizes[$size . '-width'])) $srcset[$sizes[$size]] = $sizes[$size] . ' ' . (int) $sizes[$size . '-width'] . 'w';
        }
    ?>
    <img class="leadBanner__image" src="<?= $sizes['leadBanner']; ?>" srcset="<?= esc_attr(implode(', ', $srcset)); ?>" sizes="100vw" width="1440" height="806" fetchpriority="high" alt="">

    <div class="wrapper">
        <h1 class="leadBanner__title"><?= $title; ?></h1>
    </div>
</div>