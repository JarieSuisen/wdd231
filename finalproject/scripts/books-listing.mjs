
function makeTable(jsondata) {

    // console.table(jsondata);

    const bookList = document.querySelector('#filterlist');

    jsondata.forEach(book => {

        // console.table(book);

        // CREATE ITEM CARD FOR BOOK DETAILS
        const card = document.createElement('section');
        card.classList.add('book-card');

        const details = document.createElement('div');
        details.classList.add('book-details');

        // CREATE JSON DETAIL ELEMENT CONTAINERS
        const bookTitle = document.createElement('p');
        bookTitle.classList.add('title')
        const bookSeries = document.createElement('p');
        // const bookVolume = document.createElement('p');
        const bookAuthor = document.createElement('p');
        // const bookGenre = document.createElement('p');
        // const bookBlurb = document.createElement('p');
        // const bookLanguage = document.createElement('p');
        // const bookFormat = document.createElement('p');

        // CREATE CHECKBOX FOR ITEM
        const checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.type = ('checkbox');
        // checkbox.id = (`book-${bookTitle}`);
        checkbox.name = ('book-select');
        checkbox.value = book.title;

        bookTitle.textContent = `${book.title}`;
        bookTitle.style.fontWeight = 'bold';
        bookTitle.classList.add('book-title');

        bookSeries.textContent = `Series: ${book.series}, Vol. ${book.volume}, (${book.language})`;
        bookSeries.classList.add('book-series');

        // bookVolume.textContent = `Vol. ${book.volume}`;
        // bookVolume.classList.add('book-volume');

        bookAuthor.textContent = `Author: ${book.author}`;
        bookAuthor.classList.add('book-author');

        // bookGenre.textContent = `Genre: ${book.genre}`;
        // bookBlurb.textContent = `Blurb: ${book.blurb}`;
        // bookLanguage.textContent = `Language: ${book.language}`;
        // bookFormat.textContent = `Format: ${book.format}`;

        // APPEND ITEMS TO CARD
        card.appendChild(bookTitle);

        details.appendChild(bookSeries);
        details.appendChild(bookAuthor);

        card.appendChild(details);

        card.appendChild(checkbox);

        // APPEND CARD TO HTML OBJECT
        bookList.appendChild(card);

    });
}

export default makeTable;