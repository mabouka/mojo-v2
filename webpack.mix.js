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
    //.copy('wp-content/themes/mojo-v2/src/images/globe/*', 'wp-content/themes/mojo-v2/dist/images/globe/')

    // doing the css of acf blocks and then copy it to the right place
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/twoimages.scss', 'css/blocks/twoimages/twoimages.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/quoteImage.scss', 'css/blocks/quoteimage/quoteimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/textimage.scss', 'css/blocks/textimage/textimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/textgallery.scss', 'css/blocks/textgallery/textgallery.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/fullblackimage.scss', 'css/blocks/fullblackimage/fullblackimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/fullimage.scss', 'css/blocks/fullimage/fullimage.css')
    .sass('wp-content/themes/mojo-v2/src/scss/blocks/imagesslider.scss', 'css/blocks/imagesslider/imagesslider.css')

    .copy('wp-content/themes/mojo-v2/dist/css/blocks/twoimages/*', 'wp-content/themes/mojo-v2/blocks/twoimages/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/quoteimage/*', 'wp-content/themes/mojo-v2/blocks/quoteimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/textimage/*', 'wp-content/themes/mojo-v2/blocks/textimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/fullblackimage/*', 'wp-content/themes/mojo-v2/blocks/fullblackimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/fullimage/*', 'wp-content/themes/mojo-v2/blocks/fullimage/')
    .copy('wp-content/themes/mojo-v2/dist/css/blocks/imagesslider/*', 'wp-content/themes/mojo-v2/blocks/imagesslider/')

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
