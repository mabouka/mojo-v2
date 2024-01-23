<?php if ($items): ?>
<div class="clientTypology darkSection">
    <h2 class="clientTypology__title"><?= $title; ?></h2>
    <div class="clientTypology__list">
        <?php foreach ($items as $item): ?>

        <?php if ($item['url']): ?>
        <a class="clientTypology__item clientTypology__item--link" href="<?= $item['url'] ?>">
        <?php else: ?>
        <span class="clientTypology__item">
        <?php endif ?>
            <span class="clientTypology__itemText">
                <?= $item['title']; ?>
            </span>

            <?php if (isset($item['video']) && $item['video']): ?>
            <div class="clientTypology__video">
                <video autoplay playsinline muted src="<?= $item['video'] ?>" poster="<?= $item['image']['sizes']['imagesslider@2x']?>" ></video>
            </div>
            <?php else: ?>
            <figure class="clientTypology__image">
                <img src="<?= $item['image']['sizes']['imagesslider']?>"
                srcset="<?= $item['image']['sizes']['imagesslider']?> 1x, <?= $item['image']['sizes']['imagesslider@2x']?> 2x"
                    alt="<?= $item['image']['alt'] ?>"
                    width="500"
                    height="500"
                    >
            </figure>
            <?php endif ?>

        <?php if ($item['url']): ?>
        </a>
        <?php else: ?>
        </span>
        <?php endif ?>
        <?php endforeach ?>
    </div>

</div>
<?php endif ?>
