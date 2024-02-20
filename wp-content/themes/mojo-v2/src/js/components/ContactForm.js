import gsap from "gsap";

export default class Contactform {

    static get selector() {
        return '.contact';
    }

    constructor(el) {
        this.el = el;
        this.svg = this.el.querySelector('.contact__svg');
        this.fields = this.el.querySelectorAll(".wpcf7-validates-as-required");
        this.form   = this.el.querySelector(".wpcf7-form");
        this.captchaFields = this.el.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');

        this.form.removeAttribute("novalidate");

        this.fields.forEach(field => {
            field.setAttribute("required","required");
        });
        
        this.main = gsap.timeline({
            scrollTrigger: {
                trigger: this.el,
                start: "top top",
                end: "bottom",
                scrub: true,

            }
        })
        .to(this.svg, 
            {
                y: () => 700,
                ease: 'none',
                duration:2
            },
            0
        )

        this.setEvents();
    }

    setEvents() {
        window.addEventListener('sendForm', this.e_sendForm.bind(this));
        this.form.addEventListener('submit', this.e_submit.bind(this));
    }
    
    e_sendForm(e) {
        if(e.detail.token) {
            let token = e.detail.token;
            Array.from(this.captchaFields).forEach(field => {
                field.setAttribute("value", token);
            });
            this.form.submit();
        }
    }

    e_submit(e) {
        e.preventDefault();
        grecaptcha.ready(() => {
            grecaptcha.execute(window.recaptchaKey, {action: 'submit'}).then((token) => {
                Array.from(this.captchaFields).forEach(field => {
                    field.setAttribute("value", token);
                });
                console.log(token);
                
                this.form.submit();
            });
        });
    }
}