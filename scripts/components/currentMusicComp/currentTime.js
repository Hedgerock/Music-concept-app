import { createElem } from "../../functions/createFunc/createEl.js";

export function currentTimeFunc(props) {
    const currentTime = createElem({ 
        tag: 'span', 
        className: 'music-player__time-value music-player__time-value_curTime', 
        textContent: '00:00'
    })


    return currentTime;
}