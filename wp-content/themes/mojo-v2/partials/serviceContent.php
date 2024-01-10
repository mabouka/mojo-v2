<?php if ($content): ?>
<div class="serviceContent">
    <div class="wrapper">
        <div class="serviceContent__inside">
        <?php foreach ($content as $key => $layout): ?>
            <?php getPartial('modules/'.$layout['acf_fc_layout'], $layout) ?>
        <?php endforeach ?>
        </div>
    </div>
</div>
<?php endif ?>
