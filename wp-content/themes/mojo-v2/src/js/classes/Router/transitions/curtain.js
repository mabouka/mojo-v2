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

    enter(data) {
        gsap.to(curtain, {
            y: '100vh',
            ease: "power1.out",
            duration: 0.5,
            onComplete: () => {
                gsap.set(curtain, { y: '-100vh'})
            }
        });
    }
};

export default curtainTransition;