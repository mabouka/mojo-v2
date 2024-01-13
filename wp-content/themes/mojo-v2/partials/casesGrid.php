<svg width="0" height="0" style="display:none;">
    <symbol id="star15" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="7.14282" width="0.714286" height="15" fill="#131C23"/>
        <rect x="15" y="7.14307" width="0.714286" height="15" transform="rotate(90 15 7.14307)" fill="#131C23"/>
        <rect x="12.5508" y="1.94434" width="0.714286" height="15" transform="rotate(45 12.5508 1.94434)" fill="#131C23"/>
        <rect width="0.714286" height="15" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2.44922 1.94434)" fill="#131C23"/>
    </symbol>
</svg>

<?php
$the_query = new WP_Query([
    'post_type' => 'case',
    'post_per_page' => -1
]);
?>

<div class="casesGrid">
    <div class="wrapper">
        <div class="casesGrid__inside">
            <div class="casesGrid__filters">
                <a class="casesGrid__seeAll" href=""><?= __('All', 'mj'); ?></a>
                <div class="casesGrid__filter">
                    <a class="casesGrid__filterLink" href="">
                        <?= __('Sectors', 'mj'); ?>
                        <svg  class="casesGrid__filterStar" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.14282" width="0.714286" height="15" fill="#131C23"/>
                            <rect x="15" y="7.14307" width="0.714286" height="15" transform="rotate(90 15 7.14307)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" x="12.5508" y="1.94434" width="0.714286" height="15" transform="rotate(45 12.5508 1.94434)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" width="0.714286" height="15" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2.44922 1.94434)" fill="#131C23"/>
                        </svg>

                    </a>

                </div>

                <div class="casesGrid__filter">
                    <a class="casesGrid__filterLink" href="">
                        <?= __('Territories', 'mj'); ?>
                        <svg  class="casesGrid__filterStar" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.14282" width="0.714286" height="15" fill="#131C23"/>
                            <rect x="15" y="7.14307" width="0.714286" height="15" transform="rotate(90 15 7.14307)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" x="12.5508" y="1.94434" width="0.714286" height="15" transform="rotate(45 12.5508 1.94434)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" width="0.714286" height="15" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2.44922 1.94434)" fill="#131C23"/>
                        </svg>
                    </a>

                </div>

                <div class="casesGrid__filter">
                    <a class="casesGrid__filterLink" href="">
                        <?= __('Clients', 'mj'); ?>
                        <svg  class="casesGrid__filterStar" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.14282" width="0.714286" height="15" fill="#131C23"/>
                            <rect x="15" y="7.14307" width="0.714286" height="15" transform="rotate(90 15 7.14307)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" x="12.5508" y="1.94434" width="0.714286" height="15" transform="rotate(45 12.5508 1.94434)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" width="0.714286" height="15" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2.44922 1.94434)" fill="#131C23"/>
                        </svg>
                    </a>

                </div>

                <div class="casesGrid__filter">
                    <a class="casesGrid__filterLink" href="">
                        <?= __('Services', 'mj'); ?>
                        <svg  class="casesGrid__filterStar" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.14282" width="0.714286" height="15" fill="#131C23"/>
                            <rect x="15" y="7.14307" width="0.714286" height="15" transform="rotate(90 15 7.14307)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" x="12.5508" y="1.94434" width="0.714286" height="15" transform="rotate(45 12.5508 1.94434)" fill="#131C23"/>
                            <rect class="casesGrid__filterStarDiag" width="0.714286" height="15" transform="matrix(-0.707107 0.707107 0.707107 0.707107 2.44922 1.94434)" fill="#131C23"/>
                        </svg>

                    </a>
                </div>
                
            </div>
            <?php if ($the_query->have_posts()) : ?>
            <div class="casesGrid__grid">
                <?php foreach ($the_query->posts as $key => $case) : ?>
                    <?php getPartial('caseCard', [
                        'case' => $case
                    ]); ?>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>

        </div>
    </div>
</div>