import { createElem } from "../../functions/createFunc/createEl.js";

export function musicVolumeFunc(currentMusic, toolsBox) {
    
    const musicVolume = createElem({ 
        tag: 'input', 
        type: 'range', 
        className: 'music-player__input-range music-player__input-range_volume' 
    })

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

    toolsBox.append(musicVolume);

    return musicVolume;
}