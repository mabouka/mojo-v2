<?php
$stories = new WP_Query([
    'post_type' => 'stories',
    'post_status' => 'publish',
    'posts_per_page' => 3,
    'orderby' => 'date',
    'order' => 'DESC',
]);

?>

<?php if ($stories->have_posts()) : ?>
    <section class="homeStory">
        <div class="wrapper">
            <div class="homeStory__inside">
                <h2 class="homeStory__title js-in-view appear-fadeup"><?= __('Stories', 'mj'); ?></h2>

                <div class="homeStory__grid">
                    <?php foreach ($stories->posts as $story) : ?>
                        <?php getPartial('storyCard', [
                            'story' => $story,
                        ]); ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>
