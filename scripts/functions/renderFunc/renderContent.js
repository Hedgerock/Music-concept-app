import { createElem } from "../createFunc/createEl.js";
import { addToFavBtnFunc } from "./renderUtils/addToFavBtnFunc.js";

export function renderContent(list, parent) {
    list.forEach(music => {
        const { id:curId, author:authorName, title:titleVal, type:musType, img:picture, track:theSong } = music

        const checkhHash = window.location.hash.includes('#/favorites');

        const musicEl = createElem({ tag: 'div', className: 'music-el', dataId: curId });
        const musicLink = createElem({ tag: 'a', className: 'music-list', href: checkhHash ? `#/favorites/${curId}` : `#/song/${curId}`});
        const musicListImg = createElem({ tag: 'img', className: 'music-list__img', src: picture});
        const musicElTitle = createElem({ tag: 'h3', className: 'music-el__title', textContent: titleVal })
        const addToFavBtn = addToFavBtnFunc(music);

        musicListImg.src = picture;
        

        parent.append(musicEl);
        musicEl.append(musicLink, musicElTitle, addToFavBtn);
        musicLink.append(musicListImg);
    })

    return parent;
}

export function methodFunc(req, obj) {
    return {
        method: req,
        body: JSON.stringify(obj || ''),
        header: { 'content-type': 'application/json;charset = utf-8' }
    }
}