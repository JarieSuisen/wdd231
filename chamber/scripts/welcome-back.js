// GATHER TARGETS FROM HTML
const welcome = document.querySelector("#welcome-back");

// const localStorageItem = '';//SET THIS UP TO READ THE LOCAL STORAGE TO GET THE LAST-VISITED TIMESTRING


welcomeBackMessage();

function welcomeBackMessage() {

    let reply = 'EVERYTHING FAILED SO FAR';


    // SET THE CURRENT TIME AND HTE LAST VISIT TIME
    const time = new Date();

    // console.log(`The current parsed time is: ${Date(time)}`);
    // console.log(`The current time is: ${time}`);

    // time = new Date(time + 8640000000000000000);
    // console.log(`THE UPDATED TIME FOR THE FUTURE IS: ${time}`)

    // const oneDay = 86400000;//UPDATE THIS TO THE CORRECT VALUE IN MILLISECONDS!!!
    // one day is: 86400000 milliseconds



    try {

        const lastVisitString = readDatestring();


        if (lastVisitString !== 'NOTHING HAS BEEN LOADED HERE') {

            // THERE IS A LOCAL STORAGE ITEM, AND THE LAST VISIT DATE HAS BEEN RECOVERED
            // console.log(`SUCCESSFUL READ. THE CONTENTS OF THE READ DATA: ${lastVisitString}`);

            const lastVisit = new Date(lastVisitString);
            // console.log(`The Last Visit Datestring is: ${lastVisitString}`)


            // SET A FUTURE DATE



            // console.log(time.getFullYear());
            // console.log(lastVisit.getFullYear());
            // console.log(time.getMonth());
            // console.log(lastVisit.getMonth());
            // console.log(time.getDate());
            // console.log(lastVisit.getDate());


            if (time.getFullYear() === lastVisit.getFullYear() && time.getMonth() === lastVisit.getMonth() && time.getDay() === lastVisit.getDay()) {
                // console.log(`${time} - ${lastVisit} = ${time - lastVisit} <= ${oneDay}`)
                // console.log('THIS IS A NEW VISIT WITHIN THE SAME DAY');
                reply = 'Back so soon! Awesome!';
            }

            // THERE HAS BEEN MORE THAN ONE DAY PASSED, SO SAY HOW MANY DAYS HAVE PASSED
            else {
                const timeDifference = (time - lastVisit);// CONVERT THIS VALUE INTO A NUMBER OF DAYS
                daysPassed = Math.round(timeDifference / 86400000);
                if (daysPassed > 0) {
                    reply = `You last visited ${daysPassed} days ago.`
                }
                else {
                    reply = 'WELCOME BACK, TIME TRAVELER.'
                };

            };
        }

        // THERE IS NO LOCAL STORAGE ITEM, SO IT IS A FIRST VISIT
        else {
            // THERE WAS NO LOCAL STORAGE ITEM, SO THE FOLLOWING IS PRESENTED FOR THE FIRST VISITATION
            reply = 'Welcome! Let us know if you have any questions.';
        }


    }
    catch (error) {
        console.error(error);
        console.text('AN ERROR HAS OCCURED, DUMMY. - VIA CONSOLE.TEXT');
        console.log('AN ERROR HAS OCCURED, DUMMY. - VIA CONSOLE.LOG');
    };

    welcome.innerHTML = reply;

    storeDatestring();
};







// STORES THE DATESTRING FOR LATER CALLS

function storeDatestring() {

    const visitNow = new Date();

    // let newComment = document.querySelector('textarea');

    // commentList.push(newComment.value);

    // localStorage.setItem("lastVisit", JSON.stringify(visitNow));
    localStorage.setItem("lastVisit", visitNow);

};






// READS THE DATESTRING OF THE LAST VISIT THAT WAS STORED BY storeDatestring

function readDatestring() {

    let lastVisit = 'NOTHING HAS BEEN LOADED HERE';

    const readDate = window.localStorage.getItem("lastVisit")


    if (readDate) {
        console.log(`THE READ DATE IS: ${readDate}`)

        const date = Date.parse(readDate);
        // console.log(`THE PARSED READ DATE IS: ${date}`)

        lastVisit = date;
    }

    else {
        console.log('THERE IS NO DATE SAVED TO READ. THIS IS THE FIRST VISIT')

    };



    return lastVisit;


};