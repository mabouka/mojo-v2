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
        processCssUrls: false,
        postCss: [
            require('autoprefixer'),
            require('cssnano')({
                preset: ['default', {
                    discardComments: {
                        removeAll: true,
                    },
                    normalizeWhitespace: true,
                    minifySelectors: true,
                    minifyFontValues: true,
                    convertValues: true
                }]
            })
        ]
    })

    .js('wp-content/themes/mojo-v2/src/js/main.js', 'dist/js')
    .extract()
    .version()

    // Main Sass compilation with optimization
    .sass('wp-content/themes/mojo-v2/src/scss/main.scss', 'css/main.css')
    .options({
        sassOptions: {
            outputStyle: 'compressed',
            precision: 6,
            includePaths: [
                'wp-content/themes/mojo-v2/src/scss'
            ]
        },
        postCss: [
            require('autoprefixer')({
                overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
                grid: true
            }),
            require('cssnano')({
                preset: ['default', {
                    discardComments: {
                        removeAll: true,
                    },
                    normalizeWhitespace: true,
                    minifySelectors: true,
                    reduceIdents: false, // Keep keyframe names
                    zindex: false // Don't optimize z-index values
                }]
            })
        ]
    })

    // Critical CSS compilation
    .sass('wp-content/themes/mojo-v2/src/scss/critical.scss', 'css/critical.css')
    .options({
        sassOptions: {
            outputStyle: 'compressed',
            precision: 6
        },
        postCss: [
            require('autoprefixer'),
            require('cssnano')({
                preset: ['default', {
                    discardComments: {
                        removeAll: true,
                    }
                }]
            })
        ]
    })

    
    .copy('wp-content/themes/mojo-v2/src/images/*', 'wp-content/themes/mojo-v2/dist/images/')
    .copy('wp-content/themes/mojo-v2/src/images/globe/*', 'wp-content/themes/mojo-v2/dist/images/globe/')

    // ACF blocks CSS with individual optimization
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

if (mix.inProduction()) {
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ['console.log', 'console.info', 'console.debug']
                },
                mangle: {
                    safari10: true
                }
            },
        },
    });
}
    
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                PLUTON_PATH: JSON.stringify(pluton_path)
            }),
        ],
        resolve: {
            alias: {
                '@scss': path.resolve(__dirname, 'wp-content/themes/mojo-v2/src/scss'),
                '@js': path.resolve(__dirname, 'wp-content/themes/mojo-v2/src/js'),
                '@images': path.resolve(__dirname, 'wp-content/themes/mojo-v2/src/images')
            }
        }
    };
});
