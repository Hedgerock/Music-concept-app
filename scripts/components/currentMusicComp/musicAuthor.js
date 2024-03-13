import { createElem } from "../../functions/createFunc/createEl.js"

export function musicAuthorFunc(props) {
    const { author:authorName } = props

    const author = createElem ({ 
        tag: 'p', 
        className: 'info-box__author', 
        textContent: `Author: ${authorName}` 
    })

    return author;
}