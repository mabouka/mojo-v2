// FIRST APPLE-LIKE EFFECT:
// Sync video with scroll

// ffmpeg -i mojo_globe_01.mov -qscale:v 1  -vf "fps=25,scale=1285:-1" images/globe-1285-%04d.jpg
// `for file in images/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default class Globe {

    static get selector() {
        //return '.globe';
        
    }

    constructor(el) {
        console.log('start globe');

        this.el              = el;

        this.baseUrl         = el.dataset.baseUrl;

        this.canvas          = el.querySelector('.globe__anim');
        this.context         = this.canvas.getContext('2d');
        this.canvas.width    = 1285;
        this.canvas.height   = 952;

        this.frameIndex      = 0;
        this.frameCount      = 250;
        this.images = [];
        this.anim = {
            frame: 0
        }

        this.preloadImages();

        setTimeout(() => {
            this.preloadImages();
        }, 200);
        this.images[0].onload = this.render.bind(this); // render first image
        


        this.animation = gsap.to(this.anim, {
            frame: this.frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: this.el,
                pin: true,
                start: "top",
                end: "+=2000",
                scrub: true,
                //markers: true,
                id: "globe",

            },
            onUpdate: (self) => {
                this.render();
            }, // use animation onUpdate instead of scrollTrigger's onUpdate
        });


        
        console.log(' end globe');
    }

    currentFrame(i) {
        i = i.toString().padStart(4, '0');
        return `${this.baseUrl}globe-1285-${i}.webp`;
    }

    preloadImages() {
        for (let i = 1; i <= this.frameCount; i++) {
            const img = new Image()
                  img.src =this.currentFrame(i)
            this.images.push(img);
        }
    }
    
    render(e) {
        console.log(this.anim.frame);
        //console.error(this.anim.frame >= 190, this.anim.frame);
        this.renderText();

        try {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(this.images[Math.ceil(this.anim.frame, 1)], 0, 0); 
        } catch (error) {
            console.log(this.images);
            console.error(error);
            console.log('imageError', this.anim.frame)
        }

    }

    renderText() {
        if(this.anim.frame >= 190) this.el.classList.add('globe--complete');
        else this.el.classList.remove('globe--complete');
    }

    /*
     * Events
     */

    e_resize() {
        console.log('globe resize');
        this.animation.scrollTrigger.refresh();
    }

}