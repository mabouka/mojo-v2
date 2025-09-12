<div class="homeService__pin">

    <section class="homeService homeService--lead darkSection">
        <div class="wrapper">
            <div class="homeService__inside">

                <?php if ($title) : ?>
                    <div class="homeService__text js-in-view appear-fade">
                        <?= $title; ?>
                    </div>
                <?php endif; ?>

                <?php if ($items) : ?>
                    <div class="homeService__cardContainer" id="section_to-pin">
                        <div class="homeService__triggerStart"></div>
                        <div class="homeService__triggerEnd"></div>
                        <div class="homeService__groupSlide">
                            <div class="homeService__realSize">
                                <?php foreach ($items as $key => $service) : ?>
                                    <div class="homeService__cardSlide" id="cardSlide-<?= $key ?>">
                                        <?php getPartial('serviceCard', [
                                            'service' => $service,
                                            'modifier' => "full serviceCard--animated serviceCard--nolink"
                                        ]); ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>

                <?php endif; ?>

                <?php if ($cta): ?>
                    <a href="<?= $cta['url'] ?>" class="btn btn--light">
                        <?= $cta['title'] ?>
                    </a>
                <?php endif ?>

            </div>
        </div>
    </section>
</div>