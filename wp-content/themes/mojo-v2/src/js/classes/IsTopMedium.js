class IsTopMedium {
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
            rootMargin: '-25% 0% -75% 0%',
            threshold: 0
        };
        this.observer = new IntersectionObserver(this.callback.bind(this) , options);
    }
    

    addView(view) {
        let defaultElements = view.querySelectorAll('.js-is-top-medium');
        defaultElements.forEach(element => {
            this.addElement(element);
        });
    }

    addElement( el ) {
        if(this.hasSupport) this.observer.observe(el);
        else el.classList.add('in-top-medium');
    }

    callback(elements) {

        elements.forEach(element => {
            if (element.isIntersecting) {
                let event = new CustomEvent('inTopMedium',{ 'detail' : element });
                element.target.dispatchEvent( event );

                if(element.target.classList.contains('js-is-top-medium')){
                    element.target.classList.add('in-top-medium');
                }
            }
            else{
                let event = new CustomEvent('outTopMedium',{ 'detail' : element });
                element.target.dispatchEvent( event );
                if(element.target.classList.contains('js-is-top-medium')){
                    element.target.classList.remove('in-top-medium');
                }
            }
        });
    }
}

let instance = new IsTopMedium();

export default instance;