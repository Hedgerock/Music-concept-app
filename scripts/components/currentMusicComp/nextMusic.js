import { nextSong, prevSong } from "../../data.js";
import { createElem } from "../../functions/createFunc/createEl.js";

export function prevOrNextMusicFunc(props, toolsBox, newVal, boolean) {

    if (!newVal) {
        return
    }
    const { id: curId } = props
    const { id: newId } = newVal

    const isFavorite = window.location.hash === `#/favorites/${curId}`

    const musicselection = createElem({ 
        tag: 'a', 
        className: 'music-player__tool music-player__tool_next-music', 
        innerHTML: boolean ? nextSong : prevSong, 
        href: !isFavorite ? `#/song/${newId}`: `#/favorites/${newId}`
    })

    toolsBox.append(musicselection);

    return musicselection;
}