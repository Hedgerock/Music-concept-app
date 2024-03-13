import { createElem } from "../../functions/createFunc/createEl.js";

export function boxListFunc(props) {
    const boxList = createElem({ 
        tag: 'div', 
        className: 'music-content' 
    })

    return boxList;
}