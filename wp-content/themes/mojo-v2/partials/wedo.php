<?php
// Liste à plat les sous-pages de premier niveau du service courant, sous forme
// d'une grande phrase « We do X - Y - Z », chaque item étant un lien.
// Le fond suit le champ ACF `color` de la page (même set que serviceProjects).
// Variables attendues : items (WP_Post[]), prefix (string), isLight (bool).
$prefix  = $prefix ?? __('We do', 'mj');
$isLight = $isLight ?? false;
?>
<?php if ($items): ?>
    <section class="wedo wedo--<?= esc_attr(get_field('color')); ?><?= $isLight ? ' wedo--light' : ''; ?> js-in-view appear-fade">
        <div class="wedo__inside">
            <p class="wedo__text">
                <span class="wedo__prefix"><?= esc_html($prefix); ?></span>
                <?php foreach ($items as $i => $item): ?>
                    <?php if ($i > 0): ?><span class="wedo__sep" aria-hidden="true">-</span><?php endif; ?>
                    <a class="wedo__link" href="<?= esc_url(get_permalink($item->ID)); ?>"><?= esc_html($item->post_title); ?></a>
                <?php endforeach; ?>
            </p>
        </div>
    </section>
<?php endif; ?>
