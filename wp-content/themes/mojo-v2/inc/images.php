<?php
add_image_size('social', 1200, 630, true);

add_image_size('featuredCases--big', 625, 350, true);
add_image_size('featuredCases--big@2x', 625 * 2, 350 * 2, true);

add_image_size('featuredCases--small', 294, 260, true);
add_image_size('featuredCases--small@2x', 294 * 2, 260 * 2, true);

add_image_size('featuredVideo', 625, 625, true);
add_image_size('featuredVideo@2x', 625*2, 625*2, true);

add_image_size('logo', 9999, 70, false);
add_image_size('logo@2x', 9999 * 2, 70 * 2, false);

add_image_size('teamCard', 405, 405, true);
add_image_size('teamCard@2x', 405 * 2, 405 * 2, true);

add_image_size('caseCard', 625, 500, true);
add_image_size('caseCard@2x', 625 * 2, 500 * 2, true);

add_image_size('caseCardMobile', 345, 274, true);
add_image_size('caseCardMobile@2x', 345 * 2, 274 * 2, true);

//add_image_size('caseLong', 1440, 440, true);

add_image_size('caseFull', 1920, 720, true);

add_image_size('caseFullMobile', 375, 720, true);
add_image_size('caseFullMobile@2x', 375*2, 720*2, true);

add_image_size('twoImages', 625, 700, true);
add_image_size('twoImages@2x', 625*2, 700*2, true);
add_image_size('twoImagesMobile', 345*2, 387*2, true);

add_image_size('textGallery', 625, 9999, false);
add_image_size('textGallery@2x', 625*2, 9999*2, false);
// mobile : fullImageMobile

add_image_size('fullBlackImage', 9999, 700, false);
add_image_size('fullBlackImageMobile', 9999, 265*2, false);

add_image_size('fullImage', 1920, 9999, false);
add_image_size('fullImageMobile', 375*2, 9999, false);

add_image_size('wrapperImage', 1285, 9999, false);
// mobile : fullImageMobile



add_image_size('imagesslider', 500, 500, true);
add_image_size('imagesslider@2x', 500*2, 500*2, true);
add_image_size('imagessliderMobile', 345, 345, true);
add_image_size('imagessliderMobile@2x', 345*2, 345*2, true);



// Switch to Image Magick
function change_graphic_lib($array)
{
    return array('WP_Image_Editor_GD', 'WP_Image_Editor_Imagick');
}
add_filter('wp_image_editors', 'change_graphic_lib');
