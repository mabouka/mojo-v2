// Pluton : instancie chaque composant sur les éléments qui portent son sélecteur.
// Les composants ne sont plus dans main.js : chacun est un chunk webpack chargé
// seulement si son sélecteur est présent dans la page.
// PLUTON_SELECTORS ({ fichier: sélecteur }) est généré au build par
// webpack.mix.js à partir du `static get selector()` de chaque composant.
class PlutonClass {

    constructor() {
        this.selectors  = PLUTON_SELECTORS;
        this.classes    = {};   // composants déjà chargés, par nom de fichier
        this.instances  = {};
        this.generation = 0;    // change à chaque clear() : annule un setup en cours
        this.ready      = Promise.resolve();
    }

    clear() {
        this.instances = {};
        this.generation++;
    }

    // Télécharge (sans instancier) les composants présents dans root.
    // Appelé par le Router avant l'affichage de la page suivante.
    load(root) {
        const names = Object.keys(this.selectors)
            .filter(name => (root || document).querySelector(this.selectors[name]));

        return Promise.all(names.map(name => this.loadComponent(name)
            .catch(error => console.error(`Pluton : ${name} non chargé`, error))
        )).then(() => names);
    }

    loadComponent(name) {
        if (!this.classes[name]) {
            this.classes[name] = import(
                /* webpackChunkName: "pluton-[request]" */
                // Sous-dossiers exclus : ce sont des sous-composants importés
                // par leur parent (ex. components/pageClient/), pas des chunks.
                /* webpackExclude: /components[\\/][^\\/]+[\\/]/ */
                `../components/${name}.js`
            ).then(module => module.default, error => {
                // Échec (réseau…) : ne pas garder la promesse rejetée en cache,
                // la prochaine page qui utilise le composant retentera.
                delete this.classes[name];
                throw error;
            });
        }
        return this.classes[name];
    }

    setup(root) {
        const generation = this.generation;

        this.ready = this.load(root).then(async names => {
            for (const name of names) {
                // Absent du cache = échec déjà signalé par load().
                const component = this.classes[name] && await this.classes[name].catch(() => null);
                // Page quittée pendant le téléchargement : ne rien instancier.
                if (generation !== this.generation) return;
                if (component) this.setupComponent(name, component, root);
            }
        });

        return this.ready;
    }

    destroy() {
        for (const [key, value] of Object.entries(this.instances)) {
            value.forEach(component => {
                if( typeof component.destroy === 'function'){
                    component.destroy();
                }
            });
        };
    }

    setupComponent(className, component, root) {
        [].forEach.call((root||document).querySelectorAll(this.selectors[className]), (el) => {
            if (!this.instances[className]) this.instances[className] = [];
            this.instances[className].push(new component(el));
        });
    }

    call(className, fn, parameters) {
        if (!this.instances[className]) return;
        for (var i = this.instances[className].length - 1; i >= 0; i--) {
            this.instances[className][i][fn](parameters);
        }
    }
}

let Pluton = new PlutonClass();

export default Pluton;
