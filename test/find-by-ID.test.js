import { findByID } from '../utils.js';


const test = QUnit.test;

test('It should take in an ID and an array and return the item in that array that has the provided ID.', (expect) => {
    const buckets = [
        {
            id: 1,
            name: 'The Wail Pail',
            image: 'wail-pail.jpg',
            description: 'A bucket to hold your tears.',
            category: 'self-help',
            price: 35
        }, 
        {
            id: 2,
            name: 'The Mail Pail',
            image: 'mail-pail.jpg',
            description: 'A bucket for documents.',
            category: 'logistics',
            price: 45
        }, 
        {
            id: 3,
            name: 'The Snail Pail',
            image: 'snail-pail.jpg',
            description: 'A set of buckets for snail collection.',
            category: 'culinary',
            price: 40
        }, 
        {
            id: 4,
            name: 'The Rucket',
            image: 'rucket.jpg',
            description: 'Like a rucksack, but a bucket.',
            category: 'utility',
            price: 60
        }, 
        {
            id: 5,
            name: 'The Mucket',
            image: 'mucket.jpg',
            description: 'An ordinary looking bucket, for muck.',
            category: 'agricultural',
            price: 25
        }, 
        {
            id: 6,
            name: 'The Trucket',
            image: 'trucket.jpg',
            description: 'A big bucket with wheels.',
            category: 'oversized',
            price: 750
        }];

    const expected = {
        id: 3,
        name: 'The Snail Pail',
        image: 'snail-pail.jpg',
        description: 'A set of buckets for snail collection.',
        category: 'culinary',
        price: 40
    };
    
    const actual = findByID(3, buckets);

    expect.deepEqual(actual, expected);
});