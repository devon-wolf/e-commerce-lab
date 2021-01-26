import { seedAndGetProducts } from '../products/product-storage.js';
import { renderProductInList, submitProductForm } from './admin-utils.js';

const productForm = document.getElementById('add-new-bucket');
const productList = document.getElementById('admin-products');
const products = seedAndGetProducts();

productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitProductForm(productForm);
});

for (let product of products) {
    const productEntry = renderProductInList(product);
    productList.append(productEntry);
}