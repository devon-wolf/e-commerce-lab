import buckets from '../data/buckets.js';
import { findByID } from '../utils.js';

export function renderTableRow(cartItem) {
    const quantity = cartItem.quantity;
    const bucket = findByID(cartItem.id, buckets);
	
    const tr = document.createElement('tr');

    const nameTD = document.createElement('td');
    const quantityTD = document.createElement('td');
    const priceTD = document.createElement('td');

    nameTD.textContent = bucket.name;
    quantityTD.textContent = quantity;
    priceTD.textContent = `$${(bucket.price * quantity).toFixed(2)}`;
	
    tr.append(nameTD, quantityTD, priceTD);

    return tr;
}