<div class="commitmentsIntro">
    <div class="wrapper">
        <div class="commitmentsIntro__inside">


            <div class="commitmentsIntro__content">
                <?php if ($intro): ?>
                <div class="commitmentsIntro__intro inview">
                    <?= $intro; ?>
                </div>
                <?php endif ?>

                <?php if ($text): ?>
                <div class="commitmentsIntro__text inview">
                    <?= $text; ?>
                </div>
                <?php endif ?>
            </div>
            <h1 class="sro"><?= $title1 . ' ' . $title2; ?></h1>
            <span class="commitmentsIntro__titleLine1"><?= $title1; ?></span>
            <span class="commitmentsIntro__titleLine2"><?= $title2; ?></span>
 
            <svg class="commitmentsIntro__svg" width="606" height="701" fill="none" viewBox="0 0 606 701" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <!-- define the shapes in the image, which we will use for the outlines
                        and for creating intersection masks -->
                    <rect   id="rect" x="-26" y="234" width="632" height="467" fill="#FAF6ED"/>
                    <circle id="circle" cx="266.5" cy="267.5" r="267.5" transform="matrix(-1 0 0 1 534 0)" fill="#FEC5D4"/>
                    <path   id="path" d="M604 134H495.491L213 594H604V134Z" stroke="#131C23"/>

                    <!-- the masks -->
                    <mask id="circleMask">
                        <use xlink:href="#circle" fill="white"/>
                    </mask>
                    <mask id="pathMask">
                        <use xlink:href="#path" fill="white"/>
                    </mask>
                    <clipPath id="clipPoly">
                        <use xlink:href="#path"/>
                    </clipPath>
                </defs>


                <use xlink:href="#rect" fill="#FAF6ED"/>
                <use xlink:href="#circle" fill="#FEC5D4"/>
                <use xlink:href="#path" stroke="#131C23" stroke-width="1"  clip-path="url(#clipPoly)" />
                
                <g mask="url(#pathMask)" stroke="#FF542E">
                        <rect width="100%" height="100%" stroke="#FF542E" fill="#FF542E" mask="url(#circleMask)" />
                </g>
            </svg>

        </div>
    </div>
</div>