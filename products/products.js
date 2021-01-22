import { seedAndGetProducts } from './product-storage.js';
import { renderBucket } from './render-bucket.js';

const buckets = seedAndGetProducts();
const productDisplay = document.getElementById('bucket-bucket');

for (let bucket of buckets) {
    const bucketEntry = renderBucket(bucket);
    productDisplay.append(bucketEntry);
}