import buckets from '../data/buckets.js';
import { getOrSeed } from '../utils.js';

const PRODUCTS = 'PRODUCTS';
const bucketSeeds = buckets;

export function seedAndGetProducts() {
    return getOrSeed(PRODUCTS, bucketSeeds);
}