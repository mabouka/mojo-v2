<?php 
    global $post;

    $child_args = array(
        'post_parent' => $parent, // The parent id.
        'post_type'   => 'services',
        'post_status' => 'publish',
        'post__not_in' =>  [$post->ID]
    );
    

    $children = get_children( $child_args );

?>
<div class="serviceChIntro">
    <h2 class="serviceChIntro__title">
        <?= $title ?>
    </h2>

    <?php if ( $children ): ?>
    <div class="serviceChIntro__nav">
    <?php foreach($children as $child): ?>
        <a class="serviceChIntro__navItem" href="<?= get_the_permalink($child); ?>">
            <?= get_the_title($child) ?>
            <svg class="serviceChIntro__navItemArrow" xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.44104 5.24038L0 10.48C1.48665 5.4991 5.78945 5.25069 6.37535 5.2401C5.78945 5.22949 1.48665 4.98092 -4.58091e-07 3.52859e-05L6.44104 5.23982C6.44149 5.23983 6.44171 5.23984 6.44171 5.23984L6.44139 5.2401L6.44171 5.24037C6.44171 5.24037 6.44149 5.24038 6.44104 5.24038Z" fill="#131C23"/>
            </svg>
        </a>
    <?php endforeach; ?>
    </div>
    <?php endif; ?>

</div>