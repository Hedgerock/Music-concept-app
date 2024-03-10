import { burgerBtn } from "../../data.js";
import { createElem } from "../createFunc/createEl.js";
import { removeMenu } from "./removeMenu.js";


export function doBurgerMenu() {
    burgerBtn.onclick = () => {
        const menu = document.querySelector('.menu');
        const layout = createElem({tag: 'div', className: 'layout'});
    
        menu.classList.add('menu_burger');
        burgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    
        addEventListener('hashchange', () => { removeMenu(menu, burgerBtn, layout) })
        layout.onclick = () => { removeMenu(menu, burgerBtn, layout) }
    
        document.body.append(layout);
    }
}