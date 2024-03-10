import { createElem } from "../createFunc/createEl.js";

export function notFound() {
    const box = createElem({ tag: 'div', className: 'err404'})

    const title = createElem({ tag: 'h2', className: 'err404__title', textContent: 'Music is not found' });
    const link = createElem({ tag: 'a', className: 'err404__back-link', textContent: 'Main page', href: '#'})

    box.append(title, link);

    return box;
}