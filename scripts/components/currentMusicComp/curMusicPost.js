import { createElem } from "../../functions/createFunc/createEl.js";
import { boxPictFunc } from "./boxPict.js";
import { currentMusicFunc } from "./currentMusic.js";
import { musicPlayerFunc } from "./musicPlayer.js";

export function curMusicPostFunc(props, nextMusic, prevMusic) {

    const curMusicPost = createElem({ 
        tag: 'div', 
        className: 'music-info-box' 
    })

    const boxPict = boxPictFunc(props);
    const currentMusic = currentMusicFunc(props);

    const { musicPlayer, boxList } = musicPlayerFunc({ props, currentMusic, boxPict, nextMusic, prevMusic });

    curMusicPost.append(musicPlayer, boxPict, currentMusic);

    return { curMusicPost, currentMusic, boxList };
}