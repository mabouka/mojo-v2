<section class="clientHover">
    <div class="wrapper">
        <div class="clientHover__inside">
            <h2 class="clientHover__title"><?= $title; ?></h2>

            <?php if ($clients): ?>
            <div class="clientHover__clients">
            <?php foreach ($clients as $key => $client): ?>
            <div class="client" data-key="<?= $key;?>" >
            
                <div class="client__container">
                    
                    <div class="client__textContainer">
                        <span class="client__letter"><?= $client['letter'] ?></span>
                        <div class="client__content">
                            <div class="client__text">
                                <?= $client['text'] ?>
                            </div>
                            <p class="client__name"><?= $client['name'] ?></p>

                        </div>
                    </div>


                    <?php if ($client['link']): ?>
                    <a class="client__link"href="<?= $client['link']['url'] ?>">
                        <?= $client['link']['title'] ?>

                        <svg class="client__linkArrow" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M-4.53593e-07 7.10297L-3.18292e-07 10.1983L12.3665 8.78701L-4.53593e-07 7.10297ZM8.35742 0.000186555L19.101 8.74008L19.1015 8.74009L19.1012 8.74028L19.1014 8.7404L19.1011 8.74041L8.35751 17.48C10.8524 9.12099 18.1028 8.75335 19.0082 8.74024C18.1031 8.72713 10.8524 8.35944 8.35742 0.000186555Z" fill="#131C23"/>
                        </svg>

                    </a>
                    <?php endif ?>
                    
                </div>
            </div>
            <?php endforeach ?>
            </div>
            <?php endif ?>

        </div>
    </div>

    <?php if($clients): ?>
    <div class="clientHover__images">
        <?php foreach ($clients as $key => $client): ?>
        <?php if ($client['image']): ?>
        <figure class="clientHover__image" data-key="<?= $key; ?>">
            <img src="<?= $client['image']['sizes']['twoImages']; ?>"
                srcset="<?= $client['image']['sizes']['twoImages']; ?> 1x, <?= $client['image']['sizes']['twoImages@2x']; ?> 2x"
                alt="<?= $client['image']['alt'] ?>"
                width="500"
                height="500"
            >
        </figure>
        <?php endif ?>
        <?php endforeach ?>
    </div>
    <?php endif ?>

</section>