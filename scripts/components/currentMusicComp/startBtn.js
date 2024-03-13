import { pauseBtn, playBtn } from "../../data.js";
import { createElem } from "../../functions/createFunc/createEl.js";

export function startBtnFunc(currentMusic, toolsBox) {

    const startBtn = createElem({ 
        tag: 'button', 
        className: 'music-player__tool music-player__tool_start-btn', 
        innerHTML: currentMusic.paused ? pauseBtn : playBtn
    })

    toolsBox.append(startBtn);

    return startBtn;
}