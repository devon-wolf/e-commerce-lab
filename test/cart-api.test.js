import {
    getCart,
    setCart,
    clearCart
} from '../cart/cart-api.js';

const test = QUnit.test;

// test getCart
test('It should get the correct cart from localStorage', (expect) => {
    const expected = [
        {
            id: 2,
            quantity: 1
        },
        {
            id: 5,
            quantity: 3
        }
    ];

    const stringyExpected = JSON.stringify(expected);
    localStorage.setItem('CART', stringyExpected);

    const actual = getCart();

    expect.deepEqual(actual, expected);
});

// test setCart
test('It should correctly set the cart in localStorage', (expect) => {
    const testCart = [
        {
            id: 2,
            quantity: 1
        },
        {
            id: 5,
            quantity: 3
        }
    ];
	
    setCart(testCart);
	
    const expected = JSON.stringify(testCart);
	
    const actual = localStorage.getItem('CART');

    expect.equal(actual, expected);
});

// // test clearCart
// test('', (expect) => {
//     const expected = 
    
//     const actual = 

//     expect.equal(actual, expected);
// });