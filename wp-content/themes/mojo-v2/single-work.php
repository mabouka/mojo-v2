<?php get_header(); ?>
<div class="view" data-barba="container" data-barba-namespace="singlework">

    <?php  getPartial('workIntro'); ?>
    <?php if($modules = get_field('modules')): ?>
    <div class="workModules">
        <?php foreach($modules as $module): ?>
            <?php getPartial('modules/' . $module['acf_fc_layout'], $module ); ?>
        <?php endforeach; ?>
    </div>
    <?php endif; ?>

    <?php  getPartial('credits'); ?>

    <?php  getPartial('nextWork'); ?>

</div>
<?php get_footer();
