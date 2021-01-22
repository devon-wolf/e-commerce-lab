import { seedAndGetProducts } from '../products/product-storage.js';
import { findByID } from '../utils.js';
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

    nameTD.textContent = bucket.name;
    quantityTD.textContent = cartItem.quantity;
    priceTD.textContent = `$${price.toFixed(2)}`;
	
    tr.append(nameTD, quantityTD, priceTD);

    return tr;
}

export function renderTotalRow(cart) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td2.textContent = 'Total:';
    td2.style.fontStyle = 'italic';
    td3.textContent = `$${calcOrderTotal(cart).toFixed(2)}`;

    tr.append(td1, td2, td3);
    return tr;
}