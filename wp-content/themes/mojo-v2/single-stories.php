<?php
global $post;

$categories = get_the_terms($post->ID, 'storyCategory');
$categories = is_array($categories) ? array_slice($categories, 0, 2) : [];
$hero = getCustomThumbnail($post->ID, ['storyHero', 'storyHero@2x']);
$author = function_exists('get_field') ? get_field('author', $post->ID) : '';

$latestStories = new WP_Query([
    'post_type' => 'stories',
    'post_status' => 'publish',
    'posts_per_page' => 3,
    'post__not_in' => [$post->ID],
    'orderby' => 'date',
    'order' => 'DESC',
]);

$permalink = get_permalink($post->ID);
$shareUrl = rawurlencode($permalink);
$shareTitle = rawurlencode(get_the_title($post->ID));
$backToStoriesUrl = get_post_type_archive_link('stories');
?>

<?php get_header(); ?>
<div class="view singlePost" data-barba="container" data-barba-namespace="singlepost">
    <div class="singlePost__shell">
        <div class="wrapper">
            <div class="singlePost__inside">
                <article class="singlePost__article">
                    <header class="singlePost__header">
                        <div class="singlePost__narrow">
                            <h1 class="singlePost__title js-in-view appear-fade"><?= get_the_title($post->ID); ?></h1>
                        </div>

                        <div class="singlePost__meta js-in-view appear-fade appear-delay2 singlePost__narrow<?= !$author ? ' singlePost__meta--twoCol' : ''; ?>">
                            <?php if ($author) : ?>
                                <div class="singlePost__metaItem">
                                    <span class="singlePost__metaLabel"><?= __('Author', 'mj'); ?></span>
                                    <span class="singlePost__metaValue"><?= esc_html($author); ?></span>
                                </div>
                            <?php endif; ?>

                            <div class="singlePost__metaItem">
                                <span class="singlePost__metaLabel"><?= __('Category', 'mj'); ?></span>
                                <span class="singlePost__metaValue singlePost__metaValue--categories">
                                    <?php if ($categories) : ?>
                                        <?php foreach ($categories as $category) : ?>
                                            <span><?= esc_html($category->name); ?></span>
                                        <?php endforeach; ?>
                                    <?php else : ?>
                                        <span><?= __('Uncategorized', 'mj'); ?></span>
                                    <?php endif; ?>
                                </span>
                            </div>

                            <div class="singlePost__metaItem">
                                <span class="singlePost__metaLabel"><?= __('Date', 'mj'); ?></span>
                                <time class="singlePost__metaValue" datetime="<?= esc_attr(get_the_date('c', $post->ID)); ?>"><?= esc_html(get_the_date('d M Y', $post->ID)); ?></time>
                            </div>
                        </div>
                    </header>

                    <?php if ($hero) : ?>
                        <figure class="singlePost__hero js-in-view appear-fade appear-delay3">
                            <img
                                src="<?= esc_url($hero->src['storyHero']); ?>"
                                srcset="<?= esc_url($hero->src['storyHero']); ?> 1x, <?= esc_url($hero->src['storyHero@2x']); ?> 2x"
                                alt="<?= esc_attr($hero->alt ?: get_the_title($post->ID)); ?>"
                                width="1065"
                                height="553">
                        </figure>
                    <?php endif; ?>

                    <div class="singlePost__body  js-in-view appear-fade">

                        <div class="singlePost__content guthContent">
                            <?php the_content(); ?>
                        </div>

                        <div class="singlePost__shareContainer">
                            <aside class="singlePost__share">
                                <p class="singlePost__shareTitle"><?= __('Share', 'mj'); ?></p>
                                <div class="singlePost__shareLinks">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?= $shareUrl; ?>" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?= $shareUrl; ?>" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                    <a href="mailto:?subject=<?= $shareTitle; ?>&body=<?= rawurlencode(get_the_title($post->ID) . "\n\n" . $permalink); ?>">Mail</a>
                                </div>
                            </aside>
                        </div>



                    </div>

                    <?php if ($latestStories->have_posts()) : ?>
                        <section class="singlePost__latest">
                            <h2 class="singlePost__latestTitle"><?= __('Our latest articles', 'mj'); ?></h2>

                            <div class="singlePost__latestGrid">
                                <?php foreach ($latestStories->posts as $story) : ?>
                                    <?php getPartial('storyCard', [
                                        'story' => $story,
                                        'modifier' => 'small',
                                    ]); ?>
                                <?php endforeach; ?>
                            </div>
                        </section>
                    <?php endif; ?>

                    <a class="singlePost__backLink" href="<?= esc_url($backToStoriesUrl); ?>">
                        <span class="singlePost__backIcon" aria-hidden="true">
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-2.29015e-07 5.23926L6.43945 0C4.8992 5.16046 0.336041 5.24001 0.0156248 5.23926C0.336059 5.23852 4.89914 5.31928 6.43945 10.4795L-2.29015e-07 5.23926Z" fill="currentColor" />
                            </svg>
                        </span>
                        <span><?= __('Back to stories', 'mj'); ?></span>
                    </a>
                </article>
            </div>
        </div>
    </div>
</div>
<?php get_footer();
