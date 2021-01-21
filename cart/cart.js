import cart from '../data/cart-data.js';
import {
    renderTableRow,
    renderTotalRow
} from './render-utils.js';

const table = document.querySelector('tbody');
const tableFooter = document.querySelector('tfoot');

for (let item of cart) {
    const tableRow = renderTableRow(item);
    table.append(tableRow);
}

const totalRow = renderTotalRow(cart);
tableFooter.append(totalRow);