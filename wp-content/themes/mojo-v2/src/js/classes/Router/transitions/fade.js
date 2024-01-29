import gsap              from 'gsap';

let fadeTransition = {
    name: 'fade-transition',
    sync: true,
    from: {
        namespace: [
            'archivecase'
        ]
    },
    to: {
        namespace: [
            'archivecase'
        ]
    },
    leave(data) {
        return gsap.to(data.current.container, {
            autoAlpha: 0,
            ease: "none",
            duration: 0.5,
        });
    },
    beforeEnter(data) {
        data.next.container.classList.add('fadeTransitionEntered');
        gsap.set(data.next.container, {
            autoAlpha: 0,
        });
    },

    enter(data) {
        return gsap.to(data.next.container, {
            autoAlpha: 1,
            ease: "none",
            duration: 0.5,
            //delay: 1,

        });
    }
};

export default fadeTransition;