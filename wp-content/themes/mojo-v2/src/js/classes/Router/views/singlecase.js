import appendScripts from "../utils/scripts";

let singlecase = {
    namespace: 'singlecase',
    beforeEnter(data) {
        let pageScriptSrcs = [
            'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js'
        ];
        
        appendScripts(pageScriptSrcs, data.next.container);
    }
}

export default singlecase;