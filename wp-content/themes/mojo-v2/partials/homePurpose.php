<section class="homePurpose darkSection">
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

    <svg class="homePurpose__svg js-in-view appear-fade" viewBox="0 0 1440 979" style="enable-background:new 0 0 1440 979" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <path id="logo" d="M275.7 700 117.1 961.4V700H52l-169.3 279h77.1l145.8-240.3V979h77.9l145.8-240.3V979h11.4V700h-11.4zM529.3 691c-84.3 0-152.7 64.5-152.7 144S445 979 529.3 979 682 914.5 682 835s-68.4-144-152.7-144zm67.3 185.9c-38.9 64.5-100.5 97.9-137.6 74.8-37.2-23.2-35.8-94.2 3.1-158.6 38.9-64.5 100.5-97.9 137.6-74.8 37.1 23.1 35.8 94.2-3.1 158.6zM1113.1 691c-84.3 0-152.7 64.5-152.7 144s68.4 144 152.7 144c84.3 0 152.7-64.5 152.7-144-.1-79.5-68.4-144-152.7-144zm67.2 185.9c-38.8 64.5-100.5 97.9-137.7 74.8-37.1-23.2-35.8-94.2 3.1-158.6 38.9-64.5 100.5-97.9 137.6-74.8 37.3 23.1 35.9 94.2-3 158.6zM771 765.2h142v63.2c.1 5.4-1 10.8-3.3 15.7-18.7 39.9-53.2 66.8-92.9 66.8-42.1 0-78.4-30.3-96.2-74.4h-11.3c-.1 2.5-.4 4.9-.4 7.5 0 74.5 48.3 135 107.9 135 58.4 0 105.8-58 107.7-130.5V700H811.7L771 765.2z"/>
            <circle id="circle" cx="200" cy="850" r="74" />
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
  
       
       
</section>