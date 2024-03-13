import { createElem } from "../../functions/createFunc/createEl.js";

export function boxPictSrcFunc(props) {
    const { poster: picture } = props;

    const boxPictSrc = createElem({ 
        tag: 'img', 
        className: 'music-poster__src', 
        src: picture 
    })

    return boxPictSrc;
}