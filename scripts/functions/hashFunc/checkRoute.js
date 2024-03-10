import { checkComponent } from "./checkComponent.js";
import { getHash } from "./getHash.js";
import { render } from "../renderFunc/renderComponent.js"

export async function checkRoute(data, value) {
    let { hash, id, searchParams } = getHash();
    
    if (value) {
        hash = value;
    }

    console.log(hash, id, searchParams);

    let route = data.find(r => r.path === hash);
    console.log(route);

    if (!route) {
        route = data.find(r => r.path === '/err404');
    }

    console.log(route);

    const component = await checkComponent(route, hash, id, searchParams);

    render(component);
}