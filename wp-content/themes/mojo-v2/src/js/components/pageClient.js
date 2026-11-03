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
        this.setEvents();
    }

    // Appelé par Pluton en quittant la page (Barba) : sans ça, l'écouteur
    // resize et le matchMedia du globe survivaient à la page.
    destroy() {
        window.removeEventListener("resize", this.onResize);
        this.globe.destroy();
    }

    setEvents() {
        this.onResize = this.e_resize.bind(this);
        window.addEventListener("resize", this.onResize);
    }


    e_resize(e) {
        this.intro.e_resize();
        //this.number.e_resize();
        this.globe.e_resize();
    }
}