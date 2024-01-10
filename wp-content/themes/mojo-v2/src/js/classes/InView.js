class InView {
    constructor() {

        this.defaultElements = document.querySelectorAll('.js-in-view');

        if ('IntersectionObserver' in window) {
            let options = {
                rootMargin: '0px',
                threshold: [0.0, 0.1]
            };
            this.hasSupport = true;
            this.observer = new IntersectionObserver(this.callback.bind(this) , options);
        } else {
            this.hasSupport = false;
        }
        this.defaultElements.forEach(element => {
            this.addElement(element);
        });
    }

    callback(elements) {
        elements.forEach(element => {
            if (element.intersectionRatio > 0) {
                let event = new CustomEvent('inView',{ 'detail' : elements });
                element.target.dispatchEvent( event );
                this.observer.unobserve(element.target);

                if(element.target.classList.contains('js-in-view')){
                    element.target.classList.add('in-view');
                }
            }
        });
    }

    addElement( el ) {
        if(this.hasSupport) this.observer.observe(el);
        else el.classList.add('in-view');
    }

}

let instance = new InView();

export default instance;