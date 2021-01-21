import { addToCart } from '../cart/cart-api.js';

export function renderBucket(bucket) {
    const li = document.createElement('li');
    li.classList.add('product-entry');

    const h3 = document.createElement('h3');
    h3.textContent = bucket.name;

    const img = document.createElement('img');
    img.src = `../assets/${bucket.image}`;

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = bucket.description;

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${bucket.price}`;

    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.value = bucket.id;
    addButton.textContent = 'Add to cart';

    addButton.addEventListener('click', () => addToCart(bucket));

    li.append(h3, img, pDescription, pPrice, addButton);
    return li;
}