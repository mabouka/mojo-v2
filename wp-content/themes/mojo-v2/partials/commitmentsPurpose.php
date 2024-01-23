<section class="commitmentsPurpose darkSection">
    <div class="wrapper">
        <div class="commitmentsPurpose__inside">
            <h2 class="sro"><?= __('Initiatives', 'mj'); ?></h2>
            
            <?php if ($text): ?>
            <div class="commitmentsPurpose__text">
                <?= $text ?>
            </div>
            <?php endif ?>

            <?php if ($presentation): ?>
            <div class="commitmentsPurpose__presentation">
                <?= $presentation ?>
            </div>
            <?php endif ?>

            <?php if ($cards): ?>
            <div class="commitmentsPurpose__cards">
                <?php foreach ($cards as $card): ?>
                <?php 
                    getPartial('purposeCard', [
                        'card' => $card
                    ]);
                ?>
                <?php endforeach ?>
            </div>
            <?php endif ?>

        </div>
    </div>
</section>