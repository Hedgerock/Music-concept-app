import { url } from "../../data.js";
import { createElem } from "../createFunc/createEl.js";
import { renderContent } from "./renderContent.js";
import { addToFavBtnFunc } from "./renderUtils/addToFavBtnFunc.js";
import { initMusicTime } from "./renderUtils/initTime.js";
import { timeUpdate } from "./renderUtils/timeUpdate.js";

let booleanValue = false;

export async function renderCurrentMusic(props) {
    const { id:curId, author:authorName, title:titleVal, type:musType, poster:picture, track:theSong } = props;
    let duration;

    const box = createElem({ tag: 'div', className: 'music-box' })
    const curMusicPost = createElem({ tag: 'div', className: 'music-info-box' })
    const boxPict = createElem({ tag: 'div', className: 'music-poster' })
    const boxPictSrc = createElem({ tag: 'img', className: 'music-poster__src', src: picture })

    const currentMusic = createElem({tag: 'audio', className: 'currentMusic'});
    const musicSource = createElem({ tag: 'source', className: 'currentMusic__source', src: theSong, type: 'audio/mpeg' })

    currentMusic.onloadedmetadata = () => {
        const { value, minutesCalc, secondsCalc } = initMusicTime(currentMusic);
        currentMusic.play();

        const playBtn = '<i class="fa-solid fa-play"></i>';
        const pauseBtn = '<i class="fa-solid fa-pause"></i>';
        const nextSong = '<i class="fa-solid fa-forward-fast"></i>';

        const musicTime = createElem({ tag: 'span', className: 'music-player__time-value music-player__time-value_curMusic', textContent: value })
        const currentTime = createElem({ tag: 'span', className: 'music-player__time-value music-player__time-value_curTime', textContent: '00:00'})
        const startBtn = createElem({ tag: 'button', className: 'music-player__tool music-player__tool_start-btn', innerHTML: currentMusic.paused ? playBtn : pauseBtn})
        const nextMusic = createElem({ tag: 'a', className: 'music-player__tool music-player__tool_next-music', innerHTML: nextSong, href: `#/song/${+curId + 1}` })
        const musicRange = createElem({ tag: 'input', type: 'range', className: 'music-player__input-range music-player__input-range_time' })
        const musicVolume = createElem({ tag: 'input', type: 'range', className: 'music-player__input-range music-player__input-range_volume' })
        const addToFavBtn = addToFavBtnFunc(props);

        const infoBox = createElem({ tag: 'div', className: 'info-box' })
        const title = createElem ({ tag: 'h3', className: 'info-box__title', textContent: `Title: ${titleVal}` })
        const author = createElem ({ tag: 'p', className: 'info-box__author', textContent: `Author: ${authorName}` })
        const songType = createElem ({ tag: 'span', className: 'info-box__song-type', textContent: `Type: ${musType}` })

        musicRange.value = duration || 0;
        musicRange.max = (minutesCalc * 60) + secondsCalc;

        const volumeValue = localStorage.getItem('currentVolume');

        musicVolume.min = 0;
        musicVolume.max = 1;
        musicVolume.step = 0.01
        musicVolume.value = volumeValue || '0.5'
        currentMusic.volume = musicVolume.value;

        musicVolume.oninput = () => { 
            currentMusic.volume = musicVolume.value 
            localStorage.setItem('currentVolume', musicVolume.value);
        }

        playMusic({ el: startBtn, currentMusic, startBtn, playBtn, pauseBtn })
        playMusic({ el: boxPict, currentMusic, startBtn, playBtn, pauseBtn })
        
        currentMusic.addEventListener('timeupdate', () => {
            const currentTimeInSeconds = Math.floor(currentMusic.currentTime);
            const value = timeUpdate(currentTimeInSeconds);

            currentTime.textContent = value;
            musicRange.value = currentTimeInSeconds;
        });

        musicRange.oninput = () => {
            currentMusic.pause();
            startBtn.innerHTML = '<i class="fa-solid fa-play"></i>' 
            const currentTimeInSeconds = Math.floor(musicRange.value);
            const value = timeUpdate(currentTimeInSeconds)
            
            currentTime.textContent = value;
            musicRange.value = currentTimeInSeconds;
            currentMusic.currentTime = currentTimeInSeconds;
        }

        musicRange.onmouseup = () => { 
            currentMusic.play();
            startBtn.innerHTML = '<i class="fa-solid fa-pause"></i>' 
        };

        const musicPlayer = createElem({ tag: 'div', className: 'music-player'});
        const timeBox = createElem({ tag: 'div', className: 'time-box' });
        const toolsBox = createElem({ tag: 'div', className: 'tool-box', tabIndex: '0' });

        curMusicPost.append(musicPlayer, infoBox);
        infoBox.append(title, author, songType )
        musicPlayer.append(timeBox, musicRange, toolsBox);
        timeBox.append(currentTime, musicTime);
        toolsBox.append(startBtn, nextMusic, musicVolume, addToFavBtn);
    }

    const request = await fetch(`${url}/music`);
    const response = await request.json();

    const arr = response.filter(item => item.type === musType && item.id !== curId);
    console.log(arr);

    const boxList = createElem({ tag: 'div', className: 'music-content' })
    await renderContent(arr, boxList);

    box.append(curMusicPost, boxList);
    curMusicPost.append(boxPict, currentMusic);
    currentMusic.append(musicSource)
    boxPict.append(boxPictSrc);

    return box;
}


export function playMusic(props) {
    const { el, currentMusic, startBtn, playBtn, pauseBtn } = props
    booleanValue = isPaused(currentMusic);

    el.onclick = () => {
        !booleanValue ? currentMusic.pause() : currentMusic.play();
        booleanValue = isPaused(currentMusic);

        currentMusic.paused
        ? startBtn.innerHTML = playBtn 
        : startBtn.innerHTML = pauseBtn
    }
}

function isPaused(currentMusic) {
    return currentMusic.paused;
}