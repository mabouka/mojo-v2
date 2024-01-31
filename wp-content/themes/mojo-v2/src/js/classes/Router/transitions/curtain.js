import gsap              from 'gsap';

let curtain = document.querySelector('.curtain');

let curtainTransition = {
    name: 'curtain-transition',
    sync: false,
    leave(data) {
        return gsap.to(curtain, {
            y: 0,
            ease: "power1.out",
            duration: 0.5,
        });
    },
    beforeEnter(data){
        data.next.container.classList.add('curtainTransitionEntered');
        window.lenis.scrollTo(0,{duration:0, force: true, immediate: true});
    },
    enter(data) {

        return gsap.to(curtain, {
            y: '100%',
            ease: "power1.out",
            duration: 0.5,
            delay: 0.1,
            onComplete: () => {
                gsap.set(curtain, { y: '-100%'})
            }
        });
    }
};

export default curtainTransition;