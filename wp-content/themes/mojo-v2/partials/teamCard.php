<?php
$color = get_field('color', $person);
?>

<section class="teamCard<?= $color ? ' teamCard--' . $color : '' ?>">
    <?php if ($photo = getCustomThumbnail($person->ID, ['teamCard', 'teamCard@2x'])) : ?>
        <figure class="teamCard__photo">
            <img src="<?= $photo->src['teamCard']; ?>" srcset="<?= $photo->src['teamCard']; ?> 1x, <?= $photo->src['teamCard@2x'] ?> 2x" alt="<?= $photo->alt ?>">
        </figure>
    <?php endif; ?>
    <div class="teamCard__contentWrapper">

        <div class="teamCard__content">
            <?php if (0): ?>
            <svg class="teamCard__star" id="star21" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" width="1" height="21" fill="#FAF6ED" />
                <rect x="21" y="10" width="1" height="21" transform="rotate(90 21 10)" fill="#FAF6ED" />
                <rect x="17.571" y="2.72192" width="1" height="21" transform="rotate(45 17.571 2.72192)" fill="#FAF6ED" />
                <rect width="1" height="21" transform="matrix(-0.707107 0.707107 0.707107 0.707107 3.42896 2.72192)" fill="#FAF6ED" />
            </svg>
            <?php endif ?>


            <h2 class="teamCard__name"><?= get_the_title($person); ?></h2>
            <p class="teamCard__title"><?= get_field('function', $person); ?></p>
            <div class="teamCard__text">
                <?= $person->post_content; ?>
            </div>
        </div>
    </div>

    <div class="teamCard__info">
        <h2 class="teamCard__infoName"><?= get_the_title($person); ?></h2>
        <p class="teamCard__infoTitle"><?= get_field('function', $person); ?></p>
    </div>
</section>