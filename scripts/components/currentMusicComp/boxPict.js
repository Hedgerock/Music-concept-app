import { createElem } from "../../functions/createFunc/createEl.js";
import { boxPictSrcFunc } from "./boxPictSrc.js";
import { infoBoxFunc } from "./infoBox.js";

export function boxPictFunc(props) {

    const boxPict = createElem({ 
        tag: 'div', 
        className: 'music-poster' 
    });

    const boxPictSrc = boxPictSrcFunc(props);

    const infoBox = infoBoxFunc(props);

    boxPict.append(boxPictSrc, infoBox);

    return boxPict;
}