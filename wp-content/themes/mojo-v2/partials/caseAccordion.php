<?php if ($items): ?>
<div class="caseAccordion<?= isset($modifier) ? ' caseAccordion--'. $modifier : '' ?>">
    <?php foreach ($items as $item): ?>
    
    <?php 
        $video = get_field('card_video', $item);
        $imageCard = get_field('card_image', $item);
        $image = getCustomThumbnail($item->ID, ['imagesslider', 'imagesslider@2x']);
    ?>
    <section class="caseAccordion__item<?=  $video ? ' caseAccordion__item--video' : '' ?>">
        <div class="caseAccordion__itemContainer">
            <a class="caseAccordion__itemLink" href="<?= get_the_permalink($item); ?>">
                <?= get_the_title($item); ?>
            </a>
            <div class="caseAccordion__itemContent">
                <div class="wrapper">
                    <div class="caseAccordion__itemInside">
                        <h3 class="caseAccordion__itemTitle"><?= get_the_title($item); ?></h3>

                        <?php
                        $categories = get_the_category($item);
                        if ($categories) : ?>
                            <ul class="caseAccordion__categoryList">
                                <?php foreach ($categories as $category) : ?>
                                    <li class="caseAccordion__categoryItem">
                                        <?= $category->name; ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>

                        <?php 

                            if (isset($modifier) && $modifier === 'commitments'):
                                $terms = get_the_terms( $item, 'purpose' );
                                if($terms):
                        ?>

                        <p class="caseAccordion__purpose caseAccordion__purpose--<?= $terms[0]->slug;  ?>">
                            <?= $terms[0]->name;  ?>
                        </p>
                        <?php 
                            endif; 
                            endif;
                        ?>

                        <svg class="caseAccordion__itemArrow" width="11" height="18">
                            <use xlink:href="#arrowRightSand"></use>
                        </svg>
                        
                    </div>
                </div>
            </div>

        </div>

        <div class="caseAccordion__image">
        <?php if ($video): ?>
            <video preload="auto" playsinline muted  src="<?= $video ?>" poster="<?= $imageCard['sizes']['imagesslider']?>" ></video>
        
        <?php elseif($imageCard): ?>
            <img src="<?= $imageCard['sizes']['imagesslider']?>"
            srcset="<?= $imageCard['sizes']['imagesslider']?> 1x, <?=  $imageCard['sizes']['imagesslider@2x']?> 2x"
                alt="<?= $imageCard['alt'] ?>"
                width="500"
                height="500"
                >
        <?php else: ?>
            <img 
                src="<?= $image->src['imagesslider'] ?>" 
                srcset="<?= $image->src['imagesslider'] ?> 1x, <?= $image->src['imagesslider@2x'] ?> 2x" 
                alt="<?= $image->alt ?>"
                width="500"
                height="500"
                lazyload
            >
        <?php endif ?>
        </figure>


    </section>
    <?php endforeach ?>
</div>
<?php endif ?>