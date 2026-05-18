<?php if ($items): ?>
    <div id="littleCards" class="littleCards littleCards--<?= get_field("color") ?><?= $isLight ? ' littleCards--light' : '' ?>">
        <div class="wrapper">
            <div class="littleCards__inside">
                <h2 class="littleCards__title"><?= $title; ?></h2>

                <div class="littleCards__grid">
                    <?php foreach ($items as $item): ?>
                        <?php
                        $grandchildren = get_posts([
                            'post_type'      => $item->post_type,
                            'post_parent'    => $item->ID,
                            'orderby'        => 'menu_order',
                            'order'          => 'ASC',
                            'posts_per_page' => -1,
                            'post_status'    => 'publish',
                        ]);
                        ?>
                        <section class="littleCards__item" id="card-<?= $item->post_name ?>">

                            <div class="littleCards__starRow">
                                <svg class="littleCards__star" width="11" height="11">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="littleCards__star" width="11" height="11">
                                    <use xlink:href="#star"></use>
                                </svg>
                            </div>

                            <div class="littleCards__itemContent">
                                <h3 class="littleCards__itemTitle"><?= $item->post_title ?></h3>

                                <?php if ($grandchildren): ?>
                                    <ul class="littleCards__itemLinks">
                                        <?php foreach ($grandchildren as $gc): ?>
                                            <li><a href="<?= get_permalink($gc->ID) ?>"><?= $gc->post_title ?></a></li>
                                        <?php endforeach ?>
                                    </ul>
                                <?php endif ?>
                            </div>

                            <div class="littleCards__starRow">
                                <svg class="littleCards__star" width="11" height="11">
                                    <use xlink:href="#star"></use>
                                </svg>
                                <svg class="littleCards__star" width="11" height="11">
                                    <use xlink:href="#star"></use>
                                </svg>
                            </div>

                        </section>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
<?php endif ?>