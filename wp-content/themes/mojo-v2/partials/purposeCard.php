<section class="purposeCard<?= $card['color'] ? ' purposeCard--' . $card['color'] : '' ?><?= $card['lab'] ? ' purposeCard--lab' : '' ?> js-is-top">


    <svg class="purposeCard__star purposeCard__star--tl " width="11" height="11">
        <use xlink:href="#whiteStar"></use>
    </svg>
    <svg class="purposeCard__star purposeCard__star--tr" width="11" height="11">
        <use xlink:href="#whiteStar"></use>
    </svg>
    <svg class="purposeCard__star purposeCard__star--bl" width="11" height="11">
        <use xlink:href="#whiteStar"></use>
    </svg>
    <svg class="purposeCard__star purposeCard__star--br" width="11" height="11">
        <use xlink:href="#whiteStar"></use>
    </svg>

    <h2 class="purposeCard__title">
        <span class="purposeCard__titleLine1"><?= $card['title_line_1']; ?></span>
        <span class="purposeCard__titleLine2"><?= $card['title_line_2']; ?></span>
    </h2>

    <div class="purposeCard__hover">
        <p class="purposeCard__hoverTitle"><?= $card['title_line_1'] . ' ' . $card['title_line_2']; ?></p>
        <div class="purposeCard__hoverText">
            <?= $card['text']; ?>
        </div>
    </div>
</section>