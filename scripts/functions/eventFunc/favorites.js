import { outlet, url } from "../../data.js";
import { createElem } from "../createFunc/createEl.js";
import { renderContent } from "../renderFunc/renderContent.js";

export const favoritesFunc = async () => {
    outlet.innerHTML = '';

    const request = await fetch(`${url}/music`);
    const rawData = await request.json();
    const filteredArr = rawData.filter(item => item.playlist)

    const musicContent = createElem({ tag: 'div', className: 'music-content'});
    const value = await renderContent(filteredArr, musicContent)

    return value
}