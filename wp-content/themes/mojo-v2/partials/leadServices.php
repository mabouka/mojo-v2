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
                                        <?php // Même carte que sur l'accueil (homeService.php) : la variante
                                              // « full » affichait au survol toute la liste des sous-services. ?>
                                        <?php getPartial('serviceCard', [
                                            'service' => $service,
                                            // Page d'atterrissage (trafic payant) : cartes sans lien.
                                            'modifier' => "animated serviceCard--nolink"
                                        ]); ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>

                <?php endif; ?>

                <?php if ($cta): ?>
                    <a href="<?= $cta['url'] ?>" class="homeService__link btn btn--light">
                        <?= $cta['title'] ?>
                    </a>
                <?php endif ?>

            </div>
        </div>
    </section>
</div>