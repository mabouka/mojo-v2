<div class="serviceIntro darkSection">
    <div class="wrapper">
        <div class="serviceIntro__inside">
            <h1 class="serviceIntro__title js-in-view fx-parent">
                <?= splitCharWord($title); ?>
            </h1>
            <?php if($text) : ?>
                <div class="serviceIntro__text js-in-view appear-fadeup appear-delay5">
                    <?= $text; ?>
                </div>
            <?php endif ?>
        </div>
    </div>
</div>