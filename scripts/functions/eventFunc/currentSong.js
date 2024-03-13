import { url } from "../../data.js";
import { fetchRequest } from "../hashFunc/fetchRequest.js";
import { renderCurrentMusic } from "../renderFunc/renderCurrentMusic.js";

export async function currentSong(props) {
    const { id } = props
    const isFavorite = window.location.hash === `#/favorites/${id}`

    console.log(isFavorite);

    const elem = await fetchRequest('music', id, isFavorite);

    const request = await fetch(`${url}/music`);
    let value = await request.json();

    if (isFavorite) {
        value = value.filter(item => item.playlist)
    }

    console.log(value);

    const el = await renderCurrentMusic(elem, value);
    
    return el;
}