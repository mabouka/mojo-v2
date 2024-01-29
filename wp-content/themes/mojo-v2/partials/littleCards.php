<?php if ($items): ?>
<div class="littleCards littleCards--<?= get_field("color") ?><?= $isLight ? ' littleCards--light' : '' ?>">
    <div class="wrapper">
        <div class="littleCards__inside">
            <h2 class="littleCards__title"><?= $title; ?></h2>

            <div class="littleCards__grid">
            <?php foreach ($items as $item): ?>
            <section class="littleCards__item">
                <svg class="littleCards__star littleCards__star--tl " width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="littleCards__star littleCards__star--tr" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="littleCards__star littleCards__star--bl" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>
                <svg class="littleCards__star littleCards__star--br" width="11" height="11">
                    <use xlink:href="#star"></use>
                </svg>

                <h3 class="littleCards__itemTitle"><?= $item['title'] ?></h3>
                <div class="littleCards__itemText">
                    <?= $item['text'] ?>
                </div>

                <?php if ($item['url']): ?>
                <a href="<?= $item['url'] ?>" class="littleCards__itemLink"><?= $item['title'] ?></a>
                <?php endif ?>

                

            </section>
            <?php endforeach ?>
            </div>
        </div>
    </div>
</div>
<?php endif ?>