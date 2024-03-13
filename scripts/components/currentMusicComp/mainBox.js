import { createElem } from "../../functions/createFunc/createEl.js";

export function mainBoxFunc(props) {
    const box = createElem({ 
        tag: 'div', 
        className: 'music-box' 
    })

    return box;
}