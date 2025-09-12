<section class="leadTeam">
    <div class="wrapper">
        <div class="leadTeam__inside">
            <?php if ($subtitle): ?>
                <p class="leadTeam__subtitle"><?= $subtitle; ?></p>
            <?php endif ?>
            <?php if ($title): ?>
                <h2 class="leadTeam__title"><?= $title; ?></h2>
            <?php endif ?>


            <div class="swiper">
                <div class="leadTeam__list swiper-wrapper">
                    <?php foreach ($items as $person): ?>
                        <?php getPartial('teamCard', [
                            'person' => $person,
                            'class' => "leadTeam__item swiper-slide"
                        ]) ?>

                    <?php endforeach ?>
                </div>
            </div>


        </div>
    </div>
</section>