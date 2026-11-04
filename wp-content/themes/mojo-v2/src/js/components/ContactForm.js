import gsap from "gsap";

// reCAPTCHA (~1 Mo, ~1,5 s de calcul sur mobile) n'est chargé qu'au premier
// contact avec le formulaire (focus, clic), ou à l'envoi au plus tard : avant,
// les vues Barba contact / singlelead l'ajoutaient à l'ouverture de la page.
let recaptchaLoading = null;
function loadRecaptcha() {
    if (window.grecaptcha && window.grecaptcha.execute) return Promise.resolve();
    if (!recaptchaLoading) {
        recaptchaLoading = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = window.location.origin + '/recaptcha.php';
            script.async = true;
            script.onload = resolve;
            script.onerror = () => { recaptchaLoading = null; reject(); };
            document.head.appendChild(script);
        });
    }
    return recaptchaLoading;
}

export default class Contactform {

    static get selector() {
        return '.contact';
    }

    constructor(el) {
        this.el = el;
        this.isLead = this.el.classList.contains('contact--lead');


        this.svg = this.el.querySelector('.contact__svg');
        this.fields = this.el.querySelectorAll(".wpcf7-validates-as-required");

        this.radios = this.el.querySelectorAll("input[type='radio']");

        this.fileLabel = this.el.querySelector('.field--file label');
        this.fileInput = this.el.querySelector('.field--file input');

        this.form   = this.el.querySelector(".wpcf7-form");
        /*
        if(this.form && this.isLead){
            let url = this.form.action;
                url = url.includes("#") ? url.substring(0, url.indexOf("#")) : url;
                url += "#contactForm";
            this.form.action = url
        }
        */

        if(this.form && this.isLead && this.form.classList.contains('sent')) {

            setTimeout(() => {
                window.lenis.scrollTo(this.el, { duration: 0 }  );
            }, 200);
        }
        this.captchaFields = this.el.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');

        this.form.removeAttribute("novalidate");

        const filesEl = document.createElement("div");
        filesEl.classList.add('files');
        let container = this.el.querySelector('.field--file .field__label');
        container.appendChild(filesEl);


        this.fields.forEach(field => {
            field.setAttribute("required","required");
        });

        this.radios.forEach(radio => {
            radio.setAttribute("required","required");
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

    showFiles(files) {
        let el = this.el.querySelector('.files');
            el.innerHTML = '';

        Array.from(files).forEach((file, index) => {
            const item = document.createElement("div");
                  item.classList.add('files__item');
                  item.innerText = file.name;

            const removeLink = document.createElement("a");
                  removeLink.classList.add('files__itemRemove');
                  removeLink.innerText = 'Remove file';
                  removeLink.setAttribute("href", "#");

                  item.appendChild(removeLink);
                  removeLink.addEventListener('click', (e) => { this.e_removeFile(e, index); });

                  el.appendChild(item);
        })


    }

    removeFileFromFileList(input, index) {
        const dt = new DataTransfer()
        const files = input.files;
        
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          if (index !== i)
            dt.items.add(file) // here you exclude the file. thus removing it.
        }
        
        input.files = dt.files // Assign the updates list
        
        this.showFiles(input.files);
    }

    setEvents() {
        this._boundSendForm = this.e_sendForm.bind(this);
        this._boundSubmit   = this.e_submit.bind(this);
        this._boundFileChange = this.e_fileChange.bind(this);

        window.removeEventListener('sendForm', this._boundSendForm);
        window.addEventListener('sendForm', this._boundSendForm);

        this.form.addEventListener('submit', this._boundSubmit);
        this.fileInput.addEventListener('change', this._boundFileChange);

        this._boundWarm = () => { loadRecaptcha().catch(() => {}); };
        this.form.addEventListener('focusin', this._boundWarm, { once: true });
        this.form.addEventListener('pointerdown', this._boundWarm, { once: true });
    }

    destroy() {
        window.removeEventListener('sendForm', this._boundSendForm);
        this.form.removeEventListener('submit', this._boundSubmit);
        this.fileInput.removeEventListener('change', this._boundFileChange);
        this.form.removeEventListener('focusin', this._boundWarm);
        this.form.removeEventListener('pointerdown', this._boundWarm);
    }

    e_removeFile(e, index) {
        e.preventDefault();
        this.removeFileFromFileList(this.fileInput, index);
    }

    e_fileChange(e) {
        var files = this.fileInput.files;
        this.showFiles(files);
    }

    e_sendForm(e) {
        if (this._submitting) return;
        if (e.detail.token) {
            let token = e.detail.token;
            Array.from(this.captchaFields).forEach(field => {
                field.setAttribute("value", token);
            });
            this.form.submit();
        }
    }

    e_submit(e) {
        e.preventDefault();
        if (this._submitting) return;
        this._submitting = true;

        const submit = this.form.querySelector('[type="submit"]');
        if (submit) submit.disabled = true;

        const fail = () => {
            this._submitting = false;
            if (submit) submit.disabled = false;
        };

        loadRecaptcha().then(() => grecaptcha.ready(() => {
            grecaptcha.execute(window.recaptchaKey, {action: 'submit'}).then((token) => {
                Array.from(this.captchaFields).forEach(field => {
                    field.setAttribute("value", token);
                });
                this.form.submit();
            }).catch(fail);
        })).catch(fail);
    }
}