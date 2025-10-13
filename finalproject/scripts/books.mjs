import makeTable from './books-listing.mjs';
import { timestamp } from './timestamp.mjs';
import { parseJson } from './books-json.mjs';
import { storeuser } from './books-user.mjs';
import { readuser } from './books-user.mjs';
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

readuser();

const form = document.querySelector('#reserve-form')
form.addEventListener('submit', (e) => {
    const userFirst = document.querySelector('input[name="first"]').value;
    // console.log(userFirst);

    const userLast = document.querySelector('input[name="last"]').value;
    // console.log(userLast);

    storeuser(userFirst, userLast);

});