<?php
global $wp_query;

$paged = max(1, get_query_var('paged') ?: 1);
$current_category = isset($_GET['storyCategory']) ? sanitize_text_field(wp_unslash($_GET['storyCategory'])) : '';
$stories = $wp_query;
$story_terms = get_terms([
    'taxonomy' => 'storyCategory',
    'hide_empty' => true,
    'orderby' => 'name',
    'order' => 'ASC',
]);


$pagination = paginate_links([
    'base' => trailingslashit(get_post_type_archive_link('stories')) . '%_%',
    'format' => 'page/%#%/',
    'current' => $paged,
    'total' => $stories->max_num_pages,
    'mid_size' => 1,
    'end_size' => 1,
    'prev_text' => __('Prev', 'mj'),
    'next_text' => __('Next', 'mj'),
    'type' => 'array',
    'add_args' => $current_category ? ['storyCategory' => $current_category] : [],
]);

get_header();
?>

<div class="view archiveStories" data-barba="container" data-barba-namespace="archivestories">
    <div class="wrapper">
        <div class="archiveStories__inside">
            <h1 class="archiveStories__title js-in-view appear-fade"><?php _e('Stories', 'mj'); ?></h1>

            <nav class="archiveStories__filters js-in-view appear-fade" aria-label="<?= esc_attr__('Story categories', 'mj'); ?>">
                <h2 class="sro"><?php _e('Story categories', 'mj'); ?></h2>
                <a class="archiveStories__filter<?= !$current_category ? ' archiveStories__filter--current' : ''; ?>" href="<?= esc_url(get_post_type_archive_link('stories')); ?>">
                    <?= __('Show all', 'mj'); ?>
                </a>

                <?php if ($story_terms && !is_wp_error($story_terms)) : ?>
                    <?php foreach ($story_terms as $term) : ?>
                        <a
                            class="archiveStories__filter<?= $current_category === $term->slug ? ' archiveStories__filter--current' : ''; ?>"
                            href="<?= esc_url(add_query_arg('storyCategory', $term->slug, get_post_type_archive_link('stories'))); ?>">
                            <?= esc_html($term->name); ?>
                        </a>
                    <?php endforeach; ?>
                <?php endif; ?>
            </nav>

            <div class="archiveStories__filtersSelect js-in-view appear-fade">
                <h2 class="sro"><?php _e('Story categories', 'mj'); ?></h2>
                <select class="archiveStories__select" aria-label="<?= esc_attr__('Story categories', 'mj'); ?>">
                    <option value="<?= esc_url(get_post_type_archive_link('stories')); ?>"<?= !$current_category ? ' selected' : ''; ?>>
                        <?= __('Show all', 'mj'); ?>
                    </option>
                    <?php if ($story_terms && !is_wp_error($story_terms)) : ?>
                        <?php foreach ($story_terms as $term) : ?>
                            <option
                                value="<?= esc_url(add_query_arg('storyCategory', $term->slug, get_post_type_archive_link('stories'))); ?>"
                                <?= $current_category === $term->slug ? ' selected' : ''; ?>>
                                <?= esc_html($term->name); ?>
                            </option>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </select>
            </div>

            <?php if ($stories->have_posts()) : ?>
                <div class="archiveStories__grid">
                    <?php foreach ($stories->posts as $index => $story) : ?>
                        <?php
                        $cardModifier = $index === 0 ? 'featured' : 'small';
                        $itemModifier = match (true) {
                            $index === 0 => 'featured',
                            $index <= 2  => 'side',
                            default      => '',
                        };
                        ?>
                        <div class="archiveStories__gridItem<?= $itemModifier ? " archiveStories__gridItem--{$itemModifier}" : ''; ?>">
                            <?php getPartial('storyArchiveCard', [
                                'story'    => $story,
                                'modifier' => $cardModifier,
                            ]); ?>
                        </div>
                    <?php endforeach; ?>
                </div>

                <?php if ($pagination) : ?>
                    <nav class="archiveStories__pagination" aria-label="<?= esc_attr__('Pagination', 'mj'); ?>">
                        <?php foreach ($pagination as $item) : ?>
                            <span class="archiveStories__paginationItem"><?= $item; ?></span>
                        <?php endforeach; ?>
                    </nav>
                <?php endif; ?>
            <?php else : ?>
                <p class="archiveStories__empty"><?= __('No stories found.', 'mj'); ?></p>
            <?php endif; ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>