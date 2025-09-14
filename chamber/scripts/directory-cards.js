// CURRENTLY SETTING TO A FIXED DESTINATION RATHER THAN RELATIVE BECAUSE I"M TIRED
const source = './data/members.json';

const cards = document.querySelector('#cards');


async function getCompanyData(view) {

    cards.innerHTML = ''; // CLEARS THE SECTION FOR THE NEW CONTENT

    const response = await fetch(source);
    const data = await response.json();
    // console.table(data['companies']); // COMMENT ME - SHOWS IN BROWSER CONSOLE IF ARRAY IS READ CORRECTLY.

    displayCompanies(data['companies'], view);


    // if (view === 'grid') {
    //     // console.log('LOADING GRID'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
    //     displayCompanies(data['companies'], view);
    //     // console.table(data['companies']) // COMMENT ME - SHOWS TABLE IN CONSOLE
    // }
    // else if (view === 'list') {
    //     // console.log('LOADING LIST'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
    //     displayCompanies(data['companies'], view);
    //     // console.table(data['companies']) // COMMENT ME - SHOWS TABLE IN CONSOLE
    // };

    // displayCompanies(jsonArray); // THIS CALLS THE OPERATION THAT WILL DISPLAY THE INFORMATION.
};

getCompanyData('grid'); // TRIGGERS THE LAYOUT indicated as default

// // GRID MODE
// function displayCompaniesGrid(companies) {
//     companies.forEach(company => {
//         const card = buildCompanyData(company);

//         // BUILD DATA CARD HERE

//         // BUILD ELEMENT TREE BY ASSIGNING FROM LOWEST TO HIGHEST, IN ORDER DESIRED FOR DISPLAY

//         // --- CARD LAYOUT
//         // LOGO, ADDRESS< PHONE< URL
//         card.appendChild(companyLogo);
//         card.appendChild(companyAddress);
//         card.appendChild(companyPhone);
//         card.appendChild(companyUrl);


//         // ASSIGN CARD ELEMENT TO THE CARDS ITEM FOR DISPLAY
//         cards.appendChild(card);



//     });

// };



// // LIST MODE
// function displayCompaniesList(companies) {
//     companies.forEach(company => {
//         buildCompanyData(company);

//         // BUILD DATA LIST HERE


//     });

// };


function displayCompanies(companies, view) {

    cards.className = view; // adds the class of either 'grid' or 'list' for CSS Styling to entire group of cards.

    companies.forEach(company => {
        // CREATE PAGE ELEMENTS
        const card = document.createElement('section');
        card.classList.add(`${view}-card`); // // adds the class of either 'grid-card' or 'list-card' for CSS Styling to individual card.

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
        const src = company['logo']; // this is set as the 'src' attribute to call the image
        // const membership = company['membership']; // ------ THIS IS NOT EVEN USED???
        // const other = company['other']; // ------ THIS IS NOT EVEN USED???

        // TEST READING DATA CORRECTLY
        // console.log(`name: ${name}`) // COMMENT ME - SHOWS THAT ITEM IS BEING READ CORRECTLY


        // ASSIGN ATTRIBUTES AND CONTENT FOR APPROPRIATE ELEMENTS

        // --- VARIABLES FOR IMAGE
        const alt = `Logo for ${name}.`;
        const loading = 'lazy';
        const width = 100; // --------- CAN BE ADJUSTED AS DESIRED
        const height = 100; // --------- CAN BE ADJUSTED AS DESIRED
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


        // BASED ON GRID OR LIST, DO ONE OF THE FOLLOWING
        if (view === 'grid') {

            // BUILD ELEMENT TREE BY ASSIGNING FROM LOWEST TO HIGHEST, IN ORDER DESIRED FOR DISPLAY

            // --- CARD LAYOUT
            // LOGO, ADDRESS< PHONE< URL
            card.appendChild(companyLogo);
            card.appendChild(companyAddress);
            card.appendChild(companyPhone);
            card.appendChild(companyUrl);
        }

        else if (view === 'list') {
            //NAME, ADDRESS, PHONE, URL
            card.appendChild(companyName);
            card.appendChild(companyAddress);
            card.appendChild(companyPhone);
            card.appendChild(companyUrl);
        };

        // ASSIGN CARD ELEMENT TO THE CARDS ITEM FOR DISPLAY
        cards.appendChild(card);
    })

};

document.addEventListener('DOMContentLoaded', () => {

    // START BUTTON RULES ---------
    const gridButton = document.querySelector('#btn-grid');
    const listButton = document.querySelector('#btn-list');

    gridButton.addEventListener('click', () => {
        // console.log('CLICK - Grid Button'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
        getCompanyData('grid');

    });
    listButton.addEventListener('click', () => {
        // console.log('CLICK - List Button'); // COMMENT ME - SHOWS IN CONSOLE IF THIS IS BEING CALLED
        getCompanyData('list');

    });


    // END BUTTON RULES ---------
});