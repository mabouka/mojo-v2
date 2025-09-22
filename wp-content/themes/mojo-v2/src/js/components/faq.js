export default class Faq {

    static get selector() {
        return '.faq';
    }

    constructor(el) {
        this.el         = el;
        this.links =    this.el.querySelectorAll('.faq__navLink');

        this.addEvents();
    }

    addEvents() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => { this.e_click(e, link) });
        });
    }

    e_click(e, link) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.lenis.scrollTo(targetElement, { duration: 1}  );
        }
    }
}