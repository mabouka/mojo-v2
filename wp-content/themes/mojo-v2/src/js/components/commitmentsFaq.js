
export default class CommitmentsFaq {

    static get selector() {
        return '.commitmentsFaq';
    }

    constructor(el) {
        this.el = el;
        this.items = this.getItems();
        this.setEvents();
        this.active(this.items[0]);
    }

    getItems() {
        let items = [];
        let els = this.el.querySelectorAll('.commitmentsFaq__item');
        
        Array.from(els).forEach(element => {
            let item = {};
                item.el = element;
                item.title = element.querySelector('.commitmentsFaq__itemTitle');
                item.text = element.querySelector('.commitmentsFaq__itemText');
                item.wrapper = element.querySelector('.commitmentsFaq__itemWrapper');
                item.isActive = false;
                items.push(item);
        });

        return items;
    }

    toggle(item) {
        if(item.isActive)   this.desactive(item);
        else                this.active(item);
    }

    active(item) {
        if(item.isActive) return;
        this.desactiveAll();
        item.el.classList.add('commitmentsFaq__item--active');
        let textHeight = item.text.offsetHeight;
        item.wrapper.style.maxHeight = textHeight + 'px';

        item.isActive = true;
    }

    desactive(item) {
        if(!item.isActive) return;
        item.el.classList.remove('commitmentsFaq__item--active');
        item.wrapper.style.maxHeight = '';
        item.isActive = false;
    }

    desactiveAll() {
        this.items.forEach(item => {
            this.desactive(item);
        });
    }

    setEvents() {
        this.items.forEach((item, index) =>{
            item.el.addEventListener('click', (e) => { this.e_click(e, item, index)});
        });
    }

    /**
     * Handlers
     */

    e_click(e, item, index) {
        e.preventDefault();
        this.toggle(item);
    }
}