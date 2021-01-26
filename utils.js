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

export function removeObject(item, array) {
    const arrayItem = findByID(item.id, array);
    const targetIndex = array.indexOf(arrayItem);
    array.splice(targetIndex, 1);
    return array;
}

// this function turned out pretty pointless! but it's here and tested so I'll leave it
export function identifyStoredItem(id, getter) {
    const storedArray = getter;
    return findByID(id, storedArray);
}

// export function generateNewID(array) {
    // assign an ID to new items instead of relying on user input
// }