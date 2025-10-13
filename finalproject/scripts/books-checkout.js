
const reserveInfo = new URLSearchParams(window.location.search);

const firstName = reserveInfo.get('first');
const lastName = reserveInfo.get('last');

let booklist = reserveInfo.getAll('book-select');

const time = reserveInfo.get('timestamp');

let bookListItems = '';
if (booklist.length > 0) {
    bookListItems = '<ul>';
    booklist.forEach(book => {
        bookListItems += `<li>${book}</li>`;
    });
    bookListItems += '</ul>';
}
else {
    bookListItems = 'No books selected.'
}

document.querySelector('#reserveData').innerHTML = `
    
    Your name: ${firstName} ${lastName}
    <br>
    Selected Books: ${bookListItems}
    <br>
    <br>
    Reserve Date: ${time}
    `;