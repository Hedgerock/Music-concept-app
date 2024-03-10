import { routes } from "./data.js";
import { doBurgerMenu } from "./functions/eventFunc/burgerBtn.js";
import { checkRoute } from "./functions/hashFunc/checkRoute.js";

checkRoute(routes);
doBurgerMenu();

addEventListener('hashchange', () => { checkRoute(routes) })