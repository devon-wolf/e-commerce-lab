import { seedAndGetProducts } from '../products/product-storage.js';

const PRODUCTS = 'PRODUCTS';

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
	
    console.log(product); // success
	
    addProduct(product);
}