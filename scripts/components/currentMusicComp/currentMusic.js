import { createElem } from "../../functions/createFunc/createEl.js";
import { musicSourceFunc } from "./musicSource.js";

export function currentMusicFunc(props) {

    const currentMusic = createElem({
        tag: 'audio', 
        className: 'currentMusic'
    });

    const musicSource = musicSourceFunc(props);

    currentMusic.append(musicSource);

    return currentMusic;
}