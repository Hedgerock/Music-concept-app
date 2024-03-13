import { createElem } from "../../functions/createFunc/createEl.js";
import { musicRangeFunc } from "./musicRange.js";
import { timeBoxFunc } from "./timeBox.js";
import { toolsBoxFunc } from "./toolsBox.js";
import { boxListFunc } from "./boxList.js";
import { initMusicTime } from "../../functions/renderFunc/renderUtils/initTime.js";
import { musicTimeFunc } from "./musicTime.js";
import { currentTimeFunc } from "./currentTime.js";
import { musicRangeDynamicChanges } from "./musicCompFunc/musicRangeDynamic.js";
import { timeUpdate } from "./musicCompFunc/timeUpdate.js";
import { onMouseDown, onMouseUp } from "./musicCompFunc/mouseEvents.js";
import { playMusic } from "./musicCompFunc/playFunc.js";
import { afterEndingMusic } from "./musicCompFunc/afterEndingMusic.js";
import { renderRelevantMusic } from "./musicCompFunc/renderRelevantMusic.js";
import { pauseBtn, playBtn } from "../../data.js";

export function musicPlayerFunc(props) {
    const { currentMusic, props: newProps, boxPict, nextMusic, prevMusic } = props;

    const musicPlayer = createElem({ 
        tag: 'div', 
        className: 'music-player'
    });

    const timeBox = timeBoxFunc();
    const boxList = boxListFunc();
    const { toolsBox, startBtn } = toolsBoxFunc({ props, currentMusic, nextMusic, prevMusic });

    currentMusic.onloadedmetadata = async () => {
        let isPlaying;
        const isSet = localStorage.getItem('isPlaying');
        !isSet 
            ? localStorage.setItem('isPlaying', 'false')
            : isPlaying = localStorage.getItem('isPlaying');

        if (isPlaying) { startBtn.innerHTML = playBtn }

        currentMusic.play();

        if (!currentMusic.paused) { startBtn.innerHTML = pauseBtn }

        const { value, minutesCalc, secondsCalc } = initMusicTime(currentMusic);
        const musicTime = musicTimeFunc({ value });
        const currentTime = currentTimeFunc();
        const musicRange = musicRangeFunc({ minutesCalc, secondsCalc });

        await renderRelevantMusic({ newProps, boxList })

        playMusic({ el: startBtn, currentMusic, startBtn})
        playMusic({ el: boxPict, currentMusic, startBtn})
        
        timeUpdate({ currentMusic, musicRange, currentTime });
        musicRangeDynamicChanges({ musicRange, currentMusic, startBtn, currentTime });
        
        onMouseDown({ musicRange, currentMusic, startBtn });
        onMouseUp({ musicRange, startBtn, currentMusic });

        afterEndingMusic({ currentMusic });

        timeBox.append(currentTime, musicTime);
        musicPlayer.append(timeBox, musicRange, toolsBox);
    }

    return { musicPlayer, boxList };
}