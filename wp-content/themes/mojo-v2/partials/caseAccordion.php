<?php if ($items): ?>
<div class="caseAccordion<?= isset($modifier) ? ' caseAccordion--'. $modifier : '' ?>">
    <?php foreach ($items as $item): ?>
    <section class="caseAccordion__item">
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
                            <use xlink:href="#arrowRight"></use>
                        </svg>
                        
                    </div>
                </div>
            </div>

        </div>
        <?php if ($imageBanner = get_field('banner', $item)): ?>
            <figure class="caseAccordion__itemImage">
                <img src="<?= $imageBanner['sizes']['caseLong'] ?>" alt="<?= $imageBanner['alt'] ?>">
            </figure>
        <?php else: ?>
            <?php 
                $image = getCustomThumbnail($item->ID, 'caseLong' )
            ?>
            <figure class="caseAccordion__itemImage">
                <img src="<?= $image->src ?>" alt="<?= $image->alt ?>">
            </figure>
        <?php endif; ?>

    </section>
    <?php endforeach ?>
</div>
<?php endif ?>