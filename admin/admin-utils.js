import { seedAndGetProducts } from '../products/product-storage.js';

const PRODUCTS = 'PRODUCTS';

export function addProduct(product) {
    const products = seedAndGetProducts();
    products.push(product);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function submitProductForm() {
	
}