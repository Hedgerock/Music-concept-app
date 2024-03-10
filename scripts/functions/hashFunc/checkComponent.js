import { notFound } from "../eventFunc/err404.js";

export async function checkComponent(route, hash, id, searchParams) {
    let component;

    try { component = await route.component({ hash, id, searchParams }) }
    catch { component = notFound }

    return component;
}