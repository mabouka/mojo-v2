<?php if ($items): ?>
<section class="servicePeople servicePeople--<?= get_field("color") ?><?= $isLight ? ' servicePeople--light' : '' ?>">
    <div class="wrapper">
        <div class="servicePeople__inside">
            <h2 class="servicePeople__title"><?= $title ?></h2>
            <div class="servicePeople__grid">
            <?php foreach ($items as $item): ?>
                <?php getPartial('teamCard', [
                    'person' => $item
                ]) ?>
            <?php endforeach ?>
            </div>
        </div>
    </div>
</section>
<?php endif ?>