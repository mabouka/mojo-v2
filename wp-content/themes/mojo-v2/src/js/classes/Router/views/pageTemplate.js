import appendScripts from "../utils/scripts";

let pageTemplate = {
    namespace: 'pageTemplate',
    beforeEnter(data) {
        let pageScriptSrcs = [
            'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js'
        ];
        
        appendScripts(pageScriptSrcs, data.next.container);
    }
}

export default pageTemplate;