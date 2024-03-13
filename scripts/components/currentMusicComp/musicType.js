import { createElem } from "../../functions/createFunc/createEl.js";

export function musicTypeFunc(props) {
    const { type: musType } = props

    const musicType = createElem ({ 
        tag: 'span', 
        className: 'info-box__song-type', 
        textContent: `Type: ${musType}` 
    })


    return musicType;
}