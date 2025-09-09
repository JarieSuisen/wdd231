
// --------------- HAMBURGER & NAVI SETTINGS ---------------
// Identify targets in document
const navButton = document.querySelector('#ham-btn');
const navMenu = document.querySelector('#nav-bar')

// Toggle Show hamburger menu class on/off
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navMenu.classList.toggle('show');
});


