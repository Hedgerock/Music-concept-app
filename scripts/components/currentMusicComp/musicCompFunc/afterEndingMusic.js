export function afterEndingMusic(props) {
    const { currentMusic } = props;

    currentMusic.addEventListener('ended', () => {
        window.location.reload();
    })
}