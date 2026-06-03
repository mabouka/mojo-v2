// Auto-discovery des composants via webpack require.context.
//
// Convention par défaut : nom de fichier = sélecteur CSS (préfixé d'un point).
//   homeIntro.js        → .homeIntro
//   wp-block-details.js → .wp-block-details
//   caseCard.js         → .caseCard
//
// Quand le nom de fichier diffère du sélecteur, ajouter une entrée dans
// SELECTOR_OVERRIDES ci-dessous (clé = nom de fichier sans .js).
//
// Pour empêcher Pluton d'auto-instancier un composant (ex: déjà instancié
// par un parent — pageClient → Globe), mettre `null` en valeur.
//
// Ajouter un composant → drop le fichier dans /components/, rebuild.
// Supprimer un composant → delete le fichier, rebuild. Pas de touche à Pluton.js.

// Doit refléter le getter `static selector` de chaque composant quand il
// diffère de la convention « .${nomDeFichier} ». Vérifier avec :
//   grep -E "return '\\.[^']+'" components/*.js
const SELECTOR_OVERRIDES = {
    ContactForm:            '.contact',
    Globe:                  null,                              // instancié par pageClient.js
    archiveStoriesFilters:  '.archiveStories__filtersSelect',
    cta:                    '.homeService--lead',
    pageClient:             '.pageclient',                     // lowercase, attention
    serviceCard:            '.serviceCard--animated',
    'wp-block-details':     '.wp-block-details',
};

// require.context — scanné à BUILD TIME par webpack.
// `lazy` = chaque module devient un chunk séparé chargé à la demande (comme avant).
const context = require.context(
    '../components',
    false,           // pas de sous-dossiers
    /\.js$/,         // tous les .js
    'lazy'           // un chunk par composant
);

const components = {};
context.keys().forEach((key) => {
    // key = './homeIntro.js'
    const name = key.replace(/^\.\//, '').replace(/\.js$/, '');
    const selector = name in SELECTOR_OVERRIDES
        ? SELECTOR_OVERRIDES[name]
        : `.${name}`;
    if (selector == null) return; // opt-out explicite

    components[name] = {
        selector,
        load: () => context(key),
    };
});


class PlutonClass {

    constructor() {
        this.loaded = {};
        this.instances = {};
    }

    clear() {
        this.instances = {};
    }

    async setup(root) {
        const promises = [];
        for (const [name, def] of Object.entries(components)) {
            const elements = (root || document).querySelectorAll(def.selector);
            if (elements.length === 0) continue;
            promises.push(this._loadAndSetup(name, def, elements));
        }
        await Promise.all(promises);
        return this;
    }

    async _loadAndSetup(name, def, elements) {
        if (!this.loaded[name]) {
            const module = await def.load();
            this.loaded[name] = module.default;
        }
        const Component = this.loaded[name];
        elements.forEach((el) => {
            if (!this.instances[name]) this.instances[name] = [];
            this.instances[name].push(new Component(el));
        });
    }

    destroy() {
        for (const [, value] of Object.entries(this.instances)) {
            value.forEach((component) => {
                if (typeof component.destroy === 'function') {
                    component.destroy();
                }
            });
        }
    }

    setupComponent(name, root) {
        const def = components[name];
        if (!def) return;
        const elements = (root || document).querySelectorAll(def.selector);
        if (elements.length === 0) return;
        this._loadAndSetup(name, def, elements);
    }

    call(className, fn, parameters) {
        if (!this.instances[className]) return;
        for (let i = this.instances[className].length - 1; i >= 0; i--) {
            this.instances[className][i][fn](parameters);
        }
    }
}

const Pluton = new PlutonClass();

export default Pluton;
