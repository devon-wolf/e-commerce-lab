import { findByID } from '../utils.js';

const CART = 'CART';
const emptyCart = [];

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {		
        return JSON.parse(stringyCart);
    }
    else {
        localStorage.setItem(CART, JSON.stringify(emptyCart));
        return emptyCart;
    }
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