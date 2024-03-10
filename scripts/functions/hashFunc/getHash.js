export function getHash() {
    let hash = window.location.hash.replace(/^\#/g, '')
    const resources = hash.split('/').filter(item => item);
    const searchParams = hash.split('?')[1];
    hash = hash.split('?')[0];
    if (!hash) {
        hash = '/';
    }

    if (resources.length === 2) {
        hash = `/${resources[0]}/:id`
    }

    console.log(searchParams);
    console.log(hash)

    return { hash, id: resources[1], searchParams }
}