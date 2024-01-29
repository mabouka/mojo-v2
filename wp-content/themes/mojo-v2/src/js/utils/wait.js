export default function wait (time) {
    return new Promise((resovle) => {
        setTimeout(() => {
            resovle();
        }, time);
    })
}