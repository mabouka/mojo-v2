<div class="clientIntro">
    <div class="clientIntro__circles">
        <div class="clientIntro__container">

        <h1 class="sro"><?= $title1 . ' ' . $title2 . ' ' . $title3 ?></h1>

        <svg class="clientIntro__svg" width="1440" height="552" viewBox="0 0 1440 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <circle id="circle1" cx="720" cy="276" r="275"/>
                <circle id="circle2" cx="720" cy="276" r="275" />
                <text id="text1" font-family="Cambon" text-anchor="middle"  font-size="100" x="720" y="202" dy="0">
                    <?= $title1 ?>
                </text>

                <text id="text2" font-family="Cambon" text-anchor="middle"  font-size="100" x="720" y="302" dy="0">
                    <?= $title2 ?>
                </text>

                <text id="text3" font-family="Cambon" text-anchor="middle" font-size="100" x="720" y="402" dy="0">
                    <?= $title3 ?>
                </text>

                
                <mask id="circle1Mask">
                    <use xlink:href="#circle1" stroke="white" stroke-width="1.5" fill="white"/>
                </mask>
                <mask id="circle2Mask">
                    <use xlink:href="#circle2" stroke="white" stroke-width="1.5" fill="white"/>
                </mask>

                <clipPath id="clipCircle" >
                    <use xlink:href="#circle1"/>
                </clipPath>
            </defs>


            <use xlink:href="#circle1" stroke="#131C23"/>
            <use xlink:href="#circle2" stroke="#131C23"/>

            <use xlink:href="#text1" fill="#000"/>
            <use xlink:href="#text2" fill="#000"/>
            <use xlink:href="#text3" fill="#000"/>


            <g mask="url(#circle1Mask)">
                <g mask="url(#circle2Mask)">
                    <rect width="100%" height="100%" fill="#FFC833"></rect>
                    <use xlink:href="#text1" fill="#FFF"/>
                    <use xlink:href="#text2" fill="#FFF"/>
                    <use xlink:href="#text3" fill="#FFF"/>
                </g>
            </g>
        </svg>
        </div>
    </div>

    <div class="clientIntro__second">
        <img class="clientIntro__secondBg" src="<?= getUrl('dist/images/backgroundClient.svg') ?>" alt="">

        <div class="clientIntro__secondCircle">
            <div class="clientIntro__secondText">
                <?= $text1 ?>
            </div>
        </div>

        <div class="clientIntro__secondText2">
            <?= $text2 ?>
        </div>


    </div>


</div>