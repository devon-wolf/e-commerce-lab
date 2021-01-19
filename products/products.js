import { renderBucket } from './render-bucket.js';
import buckets from '../data/buckets.js';

const productDisplay = document.getElementById('bucket-bucket');

for (let bucket of buckets) {
    const bucketEntry = renderBucket(bucket);
    productDisplay.append(bucketEntry);
}