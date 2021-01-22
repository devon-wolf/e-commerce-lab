import { addProduct } from './admin-utils.js';
const productForm = document.getElementById('add-new-bucket');

console.log(productForm); // success

productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Someone clicked the form'); // success
	
    const productFormData = new FormData(productForm);

    const product = {
        id: productFormData.get('id'),
        name: productFormData.get('name'),
        image: productFormData.get('image'),
        description: productFormData.get('description'),
        category: productFormData.get('category'),
        price: productFormData.get('price')
    };
	
    console.log(product); // success
	
    addProduct(product);
});