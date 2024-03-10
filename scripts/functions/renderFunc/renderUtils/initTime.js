export function initMusicTime(currentMusic) {
    const duration = currentMusic.duration;
    const minutesCalc = Math.floor(duration / 60);
    const secondsCalc = Math.floor(duration % 60);

    let minutes = minutesCalc.toString();
    let seconds = secondsCalc.toString();

    if (minutes.length === 1) { minutes = `0${minutes}`}
    if (seconds.length === 1) { seconds = `0${seconds}`}

    const value = `${minutes}:${seconds}`

    return { value, minutesCalc, secondsCalc }
}