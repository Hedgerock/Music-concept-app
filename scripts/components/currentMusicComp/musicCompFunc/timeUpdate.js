import { rangeValue } from "./musicRangeDynamic.js";
import { renderComp } from "./renderComp.js";

export function timeUpdate(props) {
    const { currentMusic, musicRange, currentTime } = props;

    currentMusic.addEventListener('timeupdate', () => {
        const value = currentMusic.currentTime;
        renderComp({ currentTime, musicRange, value })

        rangeValue(musicRange);
        musicRange.style.setProperty('--slider-value', `${percentage}%`);
    });
}