import { currentSong } from "./functions/eventFunc/currentSong.js";
import { notFound } from "./functions/eventFunc/err404.js";
import { favoritesFunc } from "./functions/eventFunc/favorites.js";
import { renderMusicContent } from "./functions/renderFunc/renderMusicCont.js";

export const outlet = document.querySelector('.outlet'); 
export const favorites = document.querySelector('.menu-link_favorites');
export const burgerBtn = document.querySelector('.burger-menu');
export const home = document.querySelector('.menu-link_home');

export const url = 'http://localhost:3000';

export const musicPlayer = { isActive: true }

export const routes = [
    {
        path: '/',
        component: renderMusicContent
    },
    {
        path: '/favorites',
        component: favoritesFunc
    },
    {
        path: '/song/:id',
        component: currentSong

    },
    {
        path: '/err404',
        component: notFound
    }
]