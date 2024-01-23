<?php if ($cases): ?>
<section class="featuredCases">
    <div class="wrapper">
        <div class="featuredCases__inside">
            <div class="featuredCases__left">
                <p class="featuredCases__subtitle js-in-view appear-fade"><?= $subtitle; ?></p>
                <h2 class="featuredCases__title js-in-view appear-fade"><?= $title; ?></h2>

                <?php if ($text) : ?>
                    <div class="featuredCases__text js-in-view appear-fade">
                        <?= $text ?>
                    </div>
                <?php endif; ?>

                <?php if ($cases) : ?>
                    <div class="featuredCases__gallery">
                        <?php foreach ($cases as $key => $case) : ?>
                            <?php
                            $image = getCustomThumbnail($case['case']->ID, ['featuredCases--big', 'featuredCases--big@2x', 'featuredCases--small', 'featuredCases--small@2x']);
                            ?>
                            <a href="<?= get_the_permalink($case['case']); ?>" id="featuredImage-<?= $key ?>" class="darkSection featuredCases__galleryItem<?= $key === 0 ? ' featuredCases__galleryItem--big' : '' ?> js-in-view appear-fadeup">
                                <img src="<?= $image->src[$key === 0 ? 'featuredCases--big' :  'featuredCases--small']; ?>" srcset="<?= $image->src[$key === 0 ? 'featuredCases--big' :  'featuredCases--small']; ?> 1x, <?= $image->src[$key === 0 ? 'featuredCases--big@2x' :  'featuredCases--small@2x']; ?> 2x" alt="<?= $image->alt; ?>" width="294" height="260">
                                <div class="featuredCases__galleryItemHover darkSection">
                                    <span class="btn btn--light btn--mini">
                                        <?= __('See case', 'mj'); ?>
                                    </span>
                                </div>
                            </a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>

                <?php if ($cases) : ?>
                    <ul class="featuredCases__cases darkSection">
                        <?php foreach ($cases as $key => $case) : ?>
                            <li class="featuredCases__case js-in-view appear-fade">
                                <a class="featuredCases__caseLink" href="<?= get_the_permalink($case['case']); ?>" data-hover-target="#featuredVideo-<?= $key ?>" data-image-target="#featuredImage-<?= $key ?>">
                                    <?= get_the_title($case['case']); ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                        <li class="featuredCases__seeAll">
                            <a class="featuredCases__seeAllLink" href="<?= get_post_type_archive_link('case'); ?>">
                                <?= __('See all cases', 'mj'); ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-4.53593e-07 7.10297L-3.18292e-07 10.1983L12.3665 8.78701L-4.53593e-07 7.10297ZM8.35757 0.000186555L19.1011 8.74008L19.1016 8.74009L19.1014 8.74028L19.1015 8.7404L19.1012 8.74041L8.35767 17.48C10.8526 9.12099 18.1029 8.75335 19.0084 8.74024C18.1033 8.72713 10.8526 8.35947 8.35757 0.000186555Z" fill="black" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                <?php endif; ?>
            </div>

            <div class="featuredCases__right">
                <div class="featuredCases__circle darkSection js-in-view appear-fade">
                    <svg class="featuredCases__m" width="351" height="215" viewBox="0 0 351 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M342.112 0H301.042L179.518 201.19V15.2469V0H170.763H129.699L0 214.71H59.0391L170.763 29.75V214.71H171.354H179.518H230.388L342.112 29.75V214.71H350.872V15.2469V0H342.112Z" fill="#FAF6ED" />
                    </svg>
                </div>

                <?php
                getPartial('starSky');
                ?>

                <div class="featuredCases__videos">
                    <?php foreach ($cases as $key => $case) : ?>
                        <div class="featuredCases__video" id="featuredVideo-<?= $key ?>">
                            <div class="featuredCases__videoWrapper">
                                <?php if ($case['video']) : ?>
                                    <video src="<?= $case['video']; ?>" playsinline muted loop></video>
                                <?php else : ?>
                                    <img src="<?= $case['picture']['sizes']['featuredVideo']; ?>" alt="<?= $case['picture']['alt'] ?>">
                                <?php endif; ?>
                            </div>
                            <div class="featuredCases__videoDescription">
                                <span class="featuredCases__videoTitle"><?= get_the_title($case['case']) ?></span>
                                <?php
                                $categories = get_the_category($case['case']);
                                if ($categories) : ?>
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
</section>
<?php endif; ?>