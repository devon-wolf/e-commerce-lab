import {
    calcItemTotal,
    calcOrderTotal
} from './cart-utils.js';

const emptyCart = '[]';
const cartInLocalStorage = localStorage.getItem('CART') || emptyCart;
const cart = JSON.parse(cartInLocalStorage);
const stringifiedCart = JSON.stringify(cart);
const dataToLocalStorage = localStorage.setItem('CART', stringifiedCart);

export function addToCart(item) {
    console.log(`someone added ${item.name}`);
    console.log(cart);
}