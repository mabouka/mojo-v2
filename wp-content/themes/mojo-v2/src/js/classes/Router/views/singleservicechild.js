import appendScripts from "../utils/scripts";

let singleservicechild = {
    namespace: 'singleservicechild',
    beforeEnter(data) {
        let pageScriptSrcs = [
            'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js'
        ];
        
        appendScripts(pageScriptSrcs, data.next.container);
    },
    beforeLeave(data) {

    }
}

export default singleservicechild;