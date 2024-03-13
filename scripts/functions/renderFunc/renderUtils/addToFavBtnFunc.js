import { url } from "../../../data.js";
import { createElem } from "../../createFunc/createEl.js";
import { methodFunc } from "../renderContent.js";

export function addToFavBtnFunc(props) {
    let { playlist, id:curId } = props;
    const addToFavBtn = createElem({ tag: 'button', className: 'addToFav' });
    const btnIcon = createElem({ tag: 'i', className: playlist ? 'fa-solid fa-heart-circle-xmark' : 'fa-solid fa-heart-circle-plus' })

    addToFavBtn.onclick = async (e) => {
        await fetch(`${url}/music/${curId}`, methodFunc('PATCH', { playlist: !playlist }))

        btnIcon.className = !playlist 
            ? 'fa-solid fa-heart-circle-xmark' 
            : 'fa-solid fa-heart-circle-plus'

        playlist = !playlist;

        if (window.location.hash === '#/favorites' && !playlist) {
            const parent = e.target.closest('.music-el');
            parent.remove();
        }
    }
    addToFavBtn.append(btnIcon);

    return addToFavBtn
}