import { submitProductForm } from './admin-utils.js';
const productForm = document.getElementById('add-new-bucket');

productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitProductForm(productForm);
});