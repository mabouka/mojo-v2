<?php 
    $next_post = get_adjacent_post(false, '', true);
    if(!empty($next_post)) :

    $categories = get_the_category($next_post->ID);
    $imageBanner = get_field('banner', $next_post->ID)
?>

<div class="sCaseNext">
<a class="sCaseNext__link" href="<?= get_the_permalink($next_post->ID) ?>">
                <?= get_the_title($next_post->ID); ?>
            </a>
    <div class="wrapper">
        <div class="sCaseNext__inside">


            <p class="sCaseNext__pseudoLink"><?= __('Next project', 'mj'); ?></p>

            <div class="sCaseNext__content">
                <p class="sCaseNext__title"><?= get_the_title($next_post->ID); ?></p>
                <?php if ($categories) : ?>
                <ul class="sCaseNext__categories">
                    <?php foreach ($categories as $category) : ?>
                        <li class="sCaseNext__category">
                            <?= $category->name; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
                <?php endif; ?>
            </div>

            <figure class="sCaseNext__image">
                
            <?php if ($imageBanner): ?>
                <img src="<?= $imageBanner['sizes']['caseLong'] ?>" alt="<?= $imageBanner['alt'] ?>">
            <?php endif; ?>

            </figure>
        </div>
    </div>
</div>

<?php endif; ?>