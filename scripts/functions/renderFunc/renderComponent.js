import { outlet } from "../../data.js";

export function render(component) {
    if (!outlet) {
        return;
    }
    outlet.innerHTML = '';
    outlet.append(component);
}
