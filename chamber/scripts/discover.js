import { places } from '../data/places.mjs';
// console.log(places);

const cards = document.querySelector('#grid-area');

function displayCards() {

    places.forEach(place => {


        // console.log(place);

        // CREATE PAGE ELEMENTS
        const card = document.createElement('section');
        // h2: Title
        const cardH2 = document.createElement('h2');
        // figure: Image
        const cardFigure = document.createElement('img');
        // address: Address
        const cardAddress = document.createElement('address');
        // paragraph: description
        const cardParagraph = document.createElement('p');
        // button: Learn More (BUT WHAT EVEN GOES HERE?!)
        // const cardButton = document.createElement('button'); // UNKOWN PURPOSE


        // ASSIGN ATTRIBUTES TO ELEMENTS
        card.classList = 'card';
        cardH2.classList = 'card-title';
        cardFigure.classList = 'card-image';
        cardAddress.classList = 'card-address';
        cardParagraph.classList = 'card-paragraph';



        // extract content from JSON data
        const title = place["name"];
        // console.log(`The Title is: ${title}`);

        const address = place["address"];
        // console.log(`The address is: ${address}`);

        const imageSrc = `images/${place['photo_url']}`;
        // console.log(`The image is at: ${imageSrc}`);

        const description = place["description"];
        // console.log(`The description is: ${description}`);

        // const cost = place["cost"]; // NOTE: COST IS UNUSED AT THIS POINT FOR NO APPARENT REASON
        // console.log(`The cost is: ${cost}`);


        // ASSIGN TEXT CONTENTS TO ELEMENTS
        cardH2.textContent = title;
        cardAddress.textContent = address;
        cardParagraph.textContent = description;

        // Set Image Attributes
        const alt = `An image for ${title}`;
        const loading = 'lazy';
        // const width = 500;
        // const height = 300;


        // ASSIGN IMAGE STUFF
        cardFigure.setAttribute('src', imageSrc);
        cardFigure.setAttribute('alt', alt);
        cardFigure.setAttribute('loading', loading);
        // cardFigure.setAttribute('width', width);
        // cardFigure.setAttribute('height', height);



        // Assign children to parents
        card.appendChild(cardH2);
        card.appendChild(cardFigure);
        card.appendChild(cardAddress);
        card.appendChild(cardParagraph);
        // card.appendChild(cardButton); // AT THIS POINT, UNKNOKWN PURPOSE


        cards.appendChild(card);



    })

};
displayCards();














// 
