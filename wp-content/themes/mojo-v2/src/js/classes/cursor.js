
export default class Cursor {
    
    constructor() {
        this.isActive = false;
        this.isHidden = false;
        this.build();
        this.setEvents();
    }

    setEvents() {
        if(!this.cursor.isBuild) return;
        document.body.addEventListener('mousemove', (e)=>{ this.e_mouseMove(e)});
        window.addEventListener('dd-scroll', (e)=>{ this.e_scroll(e)});
        window.addEventListener('mouseTitleChange', ()=>{ this.unsnap()});
    }

    build() {
        this.cursor = {};
        this.cursor.el = document.createElement("div");
        this.cursor.el.classList.add('cursor');

        this.cursor.inner = document.createElement("div");
        this.cursor.inner.classList.add('cursor__inner');
        this.cursor.el.appendChild(this.cursor.inner);

        this.cursor.text = document.createElement("span");
        this.cursor.text.classList.add('cursor__text');
        this.cursor.inner.appendChild(this.cursor.text);

        document.body.appendChild(this.cursor.el);
        this.cursor.isBuild = true;
        

    }

    destroy(){

    }

    hide() {
        if(this.isHidden) return;
        if(this.isActive){

            document.body.classList.remove('cursorActive');
            this.cursor.el.classList.remove('cursor--active');
        }
        this.isHidden = true;
    }

    show() {
        if(!this.isHidden) return;
        if(this.isActive){
            document.body.classList.add('cursorActive');
            this.cursor.el.classList.add('cursor--active');
        }
        this.isHidden = false;
    }

    activate() {
        if(this.isHidden) return;
        if(!this.cursor.isBuild) return;
        if(this.isActive) return;
        this.cursor.el.classList.add('cursor--active');
        document.body.classList.add('cursorActive');
        this.isActive = true;
    }

    activateSmall() {
        if(!this.cursor.isBuild) return;
        if(this.isActive) return;
        this.cursor.el.classList.add('cursor--active');
        document.body.classList.add('cursorActive');
        this.isActive = true;
    }

    desactivate() {
        if(!this.isActive) return;
        this.cursor.el.classList.remove('cursor--active');
        document.body.classList.remove('cursorActive');
        this.isActive = false;
    }

    updatePosition(e) {
        this.cursor.el.style.setProperty('--x', Math.round(e.clientX) +'px');
        this.cursor.el.style.setProperty('--y', Math.round(e.clientY) +'px');
    }

    unsnap(){
        this.cursor.el.classList.remove('cursor--hover');
        this.cursor.el.classList.remove('cursor--noblend');
        this.cursor.el.classList.remove('cursor--bigHover');
        this.cursor.el.classList.remove('cursor--mediumHover');
        this.cursor.el.classList.remove('cursor--hugeHover');

        this.cursor.text.innerText = '';
        this.cursor.el.classList.remove('cursor--icon');
        this.cursor.el.removeAttribute('data-icon');
    }

    updateCursor(target) {
        let sensibleEl = this.getSensibleElement(target); 

        let isHovering = sensibleEl != null;
        let isNoBlend  = sensibleEl ? sensibleEl.hasAttribute('data-no-blend') : false ;
        let title = this.getMouseTitle(sensibleEl);
        let icon = this.getMouseIcon(sensibleEl);

        if(sensibleEl && sensibleEl.classList.contains('archiveReel--fullscreen')){
            this.desactivate();
            return;
        }
        else{
            this.activate();
        }

        if(title.length || icon.length) {
            isNoBlend = true;
        }

        if(sensibleEl && sensibleEl.hasAttribute('data-blend')) {
            isNoBlend = false
        };

        if(sensibleEl && sensibleEl.hasAttribute('data-hugeCursor')) this.cursor.el.classList.add('cursor--hugeHover');
        else this.cursor.el.classList.remove('cursor--hugeHover')

        if(sensibleEl && sensibleEl.hasAttribute('data-mediumCursor')) this.cursor.el.classList.add('cursor--mediumHover');
        else this.cursor.el.classList.remove('cursor--mediumHover');

        if(title.length || icon.length || sensibleEl && sensibleEl.hasAttribute('data-bigCursor')) this.cursor.el.classList.add('cursor--bigHover');
        else this.cursor.el.classList.remove('cursor--bigHover');

        if(isHovering) this.cursor.el.classList.add('cursor--hover');
        else this.cursor.el.classList.remove('cursor--hover');

        if(isNoBlend) this.cursor.el.classList.add('cursor--noblend');
        else this.cursor.el.classList.remove('cursor--noblend');

        this.cursor.text.innerText = title;
        if(icon.length){
            this.cursor.el.classList.add('cursor--icon');
            this.cursor.el.setAttribute('data-icon', icon);
        }
        else{
            this.cursor.el.classList.remove('cursor--icon');
            this.cursor.el.removeAttribute('data-icon');
        }
    }

    getSensibleElement(target) {
        if(this.isWpAdminBar && target.closest('#wpadminbar')) return target.closest('#wpadminbar');
        if(target.closest('.videoElement__timeline')) return target.closest('.videoElement__timeline');
        if(target.closest('.archiveReel--fullscreen')) return target.closest('.archiveReel--fullscreen');
        if(target.tagName == 'A') return target;
        if(target.hasAttribute('data-sensible')) return target;
        if(target.closest('[data-sensible]')) return target.closest('[data-sensible]');
        return target.closest('a');
    }

    getMouseTitle(el) {
        if(!el) return '';
        if(!el.dataset.mousetitle) return '';
        return el.dataset.mousetitle;
    }

    getMouseIcon(el) {
        if(!el) return '';
        if(!el.dataset.mouseicon) return '';
        return el.dataset.mouseicon;
    }

    e_mouseMove(e) {
        if(!this.cursor.isBuild) return;
        if(!this.isActive) this.activate();
        this.updatePosition(e);
        this.updateCursor(e.target);
    }

    e_scroll(e) {
        if(!this.cursor.isBuild) return;
        this.unsnap();
    }

}