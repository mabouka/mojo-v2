<?php 
global $post;
$sectors = get_the_terms( $post->ID, 'sector' );
?>


<div class="sCaseFeatures">
    <div class="wrapper">
        <div class="sCaseFeatures__inside">

            <?php if ($client): ?>
            <div class="sCaseFeatures__item">
                <p class="sCaseFeatures__itemTitle"><?= __('Client', 'mj'); ?></p>
                <div class="sCaseFeatures__itemContent"><?= $client;?></div>
            </div>
            <?php endif ?>

            <?php if ($sectors): ?>
            <div class="sCaseFeatures__item">
                <p class="sCaseFeatures__itemTitle"><?= __('Sectors', 'mj'); ?></p>
                <ul class="sCaseFeatures__itemList">
                    <?php foreach ($sectors as $key => $sector): ?>
                    <li><?= $sector->name ?></li>
                    <?php endforeach ?>
                    <li></li>
                </ul>
            </div>
            <?php endif ?>

            <?php if ($location): ?>
            <div class="sCaseFeatures__item">
                <p class="sCaseFeatures__itemTitle"><?= __('Country', 'mj'); ?></p>
                <div class="sCaseFeatures__itemContent"><?= $location; ?></div>
            </div>
            <?php endif ?>

            <?php if ($delivrables): ?>
            <div class="sCaseFeatures__item">
                <p class="sCaseFeatures__itemTitle"><?= __('Delivrables', 'mj'); ?></p>
                <div class="sCaseFeatures__itemContent"><?= $delivrables; ?></div>
            </div>
            <?php endif ?>

            <?php if ($link): ?>
            <a class="sCaseFeatures__link" href="<?= $link['link'] ?>">
                <?= $link['label'] ?>
                <svg class="sCaseFeatures__linkArrow" xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99924 5.76052L0.55835 11C2.04425 6.02163 6.3435 5.77104 6.93273 5.76023C6.3435 5.74939 2.04425 5.49863 0.558349 0.520261L6.99924 5.75993C6.99972 5.75994 6.99995 5.75995 6.99995 5.75995L6.99961 5.76023L6.99996 5.76051C6.99996 5.76051 6.99972 5.76051 6.99924 5.76052Z" fill="black"/>
                </svg>
            </a>
            <?php endif ?>

        </div>
    </div>
</div>