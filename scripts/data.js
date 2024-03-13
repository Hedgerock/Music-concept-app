import { currentSong } from "./functions/eventFunc/currentSong.js";
import { notFound } from "./functions/eventFunc/err404.js";
import { favoritesFunc } from "./functions/eventFunc/favorites.js";
import { renderMusicContent } from "./functions/renderFunc/renderMusicCont.js";

export const outlet = document.querySelector('.outlet'); 
export const favorites = document.querySelector('.menu-link_favorites');
export const burgerBtn = document.querySelector('.burger-menu');
export const home = document.querySelector('.menu-link_home');

export const playBtn = '<i class="fa-solid fa-play"></i>';
export const pauseBtn = '<i class="fa-solid fa-pause"></i>';
export const nextSong = '<i class="fa-solid fa-forward-fast"></i>';
export const prevSong = '<i class="fa-solid fa-backward-fast"></i>';

export const url = 'http://localhost:3000';

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
        path: '/favorites/:id',
        component: currentSong
    },
    {
        path: '/err404',
        component: notFound
    }
]