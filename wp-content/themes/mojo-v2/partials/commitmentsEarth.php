<section class="commitmentsEarth darkSection">
    <img class="commitmentsEarth__svg" src="<?= getUrl('dist/images/star-illustration2.svg'); ?>" width="1398" height="991" alt="">

    <div class="commitmentsEarth__planets">
        <div class="commitmentsEarth__planet commitmentsEarth__planet--left">
            <picture>
                <source srcset="<?= $image['sizes']['fullImageMobile']; ?>">
                <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>" width="750" height="750">
            </picture>
        </div>
        <div class="commitmentsEarth__planet commitmentsEarth__planet--main">
            <h2 class="commitmentsEarth__planetTitle">
                <?= $title; ?>
            </h2>
        </div>
        <div class="commitmentsEarth__planet commitmentsEarth__planet--right">
            <picture>
                <source srcset="<?= $image['sizes']['fullImageMobile']; ?>">
                <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>" width="750" height="750">
            </picture>        
        </div>      
    </div>

    <div class="wrapper">
        <div class="commitmentsEarth__inside">
            <div class="commitmentsEarth__text commitmentsEarth__text--left">
                <?= $textLeft?>
            </div>
            <div class="commitmentsEarth__text commitmentsEarth__text--right">
                <?= $textRight?>
            </div>
        </div>
    </div>
</section>