import { url } from "../../data.js";
import { fetchRequest } from "../hashFunc/fetchRequest.js";
import { renderCurrentMusic } from "../renderFunc/renderCurrentMusic.js";

export async function currentSong(props) {
    const { id } = props

    const elem = await fetchRequest('music', id);

    const request = await fetch(`${url}/music`);
    const value = await request.json();

    const el = await renderCurrentMusic(elem, value);
    
    return el;
}