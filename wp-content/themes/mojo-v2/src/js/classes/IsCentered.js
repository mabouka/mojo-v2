class IsCentered {
    constructor() {
        if ('IntersectionObserver' in window) {
            this.hasSupport = true;
            this.initialize();
            this.addView(document);

        } else {
            this.hasSupport = false;
        }
    }

    initialize() {
        let options = {
            rootMargin: '50% 0% -50% 0%',
            threshold: 0
        };
        this.observer = new IntersectionObserver(this.callback.bind(this) , options);
    }
    

    addView(view) {
        let defaultElements = view.querySelectorAll('.js-is-center');
        defaultElements.forEach(element => {
            this.addElement(element);
        });
    }

    addElement( el ) {
        if(this.hasSupport) this.observer.observe(el);
        else el.classList.add('in-center');
    }

    callback(elements) {

        elements.forEach(element => {
            if (element.isIntersecting) {
                let event = new CustomEvent('inCenter',{ 'detail' : element });
                element.target.dispatchEvent( event );

                if(element.target.classList.contains('js-is-center')){
                    element.target.classList.add('in-center');
                }
            }
            else{
                let event = new CustomEvent('outCenter',{ 'detail' : element });
                element.target.dispatchEvent( event );
                if(element.target.classList.contains('js-is-center')){
                    element.target.classList.remove('in-center');
                }
            }
        });
    }
}

let instance = new IsCentered();

export default instance;