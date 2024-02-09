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
        console.log('start Globe');
        this.el              = el;
        this.baseUrl         = el.dataset.baseUrl;
        this.inside          = el.querySelector('.globe__inside');
        this.right           = el.querySelector('.globe__right');

        this.canvas          = el.querySelector('.globe__anim');
        this.context         = this.canvas.getContext('2d');
        this.canvas.width    = 1285;
        this.canvas.height   = 952;

        this.currentFrame    = -1;
        this.firstFrame      = 53;
        this.frameCount      = 250;
        this.fileType        = this.support_format_webp() ? 'webp' : 'jpg';
        this.anim = {
            frame: 0
        }
        this.images = this.getImages();

        this.images[this.anim.frame].image.onload = this.render.bind(this); // render first image

        this.mm = gsap.matchMedia();


        this.mm.add("(min-width: 601px)", () => {

            this.animation = gsap.to(this.anim, {
                frame: this.images.length - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: this.el,
                    start: "top-=" + (window.innerHeight/2),
                    end: "bottom-=" + (window.innerHeight/8*5),
                    scrub: true,
                    id: "globe-canvas",
                    //markers: true,
                },
                onUpdate: (self) => {
                    this.render();
                }, // use animation onUpdate instead of scrollTrigger's onUpdate
            });
        });

        this.mm.add("(max-width: 600px)", () => {

            this.animation = gsap.to(this.anim, {
                frame: this.images.length - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: this.el,
                    start: "top-=" + 0,
                    end: "bottom-=" + window.innerHeight,
                    scrub: true,
                    id: "globe-canvas",
                    //markers: true,

                },
                onUpdate: (self) => {
                    this.render();
                }, // use animation onUpdate instead of scrollTrigger's onUpdate
            });
        });
        



        this.mm.add("(min-width: 601px)", () => {
            let height = 660;
            height = this.inside.offsetHeight- this.right.offsetHeight;

            this.main = gsap.timeline({
                scrollTrigger: {
                    trigger: this.el,
                    start: "top-=200",
                    end: "bottom-=850",
                    scrub: true,
                    //markers: true,
                    id: "globe",
                    ease: "none"
                }
            })
            .to(this.right, {
                y: height,
                ease: "none",
                duration: 1
            },0);
        });

        console.log('end Globe');

    }

    currentFrame(i) {
        i = i.toString().padStart(4, '0');
        return `${this.baseUrl}globe-1285-${i}.${this.fileType}`;
    }

    getImages() {
        let images = [];
        for (let i = this.firstFrame; i <= this.frameCount; i++) {
            let item = {};
                item.frameIndex = i,
                item.src = this.getImageUrl(i);
                item.loaded = false;
                item.image = this.preloadImage(item.src);
                item.image.onload = () => {
                    item.loaded = true;
                }

                setTimeout(() => {
                    item.loaded ? this.preloadImage(item.src) : null
                }, 1000);

                setTimeout(() => {
                    item.loaded ? this.preloadImage(item.src) : null
                }, 1500);
                
            images.push(item);
            

        }
        return images;
    }

    getImageUrl(index) {
        let paddedIndex = index.toString().padStart(4, '0');
        let url = `${this.baseUrl}globe-1285-${paddedIndex}.${this.fileType}`;
        return url;
    }
    preloadImage(src) {
        const img = new Image()
              img.src = src;
        return img;
    }

    support_format_webp()
    {
        let elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        else return false;
    }
    
    render(e) {
        try {
            if (this.anim.frame !== this.currentFrame) { 
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(this.images[this.anim.frame].image, 0, 0); 
                this.currentFrame = this.anim.frame;    
            }
        } catch (error) {
            console.log(this.images);
            console.error(error);
            console.log('imageError', this.anim.frame)
        }
    }


    /*
     * Events
     */

    e_resize() {
        console.log('globe resize');
        this.main.scrollTrigger.refresh();
    }

}