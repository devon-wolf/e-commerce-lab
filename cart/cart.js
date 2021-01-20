import cart from '../data/cart-data.js';
import buckets from '../data/buckets.js';
import { renderTableRow } from './render-table-row.js';
import { findByID } from '../utils.js';

const table = document.querySelector('table');

let total = 0;

for (let item of cart) {
    const bucket = findByID(item.id, buckets);
	
    const totalForItem = item.quantity * bucket.price;
    total = total + totalForItem;

    const tableRow = renderTableRow(item);

    table.append(tableRow);
}

/*
const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `$${total}`;
*/