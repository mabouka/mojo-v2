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
                        <svg class="caseAccordion__itemArrow" width="11" height="18" viewBox="0 0 11 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7435 9.2601L-9.47719e-05 0.520206C2.49491 8.87949 9.74566 9.24715 10.6507 9.26026C9.74524 9.27337 2.49492 9.64101 0 18L10.7436 9.26043C10.7438 9.26043 10.7439 9.26042 10.7439 9.26042L10.7437 9.2603L10.744 9.26011C10.744 9.26011 10.7438 9.2601 10.7435 9.2601Z" fill="#faf5eb"/>
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