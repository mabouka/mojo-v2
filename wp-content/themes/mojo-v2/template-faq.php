<?php
/* Template Name: FAQ */

get_header(); ?>

<div data-barba="container" data-barba-namespace="faq">
    <div class="faq">
        <div class="wrapper">
            <div class="faq__banner">
                <h1 class="faq__title js-in-view fx-parent">
                    <?= splitCharWord(get_field('title')); ?>
                </h1>
                <ul class="faq__nav js-in-view appear-fade appear-delay6">
                    <?php foreach (get_field('sections') as $index => $section): ?>
                        <li class="faq__navItem">
                            <a class="faq__navLink" href="#section<?= $index + 1; ?>">
                                <?= $section['title']; ?>
                            </a>
                        </li>
                    <?php endforeach ?>
                </ul>
            </div>
        </div>

    </div>
    <div class="js-in-view appear-fade appear-delay6">

        <?php foreach (get_field('sections') as  $index => $section): ?>
            <?php
            getPartial('commitmentsFaq', [
                'modifier'       => 'faq',
                'id'            => 'section' . ($index + 1),
                'title'         => $section['title'],
                'items'         => $section['items'],
            ]);
            ?>
        <?php endforeach ?>
    </div>

</div>
<?php get_footer();
