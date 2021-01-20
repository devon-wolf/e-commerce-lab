import { renderBucket } from '../products/render-bucket.js';

const test = QUnit.test;

test('Should render a JS object into an HTML object when given the JS object (see details in variables)', (expect) => {
    const wailPail = {
        id: 1,
        name: 'The Wail Pail',
        image: 'wail-pail.jpg',
        description: 'A bucket to hold your tears.',
        category: 'self-help',
        price: 35
    };

    const expected = `<li class="product-entry"><h3>The Wail Pail</h3><img src="../assets/wail-pail.jpg"><p class="description">A bucket to hold your tears.</p><p class="price">$35</p><button class="add-button" value="1">Add to cart</button></li>`;
    
    const dom = renderBucket(wailPail);
    const html = dom.outerHTML;

    expect.equal(html, expected);
});
