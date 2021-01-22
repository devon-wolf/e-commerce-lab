import { seedAndGetProducts } from '../products/product-storage.js';
import { findByID } from '../utils.js';

const buckets = seedAndGetProducts();

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