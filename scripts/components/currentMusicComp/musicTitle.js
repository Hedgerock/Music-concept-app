import { createElem } from "../../functions/createFunc/createEl.js"

export function musicTitleFunc(props) {
    const { title:titleVal } = props

    const title = createElem ({ 
        tag: 'h3', 
        className: 'info-box__title', 
        textContent: `Title: ${titleVal}` 
    })

    return title;
}