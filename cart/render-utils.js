import { seedAndGetProducts } from '../products/product-storage.js';
import { findByID } from '../utils.js';
import { removeOneFromCart, getCart, addToCart } from './cart-api.js';
import {
    calcItemTotal,
    calcOrderTotal
} from './cart-utils.js';

const buckets = seedAndGetProducts();

export function renderTableRow(cartItem) {
    const bucket = findByID(cartItem.id, buckets);
    const price = calcItemTotal(cartItem);
	
    const tr = document.createElement('tr');

    const nameTD = document.createElement('td');
    const quantityTD = document.createElement('td');
    const priceTD = document.createElement('td');
    const actionTD = document.createElement('td');

    const removeButton = document.createElement('button');
    const addButton = document.createElement('button');
    actionTD.append(removeButton, addButton);

    nameTD.textContent = bucket.name;
    quantityTD.textContent = cartItem.quantity;
    priceTD.textContent = `$${price.toFixed(2)}`;
    removeButton.textContent = '-';
    addButton.textContent = '+';

    removeButton.addEventListener('click', () => {
        removeOneFromCart(cartItem.id);
        renderCartUpdates(cartItem.id, tr, quantityTD, priceTD);
    });

    addButton.addEventListener('click', () => {
        addToCart(cartItem.id, 1);
        renderCartUpdates(cartItem.id, tr, quantityTD, priceTD);
    });

    tr.append(nameTD, quantityTD, priceTD, actionTD);

    return tr;
}

function renderCartUpdates(id, itemRow, quantityField, priceField) {
    const cart = getCart();
    const cartItem = findByID(id, cart);
    const totalField = document.getElementById('order-total');

    if (!cartItem) {
        itemRow.remove();
        totalField.textContent = `$${calcOrderTotal(cart).toFixed(2)}`;
        return;
    }

    quantityField.textContent = cartItem.quantity;
    priceField.textContent = `$${calcItemTotal(cartItem).toFixed(2)}`;
}

export function renderTotalRow(cart) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.id = 'order-total';

    td2.textContent = 'Total:';
    td2.style.fontStyle = 'italic';
    td3.textContent = `$${calcOrderTotal(cart).toFixed(2)}`;

    tr.append(td1, td2, td3);
    return tr;
}