import makeTable from './books-listing.mjs';
// import { ??? } from './???.mjs';
import { parseJson } from './books-json.mjs';
import { checkout } from './books-checkout.mjs';

const bookJson = './data/books.json';

const bookList = document.querySelector('#filterlist');

const checkoutBox = document.querySelector('#checkout');

// parseJson(bookJson);

makeTable(parseJson(bookJson));
// makeTable();

checkout();


// OPERATIONAL CODE HERE