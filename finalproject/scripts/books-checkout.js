
function checkout() {

    const reserveInfo = new URLSearchParams(window.location.search);

    const firstName = reserveInfo.get('first');
    const lastName = reserveInfo.get('last');

    let booklist = [];

    const time = reserveInfo.get('timestamp');



    document.querySelector('#reserveData').innerHTML = `
    
    First Name: ${first}<br>
    Last Name: ${last}<br>
    Selected Books: ${booklist}
    
    Reserve Date: ${time};
    `;


};


export { checkout };