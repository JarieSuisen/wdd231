// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York", "Sacramento", "Cleveland", "South Bend", "Tampa Bay", "Corpus Christi"];
let volume = 409;


function getCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
    // weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric"
};

// Question #1
today1.innerHTML = new Date().toLocaleDateString("en-US", options);

// Question #2
// today2.innerHTML = "<strong>Volume</strong>: " + volume + " liters";
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;

// Question #3
let quantity = "69";
const quantityVal = document.querySelector("#q");
quantityVal["value"] = quantity;

// Question #4
let phrase = "Welcome to <mark>our</mark> neighborhood!";
message.innerHTML = phrase;

// Question #5
let degrees = 33;
conversion = getCelsius(degrees);
const temp = document.querySelector('#temp')
temp['value'] = conversion;

// Question #6
const divs = document.querySelectorAll('div');
document.getElementById('divs').textContent = `${divs} --- I don't know what is actually wanted here. Output WHAT about the divs list??? The instruction seems incomplete!`;

// Question #7
function filternames(list) {
    const cities = list.filter((i) => i[0] === "C");
    return cities;
};

let filterC = filternames(citynames);

document.getElementById('c-names').textContent = filterC;

//TESTING
const test = document.querySelector("#cheese");
test.innerHTML = `${citynames}`;
