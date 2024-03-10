import { url } from "../../data.js";
import { createElem } from "../createFunc/createEl.js";
import { renderContent } from "./renderContent.js";

export async function renderMusicContent() {
    const request = await fetch(`${url}/music`);
    const musicList = await request.json();

    const musicContent = createElem( {tag: 'div', className: 'music-content' });
    const value = await renderContent(musicList, musicContent)

    return value
}