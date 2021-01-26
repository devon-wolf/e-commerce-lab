import { findByID, identifyStoredItem, removeObject } from '../utils.js';
import { getCart, setCart } from '../cart/cart-api.js';

const test = QUnit.test;

// test findByID
test('It should take in an ID and an array and return the item in that array that has the provided ID.', (expect) => {
    const buckets = [
        {
            id: 1,
            name: 'The Wail Pail',
            image: 'wail-pail.jpg',
            description: 'A bucket to hold your tears.',
            category: 'self-help',
            price: 35
        }, 
        {
            id: 2,
            name: 'The Mail Pail',
            image: 'mail-pail.jpg',
            description: 'A bucket for documents.',
            category: 'logistics',
            price: 45
        }, 
        {
            id: 3,
            name: 'The Snail Pail',
            image: 'snail-pail.jpg',
            description: 'A set of buckets for snail collection.',
            category: 'culinary',
            price: 40
        }, 
        {
            id: 4,
            name: 'The Rucket',
            image: 'rucket.jpg',
            description: 'Like a rucksack, but a bucket.',
            category: 'utility',
            price: 60
        }, 
        {
            id: 5,
            name: 'The Mucket',
            image: 'mucket.jpg',
            description: 'An ordinary looking bucket, for muck.',
            category: 'agricultural',
            price: 25
        }, 
        {
            id: 6,
            name: 'The Trucket',
            image: 'trucket.jpg',
            description: 'A big bucket with wheels.',
            category: 'oversized',
            price: 750
        }];

    const expected = {
        id: 3,
        name: 'The Snail Pail',
        image: 'snail-pail.jpg',
        description: 'A set of buckets for snail collection.',
        category: 'culinary',
        price: 40
    };
    
    const actual = findByID(3, buckets);

    expect.deepEqual(actual, expected);
});

// test identifyStoredItem

// test without other functions
test('It should correctly identify an item in local storage by its ID', (expect) => {
    const cart = [
        {
            id: 2,
            quantity: 1
        },
        {
            id: 5,
            quantity: 3
        },
        {
            id: 1,
            quantity: 4
        }
    ];

    const stringyCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringyCart);
    
    const storedCart = localStorage.getItem('CART');

    const actual = identifyStoredItem(5, JSON.parse(storedCart));

    const expected = {
        id: 5,
        quantity: 3
    };

    expect.deepEqual(actual, expected);
});

// test with getCart
test('It should correctly identify an item in local storage by its ID using getCart', (expect) => {
    const cart = [
        {
            id: 2,
            quantity: 1
        },
        {
            id: 5,
            quantity: 3
        },
        {
            id: 1,
            quantity: 4
        }
    ];

    const stringyCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringyCart);
    
    const actual = identifyStoredItem(5, getCart());

    const expected = {
        id: 5,
        quantity: 3
    };

    expect.deepEqual(actual, expected);
});

// test using storage set with setCart, retrieved with getCart
test('It should correctly identify an item stored with setCart and retrieved with getCart based on its ID', (expect) => {
    const cart = [
        {
            id: 2,
            quantity: 1
        },
        {
            id: 5,
            quantity: 3
        },
        {
            id: 1,
            quantity: 4
        }
    ];

    setCart(cart);

    const actual = identifyStoredItem(5, getCart());

    const expected = {
        id: 5,
        quantity: 3
    };

    expect.deepEqual(actual, expected);
});

// test removeObject
test('It should take in an array of objects, remove the target object, and return the array without that object.', (expect) => {
    const cart = [
        {
            id: 2,
            quantity: 1
        },
        {
            id: 5,
            quantity: 3
        },
        {
            id: 1,
            quantity: 4
        }
    ];
    const actual = removeObject({ id: 5, quantity: 3 }, cart);
    const expected = [
        {
            id: 2,
            quantity: 1
        },
        {
            id: 1,
            quantity: 4
        }
    ];
    expect.deepEqual(actual, expected);
});
