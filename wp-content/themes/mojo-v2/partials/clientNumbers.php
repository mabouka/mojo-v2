<?php if ($items): ?>
<div class="clientNumbers darkSection">
    <picture>
        <source srcset="<?= getUrl('dist/images/star-illustration-vertical.svg'); ?>" media="(max-width: 600px)">
        <img class="clientNumbers__svg" src="<?= getUrl('dist/images/star-illustration.svg'); ?>" alt="" width="1299" height="773">

    </picture>

    <div class="wrapper">
        <div class="clientNumbers__inside">

            <div class="clientNumbers__moon"></div>

            <?php foreach ($items as $item): ?>
            <div class="clientNumbers__item<?= $item['over_moon'] ? ' clientNumbers__item--overmoon' : '' ?>" style="top: <?=  $item['position_y'];?>%; left: <?=  $item['position_x'];?>%; ">
                <span class="clientNumbers__itemNumber">
                    <?= $item['number']; ?> 
                </span>
                <div class="clientNumbers__itemOutside">
                    <p class="clientNumbers__itemLabel"><?= $item['label']; ?></p>
                    <?php if ($item['link']): ?>
                    <a class="clientNumbers__itemLink" href="<?= $item['link']['url'] ?>">
                        <?= $item['link']['title'] ?>
                    </a>
                    <?php endif ?>
                </div>
            </div>
            <?php endforeach ?>
        </div>
    </div>
</div>
<?php endif ?>
