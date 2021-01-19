export function renderBucket(bucket) {
    const li = document.createElement('li');
    li.classList.add('product-entry');

    const h3 = document.createElement('h3');
    h3.textContent = bucket.name;
    li.append(h3);

    const img = document.createElement('img');
    img.src = `./assets/${bucket.image}`;
    li.append(img);

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = bucket.description;
    li.append(pDescription);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${bucket.price}`;
    li.append(pPrice);

    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.value = bucket.id;
    addButton.textContent = 'Add to cart';
    li.append(addButton);

    return li;

}