import makeTable from './books-listing.mjs';
import { timestamp } from './timestamp.mjs';
import { parseJson } from './books-json.mjs';
// import { checkout } from './books-checkout.mjs';

const bookJson = './data/books.json';

// const bookList = document.querySelector('#filterlist');

// const checkoutBox = document.querySelector('#checkout');

const bookData = await parseJson(bookJson);
// console.table(bookData);


// makeTable(parseJson(bookJson));
makeTable(bookData);

// checkout();

timestamp();


// OPERATIONAL CODE HERE