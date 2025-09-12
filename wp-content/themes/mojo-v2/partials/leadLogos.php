    <?php if ($logos) : ?>
        <div class="ourClients__carousel color leadLogoCarrousel js-in-view appear-fade">
            <div class="ourClients__carouselWrapper">
                <?php foreach ($logos as $logo) : ?>
                    <?php if ($logo['url']) : ?>
                        <a class="ourClients__carouselItem" href="<?= $logo['url']; ?>" target="_blank">
                            <img loading="lazy" src="<?= $logo['logo']['sizes']['logo'] ?>" width="<?= $logo['logo']['sizes']['logo-width'] ?>" height="<?= $logo['logo']['sizes']['logo-height'] ?>" srcset="<?= $logo['logo']['sizes']['logo'] ?> 1x, <?= $logo['logo']['sizes']['logo@2x'] ?> 2x" alt="<?= $logo['logo']['alt'] ?>">
                            <span class="sro"><?= $logo['text']; ?></span>
                        </a>
                    <?php else : ?>
                        <figure class="ourClients__carouselItem">
                            <img loading="lazy" src="<?= $logo['logo']['sizes']['logo'] ?>" width="<?= $logo['logo']['sizes']['logo-width'] ?>" height="<?= $logo['logo']['sizes']['logo-height'] ?>" srcset="<?= $logo['logo']['sizes']['logo'] ?> 1x, <?= $logo['logo']['sizes']['logo@2x'] ?> 2x" alt="<?= $logo['logo']['alt'] ?>">
                        </figure>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endif; ?>