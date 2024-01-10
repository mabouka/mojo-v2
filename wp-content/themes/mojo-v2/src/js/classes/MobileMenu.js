class MobileMenu{

    constructor() {
        this.burger = document.querySelector('.openMenu');
        this.isOpen = document.body.classList.contains('menuOpen');
        this.menu =  document.querySelector('.menu');
        this.closeMenu  = document.querySelector('.closeMenu');
        this.setEvents();
    }
    
    setEvents() {
        this.burger.addEventListener('click', (e)=>{ this.e_clickBurger(e); } , false);
        this.closeMenu.addEventListener('click', (e)=>{ this.e_clickClose(e); } , false);
    }

    toggle() {
        if(!this.isOpen) this.open();
        else this.close();
    }

    open() {
        if(this.isOpen) return;
        document.body.classList.add('menuOpen');
        this.isOpen = true;

        window.lenis.stop();
    }

    close() {
        if(!this.isOpen) return;
        document.body.classList.remove('menuOpen');
        this.isOpen = false;
        window.lenis.start();

    }

    e_clickBurger(e) {
        e.preventDefault();
        this.toggle();
    }


    e_clickClose(e) {
        e.preventDefault();
        this.close();
    }


    e_clickItem(e) {
        this.close();
        this.items.forEach(item => {
            item.classList.remove('active');
        });

        e.target.classList.add('active');
    }
}

export default MobileMenu;