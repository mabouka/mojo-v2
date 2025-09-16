import gsap from "gsap";

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
        console.log(this.radios);

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
            }, 500);
        }
        this.captchaFields = this.el.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');

        this.form.removeAttribute("novalidate");

        const filesEl = document.createElement("div");
        filesEl.classList.add('files');
        let container = this.el.querySelector('.field--file .field__label');
        container.appendChild(filesEl);

        console.log(this);

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
        
        console.log(input.files);
        this.showFiles(input.files);
    }

    setEvents() {
        window.addEventListener('sendForm', this.e_sendForm.bind(this));
        this.form.addEventListener('submit', this.e_submit.bind(this));
        this.fileInput.addEventListener('change', this.e_fileChange.bind(this))
    }

    e_removeFile(e, index) {
        e.preventDefault();
        console.log('removeFile', index);

        this.removeFileFromFileList(this.fileInput, index);
    }

    e_fileChange(e) {
        console.log(e);
        var files = this.fileInput.files;

        console.log(files);

        this.showFiles(files);
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