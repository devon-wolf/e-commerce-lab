import {
    renderTableRow,
    renderTotalRow
} from './render-utils.js';

import {
    clearCart,
    getCart
} from './cart-api.js';

const cart = getCart();

const orderButton = document.getElementById('order');

const table = document.querySelector('tbody');
const tableFooter = document.querySelector('tfoot');

for (let item of cart) {
    const tableRow = renderTableRow(item);
    table.append(tableRow);
}

const totalRow = renderTotalRow(cart);
tableFooter.append(totalRow);

orderButton.addEventListener('click', () => {
    alert('Nice. You got some buckets.');
    clearCart();
    // redirect
    window.location.replace('../');
});