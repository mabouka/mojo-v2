<div class="serviceChHeader serviceChHeader--<?= get_field("color", $parent) ?>">
    <div class="wrapper">
        <div class="serviceChHeader__inside">
            <a class="serviceChHeader__link" href="<?= get_permalink($parent); ?>">
                <?= __('Back to ', 'mj') . get_the_title($parent); ?>
            </a>

            <a href="#menu" class="header__menu openMenu" title="Menu" data-cursor-stick="">
                <span class="sro">Open menu</span>
                <svg class="header__menuSvg" width="24" height="21" viewBox="0 0 23.984 21.4">
                    <path d="m6.282,6.611C3.097,6.611,1.452,5.177,0,3.913l1.153-1.216c1.399,1.218,2.607,2.27,5.128,2.27s3.732-1.052,5.132-2.27c1.453-1.264,3.099-2.698,6.285-2.698s4.832,1.433,6.285,2.697l-1.153,1.217c-1.401-1.218-2.609-2.27-5.132-2.27s-3.733,1.052-5.133,2.27c-1.453,1.264-3.099,2.698-6.285,2.698Z" fill="#faf6ed" fill-rule="evenodd" stroke-width="0"></path>
                    <path d="m6.281,14.006C3.098,14.006,1.453,12.573.001,11.31l1.151-1.218.002.002c1.399,1.218,2.607,2.27,5.127,2.27s3.732-1.052,5.132-2.271c1.453-1.264,3.099-2.697,6.285-2.697s4.833,1.433,6.285,2.697l-1.152,1.216c-1.4-1.219-2.609-2.27-5.132-2.27s-3.733,1.051-5.133,2.27c-1.453,1.265-3.099,2.698-6.285,2.698Z" fill="#faf6ed" fill-rule="evenodd" stroke-width="0"></path>
                    <path d="m6.282,21.4c-3.184,0-4.83-1.433-6.282-2.698l1.154-1.216c1.398,1.219,2.607,2.271,5.128,2.271s3.732-1.052,5.132-2.27c1.453-1.265,3.099-2.698,6.285-2.698s4.833,1.433,6.285,2.697l-1.152,1.216c-1.4-1.218-2.61-2.27-5.132-2.27s-3.733,1.052-5.133,2.271c-1.453,1.264-3.099,2.697-6.285,2.697Z" fill="#faf6ed" fill-rule="evenodd" stroke-width="0"></path>
                </svg>
            </a>
        </div>
    </div>
</div>