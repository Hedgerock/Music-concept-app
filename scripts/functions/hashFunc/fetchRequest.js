import { url } from "../../data.js";

export const fetchRequest = async (value, id, isFavorite) => {
    const elem = await fetch(`${url}/${value}/${id}`);
    let check;
    console.log(isFavorite);

    if (elem.status !== 200) {
        window.location.href = '#/err404';
        return;
    }
    const elemVal = await elem.json();

    if (isFavorite) {
        check = elemVal.playlist
    }

    if (!check && isFavorite) {
        window.location.href = '#/err404';
        return;
    }

    return elemVal
}