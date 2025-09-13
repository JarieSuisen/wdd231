const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);

    const data = await response.json();

    // console.table(data.prophets);  // Temp., for testing retrieving and reading the JSON correctly

    displayProphets(data.prophets); // This calls for just the needed data, not the entire object. Saves time later.

};

getProphetData();


const displayProphets = (prophets) => {

    prophets.forEach(prophet => {

        // create page elements
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        // populate heading element with prophet's full name
        // FULL VERSION
        const firstName = prophet['name'];
        const lastName = prophet['lastname'];
        const prophetName = `${firstName} ${lastName}`
        fullName.textContent = prophetName;
        // ALTERNATE, COMPACT VERSION, but can't be referenced later
        // fullName.textContent = `${prophet['name']} ${prophet['lastname']}`;

        // Set the image attributes
        const src = prophet['imageurl'];
        const alt = `Portrait of ${prophetName}.`;
        const loading = 'lazy';
        const width = 340;
        const height = 440;
        // Assign attributes to the image element
        portrait.setAttribute('src', src);
        portrait.setAttribute('alt', alt);
        portrait.setAttribute('loading', loading);
        portrait.setAttribute('width', width);
        portrait.setAttribute('height', height);

        // ALSO Date of Birth and Place of Birth fields
        const birthdate = document.createElement('p');
        const birthplace = document.createElement('p');
        const date = prophet['birthdate'];
        const place = prophet['birthplace'];
        birthdate.textContent = `Date of Birth: ${date}`;
        birthplace.textContent = `Place of Birth: ${place}`;


        // Append h2 and img elements to the card section
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });


};



menubutton.addEventListener('click', () => {
  menuitems.classList.toggle('show');
});