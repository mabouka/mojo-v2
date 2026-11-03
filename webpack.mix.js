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
    // vendor.js = socle commun à toutes les pages. Les autres librairies
    // (swiper, plugins gsap spécifiques…) suivent les chunks des composants.
    // MotionPathPlugin (+ ses utils) ne sert qu'à homeTransformation.
    .extract((module) =>
        /[\\/]node_modules[\\/](gsap|@barba[\\/]core|@studio-freight[\\/]lenis)[\\/]/.test(module.resource || '')
        && !/[\\/]gsap[\\/](MotionPathPlugin|utils[\\/](paths|matrix))\.js$/.test(module.resource))

    // CSS découpé : base.css (toutes pages) + un bundle par type de page.
    // Le bundle de la page est choisi par inc/pageCss.php.
    .sass('wp-content/themes/mojo-v2/src/scss/base.scss', 'css/base.css')

    
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

    
// Cookie consent servi depuis le thème (plus de CDN jsdelivr).
// La version est dans le nom du fichier JS (cache navigateur de 6 mois) et doit
// correspondre à l'import de src/js/cookieconsent-config.js.
{
    const ccVersion = require('vanilla-cookieconsent/package.json').version;
    const ccFile = `cookieconsent-${ccVersion}.esm.js`;
    const ccCss = `cookieconsent-${ccVersion}.css`; // chargée à la demande par le script
    const configSrc = 'wp-content/themes/mojo-v2/src/js/cookieconsent-config.js';
    const config = require('fs').readFileSync(__dirname + '/' + configSrc, 'utf8');
    for (const expected of [`./vendor/${ccFile}`, `../css/${ccCss}`]) {
        if (!config.includes(expected)) {
            throw new Error(`cookieconsent-config.js doit référencer ${expected} (version npm installée)`);
        }
    }
    mix
        .copy('node_modules/vanilla-cookieconsent/dist/cookieconsent.esm.js', `wp-content/themes/mojo-v2/dist/js/vendor/${ccFile}`)
        .copy('node_modules/vanilla-cookieconsent/dist/cookieconsent.css', `wp-content/themes/mojo-v2/dist/css/${ccCss}`)
        .copy(configSrc, 'wp-content/themes/mojo-v2/dist/js/cookieconsent-config.js');
}

// Bundles par page : auto-découverte de src/scss/page-*.scss
require('fs')
    .readdirSync(__dirname + '/wp-content/themes/mojo-v2/src/scss')
    .filter((f) => /^page-.+\.scss$/.test(f))
    .forEach((f) => mix.sass(
        'wp-content/themes/mojo-v2/src/scss/' + f,
        'css/' + f.replace(/\.scss$/, '.css')
    ));

// Pluton : chaque composant est chargé à la demande (chunk séparé) quand son
// sélecteur est présent dans la page. Le sélecteur reste défini à UN seul
// endroit, le `static get selector()` du composant, lu ici au build.
// Seuls les fichiers à la racine de components/ sont des composants ; les
// sous-composants vont dans un sous-dossier (ex. components/pageClient/).
const plutonSelectors = {};
{
    const fs = require('fs');
    const re = /static\s+get\s+selector\s*\(\s*\)\s*\{\s*return\s+(['"])(.+?)\1\s*;?\s*\}/s;
    for (const file of fs.readdirSync(pluton_path).filter((f) => f.endsWith('.js'))) {
        const match = fs.readFileSync(`${pluton_path}/${file}`, 'utf8').match(re);
        if (match) plutonSelectors[file.replace(/\.js$/, '')] = match[2];
    }
}

// Chunks : nom avec hash (cache navigateur de 6 mois). Un chunk que le build ne
// produit plus n'est PAS supprimé tout de suite : une page HTML encore en cache
// (Cloudflare APO, onglet ouvert) charge l'ancien manifest, qui le demande.
// Il est supprimé 30 jours après être devenu obsolète (date notée dans
// dist/js/chunks/obsolete.json, versionné avec dist/).
class PruneObsoleteChunks {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('PruneObsoleteChunks', (compilation) => {
            const fs = require('fs');
            const path = require('path');
            const dir = __dirname + '/wp-content/themes/mojo-v2/dist/js/chunks';
            const ledgerFile = `${dir}/obsolete.json`;
            if (!fs.existsSync(dir)) return;

            const emitted = new Set(Object.keys(compilation.assets).map((a) => path.basename(a)));
            const ledger = fs.existsSync(ledgerFile) ? JSON.parse(fs.readFileSync(ledgerFile, 'utf8')) : {};
            const next = {};
            const now = Date.now();
            const maxAge = 30 * 24 * 3600 * 1000;

            for (const file of fs.readdirSync(dir)) {
                if (file === 'obsolete.json' || emitted.has(file)) continue;
                const since = ledger[file] || now;
                if (now - since > maxAge) fs.unlinkSync(`${dir}/${file}`);
                else next[file] = since;
            }
            fs.writeFileSync(ledgerFile, JSON.stringify(next, null, 2) + '\n');
        });
    }
}

mix.webpackConfig(webpack => {
    return {
        output: {
            // URL de chargement des chunks (identique en local et en prod).
            publicPath: '/wp-content/themes/mojo-v2/dist/',
            chunkFilename: 'js/chunks/[name].[contenthash:8].js',
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    // Librairies partagées par plusieurs composants (swiper…) :
                    // un seul chunk commun au lieu d'une copie par composant.
                    lazyVendor: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'async',
                        minChunks: 2,
                        name: 'lazy-vendor',
                        enforce: true,
                    },
                    // Idem pour notre propre code partagé (utils/marquee…).
                    lazyShared: {
                        test: /[\\/]src[\\/]js[\\/]/,
                        chunks: 'async',
                        minChunks: 2,
                        name: 'lazy-shared',
                        enforce: true,
                    },
                },
            },
        },
        plugins: [
            new PruneObsoleteChunks(),
            new webpack.DefinePlugin({
                PLUTON_SELECTORS: JSON.stringify(plutonSelectors),
            }),

        ]
    };
});
