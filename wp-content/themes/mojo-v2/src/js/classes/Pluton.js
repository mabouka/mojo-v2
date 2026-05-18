const components = {
    'ContactForm':          { selector: '.contact',             load: () => import(/* webpackChunkName: "contact-form" */        '../components/ContactForm') },
    'Globe':                { selector: '.globe',               load: () => import(/* webpackChunkName: "globe" */               '../components/Globe') },
    'archiveStoriesFilters':{ selector: '.archiveStories',      load: () => import(/* webpackChunkName: "archive-stories" */     '../components/archiveStoriesFilters') },
    'caseAccordion':        { selector: '.caseAccordion',       load: () => import(/* webpackChunkName: "case-accordion" */      '../components/caseAccordion') },
    'caseCard':             { selector: '.caseCard',            load: () => import(/* webpackChunkName: "case-card" */           '../components/caseCard') },
    'casesGrid':            { selector: '.casesGrid',           load: () => import(/* webpackChunkName: "cases-grid" */         '../components/casesGrid') },
    'casesServices':        { selector: '.casesServices',       load: () => import(/* webpackChunkName: "cases-services" */     '../components/casesServices') },
    'clientHover':          { selector: '.clientHover',         load: () => import(/* webpackChunkName: "client-hover" */       '../components/clientHover') },
    'clientIntro':          { selector: '.clientIntro',         load: () => import(/* webpackChunkName: "client-intro" */       '../components/clientIntro') },
    'clientNumbers':        { selector: '.clientNumbers',       load: () => import(/* webpackChunkName: "client-numbers" */     '../components/clientNumbers') },
    'clientTypology':       { selector: '.clientTypology',      load: () => import(/* webpackChunkName: "client-typology" */    '../components/clientTypology') },
    'commitmentsEarth':     { selector: '.commitmentsEarth',    load: () => import(/* webpackChunkName: "commitments-earth" */  '../components/commitmentsEarth') },
    'commitmentsFaq':       { selector: '.commitmentsFaq',      load: () => import(/* webpackChunkName: "commitments-faq" */   '../components/commitmentsFaq') },
    'commitmentsIntro':     { selector: '.commitmentsIntro',    load: () => import(/* webpackChunkName: "commitments-intro" */ '../components/commitmentsIntro') },
    'cta':                  { selector: '.cta',                 load: () => import(/* webpackChunkName: "cta" */               '../components/cta') },
    'faq':                  { selector: '.faq',                 load: () => import(/* webpackChunkName: "faq" */               '../components/faq') },
    'featuredCases':        { selector: '.featuredCases',       load: () => import(/* webpackChunkName: "featured-cases" */    '../components/featuredCases') },
    'homeIntro':            { selector: '.homeIntro',           load: () => import(/* webpackChunkName: "home-intro" */        '../components/homeIntro') },
    'homePurpose':          { selector: '.homePurpose',         load: () => import(/* webpackChunkName: "home-purpose" */      '../components/homePurpose') },
    'homeService':          { selector: '.homeService',         load: () => import(/* webpackChunkName: "home-service" */      '../components/homeService') },
    'homeTransformation':   { selector: '.homeTransformation',  load: () => import(/* webpackChunkName: "home-transformation" */'../components/homeTransformation') },
    'homeVideo':            { selector: '.homeVideo',           load: () => import(/* webpackChunkName: "home-video" */        '../components/homeVideo') },
    'imagesslider':         { selector: '.imagesslider',        load: () => import(/* webpackChunkName: "images-slider" */     '../components/imagesslider') },
    'leadDescription':      { selector: '.leadDescription',     load: () => import(/* webpackChunkName: "lead-description" */  '../components/leadDescription') },
    'leadLogoCarrousel':    { selector: '.leadLogoCarrousel',   load: () => import(/* webpackChunkName: "lead-logo" */         '../components/leadLogoCarrousel') },
    'leadTeam':             { selector: '.leadTeam',            load: () => import(/* webpackChunkName: "lead-team" */         '../components/leadTeam') },
    'ourClients':           { selector: '.ourClients',          load: () => import(/* webpackChunkName: "our-clients" */       '../components/ourClients') },
    'pageClient':           { selector: '.pageClient',          load: () => import(/* webpackChunkName: "page-client" */       '../components/pageClient') },
    'sCaseRandom':          { selector: '.sCaseRandom',         load: () => import(/* webpackChunkName: "scase-random" */      '../components/sCaseRandom') },
    'serviceCard':          { selector: '.serviceCard',         load: () => import(/* webpackChunkName: "service-card" */      '../components/serviceCard') },
    'serviceGrid':          { selector: '.serviceGrid',         load: () => import(/* webpackChunkName: "service-grid" */      '../components/serviceGrid') },
    'serviceHeader':        { selector: '.serviceHeader',       load: () => import(/* webpackChunkName: "service-header" */    '../components/serviceHeader') },
    'teamGrid':             { selector: '.teamGrid',            load: () => import(/* webpackChunkName: "team-grid" */         '../components/teamGrid') },
    'wpBlockDetails':       { selector: '.wp-block-details',    load: () => import(/* webpackChunkName: "wp-block-details" */  '../components/wp-block-details') },
};

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
        elements.forEach(el => {
            if (!this.instances[name]) this.instances[name] = [];
            this.instances[name].push(new Component(el));
        });
    }

    destroy() {
        for (const [key, value] of Object.entries(this.instances)) {
            value.forEach(component => {
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
        for (var i = this.instances[className].length - 1; i >= 0; i--) {
            this.instances[className][i][fn](parameters);
        }
    }
}

let Pluton = new PlutonClass();

export default Pluton;
