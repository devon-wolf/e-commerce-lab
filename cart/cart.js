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
    if (cart.length > 0) {
        const cartSummary = JSON.stringify(cart, true, 2);
        alert(`Nice. You got some buckets. See if you can understand this nonsense:\n${cartSummary}`);
    
        clearCart();
    
    // redirect
        window.location.replace('../');
    }
    
});