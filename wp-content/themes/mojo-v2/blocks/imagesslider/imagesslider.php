<?php
/**
 * Slider Block template.
 *
 * @param array $block The block settings and attributes.
 */
    $images = get_field( 'images' );
    $isService = false;
    if (is_singular('services')) {
        global $post;
        $parent = array_reverse(get_post_ancestors($post->ID));
        if($parent) {
            $isService = true;
        }
    }
 ?>

<?php if($images): ?>
<div class="imagesslider<?= $isService ? ' imagesslider--service': '' ?>"">
   <div class="swiper">
      <div class="imagesslider__wrapper swiper-wrapper">
         <?php foreach ($images as $image): ?>
         <figure class="imagesslider__item swiper-slide">
            <picture>
               <source
                  srcset="<?= $image['sizes']['imagessliderMobile'] ?> 1x, <?= $image['sizes']['imagessliderMobile@2x'] ?> 2x" 
                  media="screen and (max-width: 600px)"
               >
               <img 
                  src="<?= $image['sizes']['imagesslider'] ?>" 
                  srcset="<?= $image['sizes']['imagesslider'] ?> 1x, <?= $image['sizes']['imagesslider@2x'] ?> 2x" 
                  width="<?= $image['sizes']['imagesslider-width'] ?>"
                  height="<?= $image['sizes']['imagesslider-height'] ?>"
                  alt="<?= $image['alt'] ?>">
            </picture>
         </figure>
         <?php endforeach ?>
      </div>
   </div>

</div>
<?php endif; ?>