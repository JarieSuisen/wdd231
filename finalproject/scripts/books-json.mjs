
// const bookJson = './data/books.json';

async function parseJson(json) {

    // eventbox.innerHTML = '';

    const response = await fetch(json);
    const data = await response.json();

    // console.table(data['books']);

    if (data != []) {
        return data['books'];
    }
    else {
        console.log('ERROR IN books-json.mjs')
    }
};



export { parseJson };