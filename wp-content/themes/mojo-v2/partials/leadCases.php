<section class="leadCases">
    <div class="wrapper">
        <div class="leadCases__inside">
            <?php if ($subtitle): ?>
                <p class="leadCases__subtitle"><?= $subtitle ?></p>
            <?php endif; ?>
            <?php if ($title): ?>
                <h2 class="leadCases__title"><?= $title ?></h2>
            <?php endif; ?>
        </div>

    </div>
    <?php if ($casesGallery): ?>
        <div class="featuredCases">
            <div class="wrapper">
                <div class="featuredCases__inside">
                    <div class="featuredCases__left">

                        <?php if ($casesGallery) : ?>
                            <div class="featuredCases__galleryMobile">
                                <?php foreach ($casesGallery as $key => $case) : ?>
                                    <?php getPartial('caseCard', [
                                        'case' => $case,
                                        'mobileOnly' => true
                                    ]); ?>
                                <?php endforeach ?>
                            </div>
                        <?php endif; ?>

                        <?php if ($casesGallery) : ?>
                            <div class="featuredCases__gallery">
                                <?php foreach ($casesGallery as $key => $case) : ?>
                                    <?php
                                    $image = getCustomThumbnail($case->ID, ['featuredCases--big', 'featuredCases--big@2x', 'featuredCases--small', 'featuredCases--small@2x', 'caseCardMobile', 'caseCardMobile@2x']);
                                    ?>
                                    <a href="<?= get_the_permalink($case); ?>" data-hover-target="#featuredVideo-<?= $key ?>" id="featuredImage-<?= $key ?>" class="darkSection featuredCases__galleryItem<?= $key === 0 ? ' featuredCases__galleryItem--big' : '' ?> js-in-view appear-fadeup">
                                        <figure class="featuredCases__galleryItemFigure">
                                            <picture>
                                                <source srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" media="screen and (max-width: 600px)" />
                                                <img src="<?= $image->src[$key === 0 ? 'featuredCases--big' :  'featuredCases--small']; ?>" srcset="<?= $image->src[$key === 0 ? 'featuredCases--big' :  'featuredCases--small']; ?> 1x, <?= $image->src[$key === 0 ? 'featuredCases--big@2x' :  'featuredCases--small@2x']; ?> 2x" alt="<?= $image->alt; ?>" width="294" height="260">
                                            </picture>
                                            <div class="featuredCases__galleryItemHover darkSection">
                                                <span class="btn btn--light btn--mini">
                                                    <?= __('See case', 'mj'); ?>
                                                </span>
                                            </div>
                                        </figure>
                                        <div class="featuredCases__galleryItemContent">
                                            <p class="featuredCases__galleryItemTitle"><?= get_the_title($case); ?></p>
                                        </div>

                                    </a>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                    </div>

                    <div class="featuredCases__right">
                        <div class="featuredCases__circle darkSection js-in-view appear-fade">
                            <svg class="featuredCases__m" width="351" height="215" viewBox="0 0 351 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M342.112 0H301.042L179.518 201.19V15.2469V0H170.763H129.699L0 214.71H59.0391L170.763 29.75V214.71H171.354H179.518H230.388L342.112 29.75V214.71H350.872V15.2469V0H342.112Z" fill="#FAF6ED" />
                            </svg>
                        </div>
                        <div class="featuredCases__starsky"></div>

                        <div class="featuredCases__videos">
                            <?php $combined = array_merge($casesGallery); ?>
                            <?php foreach ($combined  as $key => $case) : ?>
                                <?php
                                $categories = get_the_category($case);
                                $video   = get_field('card_video', $case);
                                $picture = get_field('card_image', $case);

                                $mainPicture = getCustomThumbnail($case->ID, ['featuredVideo', 'featuredVideo@2x']);

                                $sentence = get_field('video_sentence', $case);
                                ?>

                                <div class="featuredCases__video" id="featuredVideo-<?= $key ?>">
                                    <div class="featuredCases__videoWrapper">
                                        <?php if ($video) : ?>
                                            <video
                                                src="<?= $video; ?>"
                                                <?php if (0 && $picture): ?>
                                                poster="<?= $picture['sizes']['featuredVideo']; ?>"
                                                <?php endif ?>
                                                playsinline muted loop>
                                            </video>
                                        <?php elseif ($picture) : ?>
                                            <img
                                                loading="lazy"
                                                src="<?= $picture['sizes']['featuredVideo']; ?>"
                                                srcset="<?= $picture['sizes']['featuredVideo']; ?> 1x, <?= $picture['sizes']['featuredVideo']; ?> 2x"
                                                alt="<?= $picture['alt'] ?>">
                                        <?php elseif ($mainPicture): ?>
                                            <img
                                                loading="lazy"
                                                src="<?= $mainPicture->src['featuredVideo'] ?>"
                                                srcset="<?= $mainPicture->src['featuredVideo'] ?> 1x, <?= $mainPicture->src['featuredVideo@2x'] ?> 2x"
                                                alt="<?= $mainPicture->alt ?>">
                                        <?php endif; ?>
                                    </div>


                                    <div class="featuredCases__videoDescription">

                                        <span class="featuredCases__videoTitle">
                                            <?= get_the_title($case) ?>
                                        </span>

                                        <?php if ($sentence): ?>
                                            <p class="featuredCases__videoText">
                                                <?= $sentence ?>
                                            </p>
                                        <?php endif ?>

                                        <?php if ($categories) : ?>
                                            <ul class="featuredCases__videoCategories">
                                                <?php foreach ($categories as $category) : ?>
                                                    <li class="featuredCases__videoCategory">
                                                        <?= $category->name; ?>
                                                    </li>
                                                <?php endforeach; ?>
                                            </ul>
                                        <?php endif; ?>

                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    <?php endif; ?>

</section>