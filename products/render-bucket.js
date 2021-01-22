import {
    addToCart,
    getCart
} from '../cart/cart-api.js';
import { findByID } from '../utils.js';

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
    
    const addItemDiv = document.createElement('div');
    addItemDiv.classList.add('add-items');

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = '1';
    quantityInput.classList.add('add-quantity');

    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.value = bucket.id;
    addButton.textContent = 'Add to cart';

    addItemDiv.append(quantityInput, addButton);

    const pQuantity = document.createElement('p');
    pQuantity.classList.add('quantity');

    addButton.addEventListener('click', () => {
        const addQuantity = quantityInput.valueAsNumber;
        addToCart(bucket.id, addQuantity);
        renderQuantity(bucket.id, pQuantity);
    });

    li.append(h3, img, pDescription, pPrice, addItemDiv, pQuantity);

    return li;
}

function renderQuantity(id, field) {
    const cart = getCart();
    const cartItem = findByID(id, cart);
    const quantityInCart = cartItem.quantity;

    field.textContent = `In your bucket: ${quantityInCart}`;
}