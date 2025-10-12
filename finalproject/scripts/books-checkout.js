
const reserveInfo = new URLSearchParams(window.location.search);


const firstName = reserveInfo.get('first');
const lastName = reserveInfo.get('last');

let booklist = [];

const time = reserveInfo.get('timestamp');



document.querySelector('#reserveData').innerHTML = `
    
    First Name: ${firstName}<br>
    Last Name: ${lastName}<br>
    Selected Books: ${booklist}<br>
    <br>
    Reserve Date: ${time}
    `;



// export { checkout };