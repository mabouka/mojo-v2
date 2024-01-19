<section class="homePurpose js-in-view">
    <div class="wrapper">
        <div class="homePurpose__inside">
            <h2 class="homePurpose__title js-in-view appear-fade">
                <?= $title; ?>
            </h2>

            <div class="homePurpose__text js-in-view appear-fade appear-delay2">
                <?= $text; ?>

                <?php if($button): ?>
                <a class="btn btn--light" href="<?=$button['url']?>">
                    <?=$button['title']?>
                </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="homePurpose__svgWrapper">
        <svg class="homePurpose__svg" id="purposeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5000 5000">
            <defs>
                <g id="purposeSvg_circleWrapper">
                    <circle id="purposeSvg_circle" cx="0" cy="0" r="18" />
                </g>
                <g id="purposeSvg_logo">
                    <path d="M302.57,4721h-53.61l-158.63,261.43v-261.43H25.3l-169.3,279h77.07l145.84-240.34v240.34h77.83l145.84-240.34v240.34h11.43v-279h-11.43Z" stroke-width="0"/>
                    <path d="M349.93,4856c0-79.53,68.35-144,152.67-144s152.66,64.48,152.66,144-68.35,144-152.66,144-152.67-64.47-152.67-144ZM432.24,4972.72c37.17,23.15,98.8-10.33,137.65-74.79,38.85-64.46,40.23-135.49,3.06-158.65-37.17-23.15-98.79,10.34-137.64,74.8-38.86,64.46-40.23,135.48-3.07,158.64Z" fill-rule="evenodd" stroke-width="0"/>
                    <path d="M933.66,4856c0-79.53,68.36-144,152.67-144s152.67,64.48,152.67,144-68.35,144-152.67,144-152.67-64.47-152.67-144ZM1015.97,4972.72c37.17,23.15,98.8-10.33,137.65-74.79,38.86-64.46,40.23-135.49,3.07-158.65-37.17-23.15-98.79,10.34-137.65,74.8-38.86,64.46-40.22,135.48-3.07,158.64Z" fill-rule="evenodd" stroke-width="0"/>
                    <path d="M784.98,4721l-40.67,65.22h141.92v63.16c.07,5.42-1.04,10.78-3.28,15.73-18.69,39.93-53.21,66.82-92.88,66.82-42.12,0-78.43-30.3-96.16-74.36h-11.29c-.12,2.49-.41,4.93-.41,7.46,0,74.54,48.29,134.97,107.86,134.97s105.76-58.03,107.67-130.47v-148.53h-112.76Z" stroke-width="0"/>

                </g>

                <!-- the masks -->
                <mask id="purposeSvg_circleMask">
                    <use xlink:href="#purposeSvg_circleWrapper" fill="white" />
                </mask>
                <mask id="purposeSvg_logoMask">
                    <use xlink:href="#purposeSvg_logo" fill="white" />
                </mask>

                <clipPath id="purposeSvg_clipPath">
                    <use xlink:href="#tr_path" />
                </clipPath>
            </defs>

            <use xlink:href="#purposeSvg_circleWrapper" fill="#784FE0" />
            <use xlink:href="#purposeSvg_logo" fill="#000" />

            <g mask="url(#purposeSvg_circleMask)">
                <rect width="100%" height="100%" fill="#FFC833" mask="url(#purposeSvg_logoMask)" />
            </g>

            <rect id="purposeSensible" x="0" y="4650" width="1300" height="350" fill="none"/>

        </svg>
    </div>


    <?php if (0): ?>
    <svg class="homePurpose__svg js-in-view appear-fade" viewBox="0 0 1440 979" style="enable-background:new 0 0 1440 979" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <path id="logo" d="M275.7 700 117.1 961.4V700H52l-169.3 279h77.1l145.8-240.3V979h77.9l145.8-240.3V979h11.4V700h-11.4zM529.3 691c-84.3 0-152.7 64.5-152.7 144S445 979 529.3 979 682 914.5 682 835s-68.4-144-152.7-144zm67.3 185.9c-38.9 64.5-100.5 97.9-137.6 74.8-37.2-23.2-35.8-94.2 3.1-158.6 38.9-64.5 100.5-97.9 137.6-74.8 37.1 23.1 35.8 94.2-3.1 158.6zM1113.1 691c-84.3 0-152.7 64.5-152.7 144s68.4 144 152.7 144c84.3 0 152.7-64.5 152.7-144-.1-79.5-68.4-144-152.7-144zm67.2 185.9c-38.8 64.5-100.5 97.9-137.7 74.8-37.1-23.2-35.8-94.2 3.1-158.6 38.9-64.5 100.5-97.9 137.6-74.8 37.3 23.1 35.9 94.2-3 158.6zM771 765.2h142v63.2c.1 5.4-1 10.8-3.3 15.7-18.7 39.9-53.2 66.8-92.9 66.8-42.1 0-78.4-30.3-96.2-74.4h-11.3c-.1 2.5-.4 4.9-.4 7.5 0 74.5 48.3 135 107.9 135 58.4 0 105.8-58 107.7-130.5V700H811.7L771 765.2z"/>
            <mask id="logoMask">
                <!-- square with triangle cut out of it -->
                <use xlink:href="#logo" fill="white"/>
            </mask>
            <mask id="circleMask">
                <!-- square with triangle cut out of it -->
                <use xlink:href="#circle" fill="white"/>
            </mask>
        </defs>
  
        <use xlink:href="#circle" fill="#ffc833"/>
        <use xlink:href="#logo" fill="#000"/>
  
        <g mask="url(#logoMask)">
                <rect width="100%" height="100%" fill="#784fe0"  mask="url(#circleMask)" />
        </g>
    </svg>
    <?php endif ?>

  
       
       
</section>