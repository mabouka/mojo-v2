import gsap              from 'gsap';

let curtain = document.querySelector('.curtain');

let curtainFade = {
    name: 'curtain-fade-transition',
    sync: false,
    to: {
        namespace: [
            'ourclients',
            //'about'
        ]
    },
    leave(data) {
        return gsap.to(curtain, {
            y: 0,
            ease: "power1.out",
            duration: 0.5,
        });
    },
    beforeEnter(data){
        data.next.container.classList.add('curtainTransitionEntered');
        gsap.set(data.next.container, {
            autoAlpha: 0
        });
        window.lenis.scrollTo(0,{duration:0, force: true, immediate: true});
    },
    enter(data) {
        gsap.to(data.next.container, {
            autoAlpha: 1,
            ease: "none",
            duration: 0.5,
            delay: 0.1,
        
        });

        return gsap.to(curtain, {
            y: '100vh',
            ease: "power1.out",
            duration: 0.5,
            delay: 0.1,
            onComplete: () => {
                gsap.set(curtain, { y: '-100vh'})
            }
        });
    }
};

export default curtainFade;