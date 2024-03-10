import { fetchRequest } from "../hashFunc/fetchRequest.js";
import { renderCurrentMusic } from "../renderFunc/renderCurrentMusic.js";

export async function currentSong(props) {
    const { id } = props

    const elem = await fetchRequest('music', id);

    console.log(elem);
    const el = renderCurrentMusic(elem);
    
    return el;
}