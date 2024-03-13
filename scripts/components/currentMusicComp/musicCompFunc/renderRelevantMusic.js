import { url } from "../../../data.js";
import { renderContent } from "../../../functions/renderFunc/renderContent.js";

export async function renderRelevantMusic(props) {
    const { newProps, boxList } = props;
    const { id:curId, type:musType } = newProps;

    let arr;

    const request = await fetch(`${url}/music`);
    const response = await request.json();

    window.location.hash !== `#/favorites/${curId}`
        ? arr = response.filter(item => item.type === musType && item.id !== curId)
        : arr = response.filter(item => item.playlist && item.id !== curId)

    renderContent(arr, boxList);
}