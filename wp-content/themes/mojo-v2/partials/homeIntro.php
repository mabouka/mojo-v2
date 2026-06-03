<div class="homeIntro darkSection">


    <div class="wrapper">
        <div class="homeIntro__inside">
            <?php if ($text): ?>
            <?php // Hero h1 = élément LCP. Pas de splitCharWord ni `.fx-parent` :
                  // les ~30 spans `.fx-letter` créaient chacun une couche composite
                  // (will-change, backface-visibility, transform-style: preserve-3d)
                  // qui ajoutaient ~290 ms de render delay au LCP. Rendu en texte
                  // brut, le navigateur peint en une seule passe. ?>
            <h1 class="homeIntro__title"><?= $text; ?></h1>
            <?php endif ?>
        </div>
    </div>





</div>