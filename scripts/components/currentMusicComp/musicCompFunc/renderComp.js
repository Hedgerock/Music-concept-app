import { timeUpdate } from "../../../functions/renderFunc/renderUtils/timeUpdate.js";

export function renderComp(props) {
    const { currentTime, musicRange, value:valueEl } = props;

    const currentTimeInSeconds = Math.floor(valueEl);
    const value = timeUpdate(currentTimeInSeconds);
    currentTime.textContent = value;
    musicRange.value = currentTimeInSeconds;

    return currentTimeInSeconds;
}