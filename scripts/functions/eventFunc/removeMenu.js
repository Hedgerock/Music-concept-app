export function removeMenu(menu, burger, layout) {
    menu.classList.remove('menu_burger');
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    layout.remove();
}