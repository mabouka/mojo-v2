import inview    from "../classes/InView";
import wait      from "../utils/wait";


export default class teamGrid {

    static get selector() {
        return '.teamGrid';
    }

    constructor(el) {
        this.el         = el;
        this.items      = this.el.querySelectorAll('.teamGrid__item');

        wait(800).then(() => {
            this.items.forEach(item => {
                inview.addElement(item)
            });
        })
        
        this.setEvents();
    }

    setEvents() {
        this.items.forEach(item => {
            item.addEventListener('inView', (e) => { this.e_inview(e, item) });
        });
    }

    e_inview(e, item) {
        item.classList.add('teamGrid__item--inview')
    }
}