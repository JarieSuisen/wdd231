// Use your JSON data source of chamber members to display 'spotlight' advertisement cards.
//      display two or three members
//      member must be gold or silver members
//      RANDOMLY load 'spotlights' each time the page is rendered
//      display their company name, logo, phone, address, website, and membership level.



// CURRENTLY SETTING TO A FIXED DESTINATION RATHER THAN RELATIVE BECAUSE I"M TIRED
const source = './data/members.json';

const cards = document.querySelector('#spotlight');


// SCREENWIDTH CALL ----------------------------------------
// let screenWidth = 0; // current width of the screen

function resizeValue() {

    const wideView = window.innerWidth >= 608; // Any value of this or greater is considered "wide"

    let screenView = '';
    if (wideView) {
        screenView = 'wide';
    }
    else {
        screenView = 'narrow';
    }
    return screenView;
};



screenWidth();
window.addEventListener('resize', screenWidth);

// SCREENWIDTH CALL END ----------------------------------------

//-----------------++++++++++++++++++++++++++


// ARGH. NOT SURE WHY IT IS NOT HIDING THE THIRD ITEM

function screenWidth() {

    // let cardCount = 2;
    const spotlightCards = document.querySelectorAll('.spotlight-card');

    if (spotlightCards.length > 0) {
        if (resizeValue() === 'wide') {
            spotlightCards[2].style.display = 'block';
        }
        else {
            spotlightCards[2].style.display = 'hide';
        };
    };

};



function filterItems(list) {
    if (!list.companies) return [];

    const filteredList = list.companies.filter(company =>
        company.membership > 1
    );

    // console.log('FILTERED LIST');
    // console.table(filteredList);

    return filteredList;

    // return filteredList;

    // console.log('FILTERED LIST');
    // console.table(filteredList); // VERIFY THE FILTER TABLE WORKS
};


function randomizeItems(list) {
    if (!list || list.length === 0) return [];

    // const count = screenWidth;
    let randomList = list.sort(() => Math.random() - 0.5).slice(0, 3);
    // console.log('RANDOM LIST');
    // console.table(list); // VERIFY THE RANDOM TABLE WORKS
    return randomList;
};



//-----------------++++++++++++++++++++++++++

let companyData = [];

async function getCompanyData() {

    cards.innerHTML = ''; // CLEARS THE SECTION FOR THE NEW CONTENT

    const response = await fetch(source);
    const data = await response.json();
    // console.table(data['companies']); // COMMENT ME - SHOWS IN BROWSER CONSOLE IF ARRAY IS READ CORRECTLY.

    const dataFiltered = filterItems(data);
    const dataRandom = randomizeItems(dataFiltered);

    displayCompanies(dataRandom);



};
getCompanyData();



function displayCompanies(companies, view) {

    // console.table(companies);

    // cards.className = `${view}-view`; // adds the class of either 'grid' or 'list' for CSS Styling to entire group of cards.


    companies.forEach(company => {
        // CREATE PAGE ELEMENTS
        const card = document.createElement('section');
        card.classList.add(`spotlight-card`); // // adds the "spotlight-card" class CSS Styling to individual card.
        card.classList.add(`card`); // // adds the "spotlight-card" class CSS Styling to individual card.

        const companyName = document.createElement('h3');
        const companyAddress = document.createElement('p');
        const companyPhone = document.createElement('p');
        const companyUrl = document.createElement('a');
        const companyLogo = document.createElement('img');
        const companyMembership = document.createElement('p');
        // const companyOther = document.createElement('p');


        // MAKE VARIABLES CONTAINING DESIRED INFORMATION

        const name = company['name'];
        const address = company['address'];
        const phone = company['phone'];
        const url = company['url'];
        const src = company['logo']; // this is set as the 'src' attribute to call the image
        const membershipRating = company['membership']; // ------ THIS IS NOT EVEN USED???
        // const other = company['other']; // ------ THIS IS NOT EVEN USED???
        let membership = '';

        if (membershipRating === 3) {
            membership = 'Gold Member'
        }
        else {
            membership = 'Silver Member'
        }
        // TEST READING DATA CORRECTLY
        // console.log(`name: ${name}`) // COMMENT ME - SHOWS THAT ITEM IS BEING READ CORRECTLY


        // ASSIGN ATTRIBUTES AND CONTENT FOR APPROPRIATE ELEMENTS

        // --- VARIABLES FOR IMAGE
        const alt = `Logo for ${name}.`;
        const loading = 'lazy';
        const width = 75; // --------- CAN BE ADJUSTED AS DESIRED
        const height = 75; // --------- CAN BE ADJUSTED AS DESIRED
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
        companyMembership.textContent = membership;



        // BUILD ELEMENT TREE BY ASSIGNING FROM LOWEST TO HIGHEST, IN ORDER DESIRED FOR DISPLAY

        // --- CARD LAYOUT
        // LOGO, ADDRESS< PHONE< URL
        card.appendChild(companyName)
        card.appendChild(companyLogo);
        card.appendChild(companyPhone);
        card.appendChild(companyAddress);
        card.appendChild(companyUrl);
        card.appendChild(companyMembership);

        // ASSIGN CARD ELEMENT TO THE CARDS ITEM FOR DISPLAY
        cards.appendChild(card);
    })

};
