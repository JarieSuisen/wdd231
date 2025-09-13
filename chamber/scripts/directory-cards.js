const source = '/chamber/data/members.json';

const cards = document.querySelector('#cards');


async function getCompanyData(view) {

    cards.innerHTML = ''; // CLEARS THE SECTION FOR THE NEW CONTENT

    const response = await fetch(source);
    const data = await response.json();
    // console.table(jsonArray); // COMMENT ME - SHOWS IN BROWSER CONSOLE IF ARRAY IS READ CORRECTLY.

    if (view === 'grid') {
        console.log('LOADING GRID'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
        displayCompaniesGrid(data['Companies']);
        console.table(data['Companies'])
    }
    else if (view === 'list') {
        console.log('LOADING LIST'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
        displayCompaniesList(data['Companies']);
        console.table(data['Companies'])
    };

    // displayCompanies(jsonArray); // THIS CALLS THE OPERATION THAT WILL DISPLAY THE INFORMATION.
};

getCompanyData('grid'); // TRIGGERS THE LAYOUT indicated as default

// GRID MODE
function displayCompaniesGrid(companies) {
    companies.forEach(company => {
        buildCompanyData(company);

        // BUILD DATA CARD HERE


    });

};

// LIST MODE
function displayCompaniesList(companies) {
    companies.forEach(company => {
        buildCompanyData(company);

        // BUILD DATA LIST HERE


    });

};


function buildCompanyData(company) {

    // CREATE PAGE ELEMENTS
    const card = document.createElement('section');
    const companyName = document.createElement('p');
    const companyAddress = document.createElement('p');
    const companyPhone = document.createElement('p');
    const companyUrl = document.createElement('a');
    const companyLogo = document.createElement('img');
    // const companyMembership = document.createElement('p');
    // const companyOther = document.createElement('p');


    // MAKE VARIABLES CONTAINING DESIRED INFORMATION
    const name = company['name'];
    const address = company['address'];
    const phone = company['phone'];
    const url = company['url'];
    const src = company['image']; // this is set as the 'src' attribute to call the image
    // const membership = company['membership']; // ------ THIS IS NOT EVEN USED???
    // const other = company['other']; // ------ THIS IS NOT EVEN USED???

    // TEST READING DATA CORRECTLY
    console.log(`name: ${name}`)


    // ASSIGN ATTRIBUTES AND CONTENT FOR APPROPRIATE ELEMENTS

    // --- VARIABLES FOR IMAGE
    const alt = `Logo for ${name}.`;
    const loading = 'lazy';
    const width = 400; // --------- CAN BE ADJUSTED AS DESIRED
    const height = 200; // --------- CAN BE ADJUSTED AS DESIRED
    // --- --- ASSIGN VARIABLES
    companyLogo.setAttribute('src', src);
    companyLogo.setAttribute('alt', alt);
    companyLogo.setAttribute('loading', loading);
    companyLogo.setAttribute('width', width);
    companyLogo.setAttribute('height', height);

    // --- VARIABLES FOR URL
    const href = url;
    // --- --- ASSIGN VARIABLES
    companyUrl.setAttribute('href', href);

    // +++ NON-IMAGES
    companyName.textContent = name;
    companyAddress.textContent = address;
    companyPhone.textContent = phone;
    companyUrl.textContent = url;



    // BUILD ELEMENT TREE BY ASSIGNING FROM LOWEST TO HIGHEST, IN ORDER DESIRED FOR DISPLAY

    // --- CARD LAYOUT
    // LOGO, ADDRESS< PHONE< URL
    card.appendChild(companyLogo);
    card.appendChild(companyAddress);
    card.appendChild(companyPhone);
    card.appendChild(companyUrl);


    // ASSIGN CARD ELEMENT TO THE CARDS ITEM FOR DISPLAY
    cards.appendChild(card);


};

// document.addEventListener('DOMContentLoaded', () => {

// START BUTTON RULES ---------
const gridButton = document.querySelector('#btn-grid');
const listButton = document.querySelector('#btn-list');

gridButton.addEventListener('click', () => {
    console.log('CLICK - Grid Button'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
    getCompanyData('grid');

});
listButton.addEventListener('click', () => {
    console.log('CLICK - List Button'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
    getCompanyData('list');

});


// END BUTTON RULES ---------
// });