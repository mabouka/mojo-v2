<section class="homeTransformation">
    <div class="wrapper">
        <div class="homeTransformation__inside">

            <h2 class="homeTransformation__title  js-in-view appear-fadeup"><?= $title; ?></h2>
            <div class="homeTransformation__content  js-in-view appear-fadeup">
                <?php if ($text) : ?>
                    <div class="homeTransformation__text">
                        <?= $text ?>
                    </div>
                <?php endif; ?>
                <?php if ($link) : ?>
                    <a class="btn btn--dark" href="<?= $link['url'] ?>">
                        <?= $link['title'] ?>
                    </a>
                <?php endif; ?>
            </div>

            <svg class="homeTransformation__svg" width="837" height="777" viewBox="0 0 837 777" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>

                    <circle id="tr_circle" cx="575.5" cy="668.5" r="92.5" />
                    <path id="tr_path" d="M286.6 553.4C445.1 679 633.2 705.5 706.6 612.6C780 519.7 711.1 342.5 552.6 216.9C394.1 91.3 206.1 64.8 132.6 157.7C59.1 250.5 128.1 427.7 286.6 553.4Z" />
                    <!-- the masks -->
                    <mask id="tr_circleMask">
                        <use xlink:href="#tr_circle" fill="white" />
                    </mask>
                    <mask id="tr_pathMask">
                        <use xlink:href="#tr_path" fill="white" />
                    </mask>
                    <clipPath id="tr_clipPath">
                        <use xlink:href="#tr_path" />
                    </clipPath>
                </defs>

                <use xlink:href="#tr_path" stroke="#131C23" stroke-width="1" clip-path="url(#tr_clipCirle)" />
                <use xlink:href="#tr_circle" fill="#1C6ECF" />

                <g mask="url(#tr_pathMask)" stroke="#FFC833">
                    <rect width="100%" height="100%" stroke="#FFC833" fill="#FFC833" mask="url(#tr_circleMask)" />
                </g>
            </svg>



        </div>
    </div>
</section>