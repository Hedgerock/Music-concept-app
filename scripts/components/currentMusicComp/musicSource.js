import { createElem } from "../../functions/createFunc/createEl.js";

export function musicSourceFunc(props) {
    const { track: theSong } = props;

    const musicSource = createElem({ 
        tag: 'source', 
        className: 'currentMusic__source', 
        src: theSong, 
        type: 'audio/mpeg' 
    })

    return musicSource;
}