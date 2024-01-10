import gsap from 'gsap';
import MouseFollower from "mouse-follower";

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
    //container: '.mf-container',
    speed: 0.2,
    ease: "power4.out",
    stickDelta: 0

});


export default cursor;