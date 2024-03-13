import { createElem } from "../../functions/createFunc/createEl.js";
import { musicAuthorFunc } from "./musicAuthor.js";
import { musicTitleFunc } from "./musicTitle.js";
import { musicTypeFunc } from "./musicType.js";

export function infoBoxFunc(props) {

    const infoBox = createElem({ 
        tag: 'div', 
        className: 'info-box' 
    })

    const title = musicTitleFunc(props);
    const author = musicAuthorFunc(props);
    const musicType = musicTypeFunc(props);

    infoBox.append(title, author, musicType);

    return infoBox;
}