import { renderTableRow } from '../cart/render-table-row.js';

const test = QUnit.test;

test('It should take an object in the cart and return an HTML table row with its name, quantity, and total price', (expect) => {
    const cartItem = {
        id: 2,
        quantity: 3
    };

    const expected = `<tr><td>The Mail Pail</td><td>3</td><td>$135.00</td></tr>`;
    
    const dom = renderTableRow(cartItem);
    const html = dom.outerHTML;

    expect.equal(html, expected);
});