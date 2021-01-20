import {
    calcItemTotal,
    calcOrderTotal
} from '../utils.js';

const test = QUnit.test;

test('It should take a cart item with an ID of 5 and quantity of 10 and return 250.00', (expect) => {
    const expected = 250.00;
    
    const actual = calcItemTotal({
        id: 5,
        quantity: 10
    });

    expect.equal(actual, expected);
});

test('It should take a cart with item totals of $35, $135, and $250 and return a final total of 420.00', (expect) => {
    const expected = 420.00;
    
    const actual = calcOrderTotal(cart);

    expect.equal(actual, expected);
});