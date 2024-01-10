<section class="section">
    <h2 class="section__title"><?= $title; ?></h2>
    <div class="section__content">
        <?php if ($intro): ?>
        <div class="section__intro">
            <?= $intro; ?>
        </div>
        <?php endif ?>

        <?php if ($text): ?>
        <div class="section__text">
            <?= $text ?>
        </div>
        <?php endif ?>
    </div>
</section>