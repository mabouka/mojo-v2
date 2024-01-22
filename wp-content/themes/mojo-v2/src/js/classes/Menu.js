class MenuClass{

    constructor() {

    }

    initialize() {
        this.menu       = document.querySelector('.menu');
        console.log(this.menu);
        this.links      = this.menu.querySelectorAll('.menu__mainItem');
        this.openMenu   = document.querySelectorAll('.openMenu');
        this.closeMenu  = document.querySelector('.closeMenu');

        this.isOpen     = false;

        this.setEvents();
        return this;
    }

    update(data) {
        this.links.forEach(link => {
            if(link.getAttribute('href') === data.next.url.href){
                link.classList.add('menu__mainItem--current');
            }
            else{
                link.classList.remove('menu__mainItem--current');
            }
        });        

        this.openMenu = document.querySelectorAll('.openMenu');
        this.openMenu.forEach((link) => {
            link.addEventListener('click', (e)=>{ this.e_clickopenMenu(e); } , false);
        })
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

    closeQuick() {
        if(!this.isOpen) return;
        document.body.classList.add('menuNoTransition');
        setTimeout(()=> {
            document.body.classList.remove('menuOpen');


        },50)

        setTimeout(()=> {
            document.body.classList.remove('menuNoTransition');

        },200)
        this.isOpen = false;
    }
    
    setEvents() {
        this.openMenu.forEach((link) => {
            link.addEventListener('click', (e)=>{ this.e_clickopenMenu(e); } , false);
        })
        
        this.closeMenu.addEventListener('click', (e)=>{ this.e_clickClose(e); } , false);
    }

    e_clickopenMenu(e) {
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

let Menu = new MenuClass();

export default Menu;