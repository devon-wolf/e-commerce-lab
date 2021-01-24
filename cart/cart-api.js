import {
    findByID,
    getOrSeed,
    identifyStoredItem,
    removeObject
} from '../utils.js';

const CART = 'CART';
const emptyCart = [];

export function getCart() {
    return getOrSeed(CART, emptyCart);
}

export function setCart(cart) {
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart() {
    localStorage.setItem(CART, JSON.stringify(emptyCart));
}

export function addToCart(id, input) {
    const cart = getCart();
    const cartItem = findByID(id, cart);
    const addQuantity = input;

    if (cartItem) {
        cartItem.quantity += addQuantity;
    }
    else if (addQuantity > 0) {
        cart.push({ id: id, quantity: addQuantity });
    }

    setCart(cart);
}

// in process
export function removeOneFromCart(id) {
    const cart = getCart();
    const cartItem = findByID(id, cart);

    if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity < 1) {
            removeObject(cartItem, cart);
        }
    }

    setCart(cart); // or something else, depending on if cart mutates
}