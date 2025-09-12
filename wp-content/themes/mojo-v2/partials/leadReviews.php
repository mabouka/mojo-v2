<section class="leadReviews">
    <div class="wrapper">
        <div class="leadReviews__inside">
            <h2 class="leadReviews__title"><?= $title ?></h2>
            <div class="leadReviews__list">
                <?php foreach ($reviews as $review): ?>
                    <div class="leadReviews__item">
                        <div class="leadReviews__content">
                            <div class="leadReviews__top">
                                <figure class="leadReviews__logo">
                                    <img src="<?= $review['logo']['sizes']['medium'] ?>" alt="<?= $review['logo']['alt'] ?>">
                                </figure>

                                <svg class="leadReviews__quote" width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.768 32.84C7.89067 32.84 6.35467 32.456 5.16 31.688C3.96533 30.92 2.984 29.9387 2.216 28.744C1.36267 27.2933 0.765334 25.8 0.424 24.264C0.168 22.6427 0.0400004 21.32 0.0400004 20.296C0.0400004 16.1147 1.10667 12.3173 3.24 8.904C5.37333 5.49066 8.70133 2.71733 13.224 0.583992L14.376 2.88799C11.7307 3.99733 9.42667 5.74666 7.464 8.13599C5.58667 10.5253 4.648 12.9573 4.648 15.432C4.648 16.456 4.776 17.352 5.032 18.12C6.39733 17.0107 7.976 16.456 9.768 16.456C11.9867 16.456 13.9067 17.1813 15.528 18.632C17.1493 20.0827 17.96 22.088 17.96 24.648C17.96 27.0373 17.1493 29 15.528 30.536C13.9067 32.072 11.9867 32.84 9.768 32.84ZM31.528 32.84C29.6507 32.84 28.1147 32.456 26.92 31.688C25.7253 30.92 24.744 29.9387 23.976 28.744C23.1227 27.2933 22.5253 25.8 22.184 24.264C21.928 22.6427 21.8 21.32 21.8 20.296C21.8 16.1147 22.8667 12.3173 25 8.904C27.1333 5.49066 30.4613 2.71733 34.984 0.583992L36.136 2.88799C33.4907 3.99733 31.1867 5.74666 29.224 8.13599C27.3467 10.5253 26.408 12.9573 26.408 15.432C26.408 16.456 26.536 17.352 26.792 18.12C28.1573 17.0107 29.736 16.456 31.528 16.456C33.7467 16.456 35.6667 17.1813 37.288 18.632C38.9093 20.0827 39.72 22.088 39.72 24.648C39.72 27.0373 38.9093 29 37.288 30.536C35.6667 32.072 33.7467 32.84 31.528 32.84Z" fill="#131C23" />
                                </svg>
                                <div class="leadReviews__header">
                                    <p class="leadReviews__name"><?= $review['name'] ?></p>



                                    <?php if ($review['title']): ?>
                                        <p class="leadReviews__title"><?= $review['title'] ?></p>
                                    <?php endif ?>
                                </div>
                            </div>
                            <div class="leadReviews__text"><?= $review['text'] ?></div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>