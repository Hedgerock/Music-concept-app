import { createElem } from "../../functions/createFunc/createEl.js";

export function musicRangeFunc(props) {
    const { minutesCalc, secondsCalc } = props

    const musicRange = createElem({ 
        tag: 'input', 
        type: 'range', 
        className: 'music-player__input-range music-player__input-range_time' 
    })

    musicRange.value = 0;
    musicRange.max = (minutesCalc * 60) +  secondsCalc;

    return musicRange
}