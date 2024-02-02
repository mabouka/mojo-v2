<?php 
    $categories = [
        'cat-sector' => [
            'slug' => 'sector',
            'label' => __('Sectors', 'mj'),
            'terms' => []
        ],
        'cat-territory' => [
            'slug' => 'territory',
            'label' => __('Territories', 'mj'),
            'terms' => []
        ],
        'cat-client' => [
            'slug'  => 'client',
            'label' => __('Clients', 'mj'),
            'terms' => []
        ],
        'cat-service' => [
            'slug'  => 'category',
            'label' => __('Services', 'mj'),
            'terms' => []
        ],
    ];
    foreach ($categories as $key => $category) {
        $categories[$key]['terms'] = get_terms([
            'taxonomy'   => $category['slug'],
            'hide_empty' => true,
        ]);
        /*foreach ($categories[$key]['terms'] as $term) {
            $term->queryCount = countTermInQuery($term);
        }*/
    }

    function countTermInQuery($term) {
        
        $count = 0;
        global $wp_query;
        foreach ($wp_query->posts as $key => $post) {
            if(has_term( $term, $term->taxonomy, $post)) $count++;
        }

        return $count;
    }
    
?>

<div class="casesGrid">
    <div class="wrapper">
        <div class="casesGrid__inside">
            <h1 class="casesGrid__title js-in-view fx-parent">
                <?= splitCharWord($title) ?>
            </h1>
            <form class="casesGrid__form" method="get" action="<?= get_post_type_archive_link('case') ?>">
                <a href="<?= get_post_type_archive_link('case') ?>" class="casesGrid__filterReset<?= !($_GET) ? ' casesGrid__filterReset--active' : '' ?>">
                   <?= __('All', 'mj'); ?>
                </a>
                <?php foreach ( $categories  as $filterName => $category ): ?>
                

                <div class="casesGrid__filter<?= (isset($_GET[$filterName]) && $_GET[$filterName]) ? ' casesGrid__filter--active' : '' ?>"">
                    <label class="casesGrid__filterLabel" for="<?= $filterName ?>">
                        <?= $category['label']  ?>
                        <svg class="casesGrid__filterStar" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.85711 0H7.14282V15H7.85711V0Z" fill="#131C23"/>
                            <path d="M15 7.85736V7.14307H0V7.85736H15Z" fill="#131C23"/>
                            <path class="casesGrid__filterStarDiag" d="M13.0559 2.44942L12.5508 1.94434L1.94419 12.5509L2.44927 13.056L13.0559 2.44942Z" fill="#131C23"/>
                            <path class="casesGrid__filterStarDiag" d="M1.94414 2.44942L2.44921 1.94434L13.0558 12.5509L12.5507 13.056L1.94414 2.44942Z" fill="#131C23"/>
                        </svg>

                    </label>
                    <select multiple class="casesGrid__filterSelect<?= (isset($_GET[$filterName])) ? ' casesGrid__filterSelect--active' : '' ?>" name="<?= $filterName ?>" id="<?= $filterName ?>">
                        <option value="">---</option>
                        <?php foreach ($category['terms'] as $term): ?>
                        <option value="<?= $term->slug ?>"<?= isset($_GET[$filterName]) && $term->slug === $_GET[$filterName] ? ' selected' : '' ?>>
                            <?= $term->name ?> (<?= $term->count ?>)
                        </option>
                        <?php endforeach ?>
                    </select>

                    <div class="casesGrid__dropDown">
                        <?php foreach ($category['terms'] as $term): ?>
                            <?php if(1): ?>
                                <?php $count = countTermInQuery($term);?>
                                <?php if ($count): ?>
                                <a class="casesGrid__dropDownLink" href="#" data-slug="<?= $term->slug ?>">
                                    <span class="casesGrid__dropDownName"><?= $term->name ?> </span>
                                    <span class="casesGrid__dropDownCount"><?= $count ?></span>
                                </a>
                                <?php endif ?>

                            <?php else: ?>
                                <a class="casesGrid__dropDownLink" href="#" data-slug="<?= $term->slug ?>">
                                    <span class="casesGrid__dropDownName"><?= $term->name ?> </span>
                                    <span class="casesGrid__dropDownCount"><?= $term->count ?></span>
                                </a>
                            <?php endif ?>
     
                        <?php endforeach ?>

                    </div>
                </div>

                <?php endforeach ?>

                <button class="btn btn--dark" type="submit">
                    <?= __('Filter', 'mj'); ?>
                </button>
            </form>


            <?php global $wp_query; ?>
            <?php if ($wp_query->have_posts()) : ?>
            <div class="casesGrid__grid">
                <?php foreach ($wp_query->posts as $key => $case) : ?>
                    <?php getPartial('caseCard', [
                        'case' => $case
                    ]); ?>
                <?php endforeach; ?>
            </div>
            <?php else: ?>
            <div class="casesGrid__noItem">
                <h2 class="casesGrid__noItemTitle">
                    <?= __('No case found','mj'); ?>
                </h2>
                <p class="casesGrid__noItemText">
                    <?= __('please try to modify the filters','mj'); ?>
                </p>
            </div>
            <?php endif; ?>
            <?php wp_reset_postdata(); ?>
        </div>
    </div>
</div>