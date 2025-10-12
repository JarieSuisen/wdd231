
function makeTable(jsondata) {

    console.table(jsondata);

    const bookList = document.querySelector('#filterlist');

    jsondata.forEach(book => {

        console.table(book);

        // CREATE ITEM CARD FOR BOOK DETAILS
        const card = document.createElement('section');
        card.classList.add('book-card');

        // CREATE JSON DETAIL ELEMENT CONTAINERS
        const bookTitle = document.createElement('p');
        const bookSeries = document.createElement('p');
        const bookVolume = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookGenre = document.createElement('p');
        const bookBlurb = document.createElement('p');
        const bookLanguage = document.createElement('p');
        const bookFormat = document.createElement('p');




        // APPEND ITEMS TO CARD
        card.appendChild(bookTitle);
        card.appendChild(bookSeries);
        card.appendChild(bookVolume);
        card.appendChild(bookAuthor);
        card.appendChild(bookGenre);
        card.appendChild(bookBlurb);
        card.appendChild(bookLanguage);
        card.appendChild(bookFormat);

        // APPEND CARD TO HTML OBJECT
        bookList.appendChild(card);

    });



}


export default makeTable;