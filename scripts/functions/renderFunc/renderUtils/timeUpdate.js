export function timeUpdate(currentTimeInSeconds) {
    const minutes = Math.floor(currentTimeInSeconds / 60);
    const formattedSeconds = currentTimeInSeconds % 60;

    const setMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const setSeconds = formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds

    const value = `${setMinutes}:${setSeconds}`

    return value;
}