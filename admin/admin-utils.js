import { seedAndGetProducts } from '../products/product-storage.js';

const PRODUCTS = 'PRODUCTS';

// only exports to the test
export function addProduct(product) {
    const products = seedAndGetProducts();
    products.push(product);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function submitProductForm(form) {
    const productFormData = new FormData(form);

    const product = {
        id: productFormData.get('id'),
        name: productFormData.get('name'),
        image: productFormData.get('image'),
        description: productFormData.get('description'),
        category: productFormData.get('category'),
        price: productFormData.get('price')
    };
	
    addProduct(product);
	
    form.reset();
}


// need to adapt to admin page needs
export function renderProductInList(product) {
    const li = document.createElement('li');
    li.classList.add('product-entry');

    const h4 = document.createElement('h4');
    h4.textContent = product.name;

    const img = document.createElement('img');
    img.src = `../assets/${product.image}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = '-';

    removeButton.addEventListener('click', () => {
        console.log('someone clicked the remove button');
    });

    li.append(h4, img, removeButton);

    return li;
}