<?php 
    global $post;
    $child_args = array(
        'post_parent' => $post->ID, // The parent id.
        'post_type'   => 'services',
        'post_status' => 'publish'
    );
    
    $children = get_children( $child_args );
?>

<div class="serviceHeader serviceHeader--<?= get_field("color") ?>">
    <div class="wrapper">
        <div class="serviceHeader__inside">
            <a href="<?= get_post_type_archive_link("services") ?>" class="serviceHeader__back">
                <?= __('Back to Expertises', 'mj'); ?>
            </a>

            <h1 class="serviceHeader__title">
                <?= $title; ?>
            </h1>

            <?php if ( $children ): ?>
            <nav class="serviceHeader__nav">
            <h2 class="sro"><?= __('Sub-pages', 'mj') ?></h2>
            <?php foreach($children as $child): ?>
                <a class="serviceHeader__navItem" href="<?= get_the_permalink($child) ?>"><?= get_the_title($child) ?></a>
            <?php endforeach; ?>
            </nav>
            <?php endif ?>
            <?php if ($svg): ?>
            <img class="serviceHeader__picture" src="<?= $svg['url'] ?>" alt="<?= $svg['alt'] ?>">
            <?php endif ?>

        </div>
    </div>
</div>