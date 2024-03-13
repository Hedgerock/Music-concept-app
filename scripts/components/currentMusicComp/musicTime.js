import { createElem } from "../../functions/createFunc/createEl.js";

export function musicTimeFunc(props) {
    const { value } = props

    const musicTime = createElem({ 
        tag: 'span', 
        className: 'music-player__time-value music-player__time-value_curMusic', 
        textContent: value 
    })

    return musicTime
}