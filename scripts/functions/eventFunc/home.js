import { home, outlet } from "../../data.js";
import { renderMusicContent } from "../renderFunc/renderMusicCont.js";

home.onclick = () => {
    outlet.innerHTML = '';
    renderMusicContent();
}
