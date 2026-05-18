export default class ServiceHeader {

    static get selector() {
        return '.serviceHeader';
    }

    constructor(el) {
        this.el    = el;
        this.links = this.el.querySelectorAll('.serviceHeader__navItem');
        this.addEvents();
    }

    addEvents() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.e_click(e, link));
        });
    }

    e_click(e, link) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target   = document.querySelector(targetId);
        if (target) {
            window.lenis.scrollTo(target, { duration: 1.2 });
        }
    }
}
