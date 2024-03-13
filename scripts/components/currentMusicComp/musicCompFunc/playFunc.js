import { pauseBtn, playBtn } from "../../../data.js";

let booleanValue;

export function playMusic(props) {
    const { el, currentMusic, startBtn } = props
    booleanValue = isPaused(currentMusic);

    el.onclick = () => {
        !booleanValue ? currentMusic.pause() : currentMusic.play();

        booleanValue = isPaused(currentMusic);

        currentMusic.paused
        ? startBtn.innerHTML = playBtn 
        : startBtn.innerHTML = pauseBtn
    }
}

export function isPaused(currentMusic) {
    return currentMusic.paused;
}