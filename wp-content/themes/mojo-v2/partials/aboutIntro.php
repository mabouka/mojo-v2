<div class="aboutIntro js-in-view">
    <div class="wrapper">
        <div class="aboutIntro__inside">
            <h1 class="aboutIntro__title fx-parent js-in-view">
                <?= splitCharWord($title); ?>
            </h1>

            <div class="aboutIntro__content js-in-view appear-fadeup appear-delay4">
                <?php if ($text) : ?>
                    <div class="aboutIntro__text">
                        <?= $text; ?>
                    </div>
                <?php endif ?>

                <?php if ($link) : ?>
                    <a href="<?= $link['url'] ?>" class="btn btn--dark">
                        <?= $link['title'] ?>
                    </a>
                <?php endif ?>
            </div>
        </div>
    </div>
</div>