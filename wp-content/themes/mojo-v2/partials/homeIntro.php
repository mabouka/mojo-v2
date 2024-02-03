<div class="homeIntro darkSection">

    <img class="homeIntro__stars" src="<?= getUrl('dist/images/homeIntroStars.svg') ?>" width="1277" height="701" alt="">
    <div class="wrapper">
        <div class="homeIntro__inside">
            <?php if($text): ?>
            <h1 class="homeIntro__title fx-parent">
                <?= splitCharWord($text); ?>
            </h1>
            <?php endif; ?>
        </div>
    </div>

    <svg class="homeIntro__shape" width="2560" height="833" fill="none" viewBox="0 0 2560 833" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <path id="poly" d="M1925.1,174.8h-107.4l-279.5,453.8h386.8V174.8z"/>
            <path id="moon" d="M1850.6,427c-54.2,91.6-142.3,147.8-235.8,137.9c-99.3-10.4-177.2-92.4-207.8-202.9l-26.6-2.8
                c-0.9,6-2.2,11.8-2.9,17.9c-18.9,179.5,79.7,337.1,220.1,351.8c137.5,14.5,264-113.6,286.8-287.6L1850.6,427z"/>
            <mask id="moonMask">
                <use xlink:href="#moon" fill="white"/>
            </mask>
            <mask id="polyMask">
                <use xlink:href="#poly" fill="white"/>
            </mask>
            <clipPath id="clipPoly">
                <use xlink:href="#poly"/>
            </clipPath>
        </defs>

        <use xlink:href="#poly" stroke="#FEC5D4" stroke-width="2" clip-path="url(#clipPoly)"/>
        <use xlink:href="#moon" fill="#FF542E"/>
        
        <g mask="url(#polyMask)" stroke="#FEC5D4">
            <rect width="100%" height="100%" stroke="#FEC5D4" fill="#FEC5D4" mask="url(#moonMask)" />
        </g>
    </svg>




</div>