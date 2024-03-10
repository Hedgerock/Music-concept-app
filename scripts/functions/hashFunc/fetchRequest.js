import { url } from "../../data.js";

export const fetchRequest = async (value, id) => {
    const elem = await fetch(`${url}/${value}/${id}`);
    console.log(value, id)

    if (elem.status !== 200) {
        window.location.href = '#/err404';
        return;
    }

    const elemVal = await elem.json();

    return elemVal
}