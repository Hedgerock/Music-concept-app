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

        const currentTimeInSeconds = renderComp({ currentTime, musicRange, value })

        currentMusic.currentTime = currentTimeInSeconds;
    }
}