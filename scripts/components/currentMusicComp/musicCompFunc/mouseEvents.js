import { pauseBtn, playBtn } from "../../../data.js";
import { isPaused } from "./playFunc.js";

let wasPausedBeforeDrag;

export function onMouseDown(props) {
    const { musicRange, currentMusic, startBtn } = props;

    musicRange.onmousedown = () => { 
        wasPausedBeforeDrag = isPaused(currentMusic);
        currentMusic.pause();
        startBtn.innerHTML = playBtn;
    };
}

export function onMouseUp(props) {
    const { musicRange, startBtn, currentMusic } = props;

    musicRange.onmouseup = () => { 
        if (!wasPausedBeforeDrag) {
            currentMusic.play();
            startBtn.innerHTML = pauseBtn;
        }
    };
}
