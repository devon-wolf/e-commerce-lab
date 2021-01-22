export function findByID(id, array) {
    for (let item of array) {
        if (item.id === id) return item;
    }
    return null;
}

export function getOrSeed(key, seedData) {
    const stringyData = localStorage.getItem(key);

    if (stringyData) {
        return JSON.parse(stringyData);
    }
    else {
        localStorage.setItem(key, JSON.stringify(seedData));
        return seedData;
    }
}