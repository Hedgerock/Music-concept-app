import { createElem } from "../../functions/createFunc/createEl.js";
import { addToFavBtnFunc } from "../../functions/renderFunc/renderUtils/addToFavBtnFunc.js";
import { startBtnFunc } from "./startBtn.js";
import { prevOrNextMusicFunc } from "./nextMusic.js";
import { musicVolumeFunc } from "./musicVolume.js";

export function toolsBoxFunc(props) {
    const { currentMusic, props: rawProps, nextMusic:nextVal, prevMusic:prevVal } = props;
    const { props: newProps } = rawProps;

    const toolsBox = createElem({ 
        tag: 'div', 
        className: 'tool-box', 
        tabIndex: '0' 
    });

    const prevMusic = prevOrNextMusicFunc(newProps, toolsBox, prevVal, false);
    const startBtn = startBtnFunc(currentMusic, toolsBox)
    const nextMusic = prevOrNextMusicFunc(newProps, toolsBox, nextVal, true);
    const musicVolume = musicVolumeFunc(currentMusic, toolsBox)
    const addToFavBtn = addToFavBtnFunc(newProps);

    console.log(nextMusic);

    toolsBox.append(addToFavBtn);

    console.log(toolsBox);

    return { toolsBox, startBtn };
}