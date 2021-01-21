import { findByID } from '../utils.js';

const CART = 'CART';
const emptyCart = [];

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);
		
        return parsedCart;
    }
    else {
        const stringyEmptyCart = JSON.stringify(emptyCart);
        localStorage.setItem(CART, stringyEmptyCart);

        return emptyCart;
    }
}

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);
    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id) {
    const cart = getCart();
    const cartItem = findByID(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        const newItem = {
            id: id,
            quantity: 1
        };
		
        cart.push(newItem);
    }

    setCart(cart);
}

export function clearCart() {
    const stringyEmptyCart = JSON.stringify(emptyCart);
    localStorage.setItem(CART, stringyEmptyCart);
}