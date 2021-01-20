import buckets from './data/buckets.js';

export function findByID(id, array) {
    for (let item of array) {
        if (item.id === id) return item;
    }
    return null;
}

export function calcItemTotal(cartItem) {
    const itemPrice = findByID(cartItem.id, buckets).price;
    return cartItem.quantity * itemPrice;
}

export function calcOrderTotal(array) {
    let total = 0;
    for (let item of array) {
        total += calcItemTotal(item);
    }
    return total;
}