import buckets from '../data/buckets.js';
import { getOrSeed } from '../utils.js';

const PRODUCTS = 'PRODUCTS';

export function seedAndGetProducts() {
    return getOrSeed(PRODUCTS, buckets);
}