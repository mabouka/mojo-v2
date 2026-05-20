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
    .js('wp-content/themes/mojo-v2/src/js/cookieconsent-config.js', 'dist/js')
    .extract(['gsap', '@barba/core', '@studio-freight/lenis'])

    .sass('wp-content/themes/mojo-v2/src/scss/main.scss', 'css/main.css')

    // CSS splitting — base + per-page bundles
    .sass('wp-content/themes/mojo-v2/src/scss/base.scss',                  'css/base.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-home.scss',             'css/page-home.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-cases.scss',            'css/page-cases.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-single-case.scss',      'css/page-single-case.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-services-archive.scss', 'css/page-services-archive.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-service-parent.scss',   'css/page-service-parent.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-service-child.scss',    'css/page-service-child.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-about.scss',            'css/page-about.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-clients.scss',          'css/page-clients.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-commitments.scss',      'css/page-commitments.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-lead.scss',             'css/page-lead.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-stories.scss',          'css/page-stories.css')
    .sass('wp-content/themes/mojo-v2/src/scss/page-misc.scss',             'css/page-misc.css')

    .copy('wp-content/themes/mojo-v2/src/images/*', 'wp-content/themes/mojo-v2/dist/images/')
    .copy('wp-content/themes/mojo-v2/src/images/globe/*', 'wp-content/themes/mojo-v2/dist/images/globe/')

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
    .copy('node_modules/@qwik.dev/partytown/lib/*', 'wp-content/themes/mojo-v2/dist/~partytown/')
    .copy('node_modules/vanilla-cookieconsent/dist/cookieconsent.css', 'wp-content/themes/mojo-v2/dist/css/cookieconsent.css')
    
    .sourceMaps(productionSourceMaps, 'source-map')
    .setPublicPath('wp-content/themes/mojo-v2/dist');

    
mix.webpackConfig(webpack => {
    return {
        output: {
            publicPath: '/wp-content/themes/mojo-v2/dist/',
            // Named filenames for dynamic (lazy) chunks so URLs are stable across rebuilds.
            // Static entries (main.js, vendor.js, component files) keep their explicit names.
            chunkFilename: 'js/[name].js',
        },

        plugins: [
            new webpack.DefinePlugin({
                PLUTON_PATH: JSON.stringify(pluton_path)
            }),

            // Prepend a CSS chunk pre-fulfillment snippet to manifest.js.
            //
            // Problem: MiniCssExtractPlugin registers every .sass() entry as an initial
            // webpack chunk. The JS entry's __webpack_require__.O waits for ALL initial
            // chunks before running. Since PHP serves CSS via <link> tags (not via webpack's
            // chunk-loading runtime), those CSS chunks are never marked as installed →
            // the entry callback never fires → DOMContentLoaded listener never registers →
            // window.MJ is always undefined.
            //
            // Fix: detect every chunk whose output files are CSS-only (no .js), collect their
            // IDs, and prepend a push() call to manifest.js. Because manifest.js's IIFE calls
            // r.forEach(s.bind(null,0)) on startup, any chunks already in the global array
            // are processed immediately, marking e[id] = 0 for each CSS chunk. The JS entry
            // can then run without waiting.
            {
                apply(compiler) {
                    compiler.hooks.compilation.tap('PreFulfillCssChunks', compilation => {
                        const { Compilation, sources } = compiler.webpack;
                        compilation.hooks.processAssets.tap(
                            {
                                name: 'PreFulfillCssChunks',
                                // SUMMARIZE runs after all assets are emitted so chunk.files is final.
                                stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
                            },
                            assets => {
                                const manifestAsset = Object.keys(assets).find(
                                    name => /(?:^|\/)manifest\.js$/.test(name)
                                );
                                if (!manifestAsset) return;

                                // A CSS-only chunk: has .css output files but no .js output file.
                                const cssChunkIds = [];
                                for (const chunk of compilation.chunks) {
                                    const files = [...chunk.files];
                                    const hasCss = files.some(f => /\.css$/.test(f));
                                    const hasJs  = files.some(f => /\.js$/.test(f));
                                    if (hasCss && !hasJs && chunk.id !== null && chunk.id !== undefined) {
                                        cssChunkIds.push(JSON.stringify(String(chunk.id)));
                                    }
                                }
                                if (!cssChunkIds.length) return;

                                const preFulfill =
                                    `/* pre-fulfill CSS chunks — PHP loads these via <link>, webpack must not wait */\n` +
                                    `(self.webpackChunkmojo_agency=self.webpackChunkmojo_agency||[]).push([[${cssChunkIds.join(',')}],{}]);\n`;

                                assets[manifestAsset] = new sources.ConcatSource(
                                    preFulfill,
                                    assets[manifestAsset]
                                );
                            }
                        );
                    });
                },
            },
        ],
    };
});
