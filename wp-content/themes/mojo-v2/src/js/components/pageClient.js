import Globe            from "./Globe";
import ClientIntro      from "./clientIntro";
import ClientNumbers    from "./clientNumbers";

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

    destroy() {
        
    } 

    setEvents() {
        window.addEventListener("resize", this.e_resize.bind(this));
    }


    e_resize(e) {
        this.intro.e_resize();
        //this.number.e_resize();
        this.globe.e_resize();
    }
}