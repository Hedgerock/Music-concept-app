import { curMusicPostFunc } from "../../components/currentMusicComp/curMusicPost.js";
import { mainBoxFunc } from "../../components/currentMusicComp/mainBox.js";

export async function renderCurrentMusic(props, arr) {
    const box = await mainBoxFunc(props);
    const { id } = props;

    console.log(arr);

    const curEl = arr.find(el => el.id == id);
    const index = arr.indexOf(curEl);

    const nextMusic = checkNextAndPrev(index + 1, arr);
    const prevMusic = checkNextAndPrev(index - 1, arr);

    const { curMusicPost, boxList } = curMusicPostFunc(props, nextMusic, prevMusic);

    box.append(curMusicPost, boxList);
    return box;
}

function checkNextAndPrev(index, arr) {
    if (index < 0) {
        return '';
    }

    const newVal = arr[index];

    return newVal;
}