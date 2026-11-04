import Globe            from "./pageClient/Globe";
import ClientIntro      from "./pageClient/clientIntro";
import ClientNumbers    from "./pageClient/clientNumbers";

export default class PageClient {

    static get selector() {
        return '.pageclient';
    }

    constructor(el) {
        this.el     = el;
        this.intro  = new ClientIntro(this.el.querySelector('.clientIntro'));
        //this.number = new ClientNumbers(this.el.querySelector('.clientNumbers'))
        this.globe  = new Globe(this.el.querySelector('.globe'));
        /*
        this.intro.promise.then(() => {
            setTimeout(() =>{
                window.lenis.resize();

            },)

        })
        */
        // Pas d'écouteur resize : ScrollTrigger se recalcule seul au
        // redimensionnement (positions en fonctions + invalidateOnRefresh).
        // L'ancien refresh() à chaque événement resize recalculait toute la
        // page des dizaines de fois par seconde pendant un redimensionnement.
    }

    // Appelé par Pluton en quittant la page (Barba) : sans ça, le matchMedia
    // et les chargements du globe survivaient à la page.
    // (Les ScrollTriggers de l'intro sont coupés par le Router, ScrollTrigger.killAll.)
    destroy() {
        this.globe.destroy();
    }
}