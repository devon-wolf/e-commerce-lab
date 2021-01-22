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

export function addToCart(id) {
    const cart = getCart();
    const cartItem = findByID(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        cart.push({ id: id, quantity: 1 });
    }

    setCart(cart);
}