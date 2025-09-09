
// --------------- DARKMODE SETTINGS ---------------
// Identify targets in document
const darkButton = document.querySelector('#dark-btn');
const body = document.body;

// Toggle Darkmode class modifications on/off
darkButton.addEventListener('click', () => {

    body.classList.toggle('darkmode-theme');

    // NEEDS TO REPLACE LOGO WITH DARKMODE LOGO, OR ELSE CHANGE ITS COLOR SOMEHOW

});


