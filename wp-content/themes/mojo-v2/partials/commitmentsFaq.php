<?php if ($items): ?>
<section class="commitmentsFaq">
    <div class="wrapper">
        <div class="commitmentsFaq__inside">

            <?php if ($title): ?>
            <h2 class="commitmentsFaq__title"><?= $title; ?></h2>
            <?php endif ?>

            <div class="commitmentsFaq__items">
                <?php foreach ($items as $item): ?>
                <div class="commitmentsFaq__item">
                    <p class="commitmentsFaq__itemTitle"><?= $item['title'] ?></p>
                    <div class="commitmentsFaq__itemWrapper">
                        <div class="commitmentsFaq__itemText">
                        <?= $item['text'] ?>
                        </div>
                    </div>
   
                </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>
</section>
<?php endif ?>
