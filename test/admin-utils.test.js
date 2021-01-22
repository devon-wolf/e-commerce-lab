import { addProduct } from '../admin/admin-utils.js';

const test = QUnit.test;

test('It should take an item and append it to the end of the products array in localStorage', (expect) => {
    const newBucket = {
        id: 7,
        name: 'Plucket',
        image: 'plucket.jpg',
        description: 'A bucket for your castoff flower petals or chicken parts.',
        category: 'agricultural',
        price: 15
    };

    addProduct(newBucket);

    const stringyProducts = localStorage.getItem('PRODUCTS');
    const parsedProducts = JSON.parse(stringyProducts);

    const expected = newBucket;
	
    const actual = parsedProducts[parsedProducts.length - 1];

    expect.deepEqual(actual, expected);
});