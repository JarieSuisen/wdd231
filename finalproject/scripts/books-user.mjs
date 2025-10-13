
// let userFirst = '';
// let userLast = '';


function readuser() {
    // console.log('THIS IS also WORKING');
    
    // const first = document.querySelector('input[name="first"]').value;
    // const last = document.querySelector('input[name="last"]').value;

    try {

        const userFirst = localStorage.getItem('username-first');
        const userLast = localStorage.getItem('username-last');

        // console.log('First Name:', userFirst);
        // console.log('Last Name:', userLast);

        const firstName = document.querySelector('input[name="first"]');
        const lastName = document.querySelector('input[name="last"]');

        if (userFirst) {    
            if (firstName) firstName.value = userFirst;
        }

        if (userLast) {            
            if (lastName) lastName.value = userLast;
        }



        return { userFirst, userLast };





    }

    catch {
        // console.log('NOTHING FOUND')
        return { userFirst: null, userLast: null };
    }




};


function storeuser(first, last) {
    // console.log('THIS IS WORKING');

    localStorage.setItem('username-first', first);
    localStorage.setItem('username-last', last);

    // console.log(`User data stored: First: ${first} Last: ${last}`)



};




export { storeuser };
export { readuser };