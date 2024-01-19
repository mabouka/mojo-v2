<?php if ($items): ?>
<div class="clientTypology darkSection">
    <h2 class="clientTypology__title"><?= $title; ?></h2>
    <div class="clientTypology__list">
        <?php foreach ($items as $item): ?>
        <a class="clientTypology__item" href="<?= get_post_type_archive_link('case')  ?>?typology=<?= $item['typology']->slug; ?>">
            <span>
                <?= $item['typology']->name; ?>
            </span>

            <figure class="clientTypology__image">
                <img src="<?= $item['image']['sizes']['imagesslider']?>"
                srcset="<?= $item['image']['sizes']['imagesslider']?> 1x, <?= $item['image']['sizes']['imagesslider@2x']?> 2x"
                    alt="<?= $item['image']['alt'] ?>"
                    width="500"
                    height="500"
                    >
            </figure>
        </a>
        <?php endforeach ?>
    </div>

</div>
<?php endif ?>
