// webpack.mix.js
let productionSourceMaps = false;

let mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

let pluton_path = __dirname + '/wp-content/themes/mojo-v2/src/js/components';
if (!mix.inProduction()) {
    mix.bundleAnalyzer();
}

mix
    .options({
        processCssUrls: false
    })

    .js('wp-content/themes/mojo-v2/src/js/main.js', 'dist/js')
    .extract()

    .sass('wp-content/themes/mojo-v2/src/scss/main.scss', 'css/main.css')

    
    .copy('wp-content/themes/mojo-v2/src/images/*', 'wp-content/themes/mojo-v2/dist/images/')
    .copy('wp-content/themes/mojo-v2/src/images/globe/*', 'wp-content/themes/mojo-v2/dist/images/globe/')

    // ACF Blocks CSS pipeline
    // - src/scss/blocks/<block>.scss        -> blocks/<block>/<block>-editor.css (admin/editorStyle)
    // - src/scss/blocks-render/<block>.scss -> blocks/<block>/<block>.css        (front/style)
    // Each block.json declares both `editorStyle` (admin) and `style` (front + admin).
    // The "style" file is loaded on the front too, so it MUST contain the render styles,
    // not the editor-only ones — that distinction is what blocks-render/ exists for.

    // Editor styles (admin-only)
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss', 'css/blocks/twoimages/twoimages-editor.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss', 'css/blocks/quoteimage/quoteimage-editor.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss', 'css/blocks/textimage/textimage-editor.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss', 'css/blocks/textgallery/textgallery-editor.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss', 'css/blocks/fullblackimage/fullblackimage-editor.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss', 'css/blocks/fullimage/fullimage-editor.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss', 'css/blocks/imagesslider/imagesslider-editor.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/wrapperimage.scss', 'css/blocks/wrapperimage/wrapperimage-editor.css')

    // Front/render styles (used by `style` enqueue; loaded on the front and in the editor preview).
    // Each entry compiles a wrapper in src/scss/blocks-build/ that imports vars/mixins/typography
    // + the blocks-render/ partial — needed so @extend and mixin calls resolve standalone.
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/twoimages.scss', 'css/blocks/twoimages/twoimages.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/quoteimage.scss', 'css/blocks/quoteimage/quoteimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/textimage.scss', 'css/blocks/textimage/textimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/textgallery.scss', 'css/blocks/textgallery/textgallery.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/fullblackimage.scss', 'css/blocks/fullblackimage/fullblackimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/fullimage.scss', 'css/blocks/fullimage/fullimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/imagesslider.scss', 'css/blocks/imagesslider/imagesslider.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks-build/wrapperimage.scss', 'css/blocks/wrapperimage/wrapperimage.css')

    // Copy both files (`<block>.css` + `<block>-editor.css`) from dist to the block folder
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/twoimages/*', 'wp-content/themes/mojo-v2/blocks/twoimages/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/quoteimage/*', 'wp-content/themes/mojo-v2/blocks/quoteimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/textimage/*', 'wp-content/themes/mojo-v2/blocks/textimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/textgallery/*', 'wp-content/themes/mojo-v2/blocks/textgallery/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/fullblackimage/*', 'wp-content/themes/mojo-v2/blocks/fullblackimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/fullimage/*', 'wp-content/themes/mojo-v2/blocks/fullimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/imagesslider/*', 'wp-content/themes/mojo-v2/blocks/imagesslider/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/wrapperimage/*', 'wp-content/themes/mojo-v2/blocks/wrapperimage/')

    .copy('wp-content/themes/mojo-v2/src/fonts/*', 'wp-content/themes/mojo-v2/dist/fonts/')
    
    .sourceMaps(productionSourceMaps, 'source-map')
    .setPublicPath('wp-content/themes/mojo-v2/dist');

    
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                PLUTON_PATH: JSON.stringify(pluton_path)
            }),

        ]
    };
});
