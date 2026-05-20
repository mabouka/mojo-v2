<div class="homeVideo">
    <div class="wrapper">
        <div class="homeVideo__inside">
            <p class="homeVideo__text">
                <?= $text; ?>
            </p>
        </div>
    </div>
    <stream class="homeVideo__video" src="<?= $url ?>" loop autoplay playsinline muted <?= $poster ? 'poster="' . $poster['url'] . '"' : '' ?>></stream>
    <script data-cfasync="false" defer src="https://embed.cloudflarestream.com/embed/sdk.latest.js"></script>
    <div class="homeVideo__noise"></div>
</div>
