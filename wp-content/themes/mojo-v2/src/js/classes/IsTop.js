class IsTop {
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
            rootMargin: '50% 0% -70% 0%',
            threshold: 0
        };
        this.observer = new IntersectionObserver(this.callback.bind(this) , options);
    }
    

    addView(view) {
        let defaultElements = view.querySelectorAll('.js-is-top');
        defaultElements.forEach(element => {
            this.addElement(element);
        });
    }

    addElement( el ) {
        if(this.hasSupport) this.observer.observe(el);
        else el.classList.add('in-top');
    }

    callback(elements) {

        elements.forEach(element => {
            if (element.isIntersecting) {
                let event = new CustomEvent('inTop',{ 'detail' : element });
                element.target.dispatchEvent( event );

                if(element.target.classList.contains('js-is-top')){
                    element.target.classList.add('in-top');
                }
            }
            else{
                let event = new CustomEvent('outTop',{ 'detail' : element });
                element.target.dispatchEvent( event );
                if(element.target.classList.contains('js-is-top')){
                    element.target.classList.remove('in-top');
                }
            }
        });
    }
}

let instance = new IsTop();

export default instance;