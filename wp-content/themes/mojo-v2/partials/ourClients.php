<section class="ourClients">
    <div class="wrapper">
        <div class="ourClients__inside">
            <div class="ourClients__content">
                <h2 class="ourClients__title js-in-view appear-fade"><?= $title; ?></h2>

                <?php if ($text) : ?>
                    <div class="ourClients__text js-in-view appear-fade">
                        <?= $text; ?>
                    </div>
                <?php endif; ?>
            </div>

            <svg class="ourClients__image js-in-view appear-fade" width="515" height="525" viewBox="0 0 515 525" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M511.611 1H423.421L193.828 373.8H511.611V1Z" stroke="#131C23" />
                <path d="M450.419 208.224C405.92 283.438 333.495 329.608 256.7 321.537C175.151 312.966 111.143 245.614 85.9757 154.831L64.1237 152.534C63.3654 157.444 62.3001 162.199 61.773 167.214C46.2718 314.698 127.211 444.102 242.543 456.224C355.519 468.098 459.377 362.917 478.145 219.967L450.419 208.224Z" fill="#1F5C40" />
                <mask id="mask0_385_8443" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="59" y="154" width="420" height="304">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.8782 154.041C63.6659 155.316 63.4385 156.585 63.2112 157.853C62.658 160.939 62.105 164.023 61.7697 167.213C46.2685 314.697 127.208 444.101 242.54 456.223C355.516 468.097 459.374 362.916 478.141 219.966L450.416 208.224C405.917 283.437 333.491 329.608 256.696 321.536C175.621 313.015 111.883 246.394 86.4146 156.409L63.8782 154.041Z" fill="white" />
                </mask>
                <g mask="url(#mask0_385_8443)">
                    <path d="M511.611 1H423.421L193.828 373.8H511.611V1Z" fill="#9BE8F2" />
                </g>
            </svg>


        </div>
    </div>

    <?php if ($clients): ?>
    
    <div class="ourClients__presentation js-in-view appear-fade">
        <div class="ourClients__container ">
            <?php foreach ($clients as $client) : ?>
                <div class="client ">
                    <div class="client__container">
                        <span class="client__letter"><?= $client['letter'] ?></span>
                        <div class="client__content">
                            <div class="client__text">
                                <?= $client['text'] ?>
                            </div>
                            <p class="client__name"><?= $client['name'] ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="ourClients__containerRight darkSection">
            <a class="btn btn--light" href="<?= get_post_type_archive_link('client'); ?>">
                <?= __('See our clients', 'mj'); ?>
            </a>
        </div>
    </div>
    <?php endif ?>


    <?php if ($logos) : ?>
        <div class="ourClients__carousel js-in-view appear-fade">
            <div class="ourClients__carouselWrapper">
                <?php foreach ($logos as $logo) : ?>
                    <?php if ($logo['url']) : ?>
                        <a class="ourClients__carouselItem" href="<?= $logo['url']; ?>" target="_blank">
                            <img src="<?= $logo['logo']['sizes']['logo'] ?>" width="<?= $logo['logo']['sizes']['logo-width'] ?>" height="<?= $logo['logo']['sizes']['logo-height'] ?>" srcset="<?= $logo['logo']['sizes']['logo'] ?> 1x, <?= $logo['logo']['sizes']['logo@2x'] ?> 2x" alt="<?= $logo['logo']['alt'] ?>">
                        </a>
                    <?php else : ?>
                        <figure class="ourClients__carouselItem">
                            <img src="<?= $logo['logo']['sizes']['logo'] ?>" width="<?= $logo['logo']['sizes']['logo-width'] ?>" height="<?= $logo['logo']['sizes']['logo-height'] ?>" srcset="<?= $logo['logo']['sizes']['logo'] ?> 1x, <?= $logo['logo']['sizes']['logo@2x'] ?> 2x" alt="<?= $logo['logo']['alt'] ?>">
                        </figure>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endif; ?>
</section>