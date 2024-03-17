import { playBtn } from "../../../data.js";
import { renderComp } from "./renderComp.js";

export function musicRangeDynamicChanges(props) {
    const { musicRange, currentMusic, startBtn, currentTime } = props;

    musicRange.oninput = () => {
        const value = musicRange.value;
        if (!currentMusic.paused) {
            currentMusic.pause();
            startBtn.innerHTML = playBtn 
        }

        rangeValue(musicRange);

        const currentTimeInSeconds = renderComp({ currentTime, musicRange, value })

        currentMusic.currentTime = currentTimeInSeconds;
    }
}

export function rangeValue(range) {
    const value = range.value;
    const percentage = (value - range.min) / (range.max - range.min) * 100;
    range.style.setProperty('--slider-value', `${percentage}%`);
}