<?php
$args = array(
    'post_type' => 'people',
    'posts_per_page' => -1
);
$query = new WP_Query($args);
$people = $query->posts;
?>
<section class="teamGrid">
    <div class="wrapper">
        <div class="teamGrid__inside">
            <h2 class="teamGrid__title">
                <?= __('Our team', 'mj'); ?>
            </h2>

            <div class="teamGrid__grid">
                <?php foreach ($people as $key => $person) : ?>
                    <?php if ($key === 0 && $citation) : ?>
                        <div class="teamCitation">
                            <div class="teamCitation__text">
                                <?= $citation; ?>
                            </div>
                        </div>
                    <?php endif ?>
                    <?php getPartial('teamCard', [
                        'person' => $person
                    ]) ?>

                    <?php if ($key === 6 && $text) : ?>

                        <div class="teamText">
                            <div class="teamText__text">
                                <?= $text; ?>
                            </div>
                        </div>
                    <?php endif ?>
                <?php endforeach ?>
            </div>
        </div>
    </div>
</section>