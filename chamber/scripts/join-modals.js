
// CONSTRUCT THE JSON STUFF
const tiersData = [

    {
        rank: 'Non Profit',
        cost: 'Free',
        benefits: '(General Support)',
    },

    {
        rank: 'Bronze',
        cost: '$20',
        benefits: '(Some more benefits)',
    },

    {
        rank: 'Silver',
        cost: '$65',
        benefits: '(A BUNCH OF BENEFITS!)',
    },

    {
        rank: 'Gold',
        cost: '$100',
        benefits: '(ALL BENEFITS!)',
    }

];


// CONSTRUCT THE CALLS FROM THE HTML

// const modal = document.querySelector("#display");
const cards = document.querySelector('#membership-cards');
const modal = document.querySelector('#membership-details');

// const detailSelect = document.querySelector("#membership-details");
// const modalGold = document.querySelector("#membership-gold");
// const modalSilver = document.querySelector("#membership-silver");
// const modalBronze = document.querySelector("#membership-bronze");
// const modalNp = document.querySelector("#membership-np");


function membershipDisplay(membershipData) {

    // console.log('REACHED HERE');

    // document.querySelector('.membershipCards').innerHTML = "";

    // console.table(membershipData);

    membershipData.forEach(tier => {
        
        // console.table(tier);

        // CREATE ELEMENTS
        let displayCard = document.createElement('section');
        let displayText = document.createElement('h2');
        let button = document.createElement('button');

        
        // EXTRACT DATA
        let rank = tier['rank'];
        // let cost = tier['cost'];
        // let benefits = tier['benefits'];

        // ASSIGN TEXT FOR HTML CONTENT
        displayText.textContent = `${rank} Membership Level`;
        button.textContent = 'Learn More';

        // ASSIGN CLASSES TO HTML OBJECTS
        displayCard.classList.add('membership');
        displayText.classList.add('cardText');
        button.classList.add('modal-btn');

        // APPEND CHILDREN TO PARENTS

        displayCard.appendChild(displayText);
        displayCard.appendChild(button);

        // document.querySelector('.membership-cards').innerHTML.appendChild(displayCard);
        cards.appendChild(displayCard);

// ADD EVENT LISTENER
        button.addEventListener('click', () => {
            displayMembershipDetails(tier);
        });


    })

};



function displayMembershipDetails(membership) {
    modal.innerHTML = '';
    modal.innerHTML = `
        <div id="modal" class="popup-membership ${membership.rank}">
        <button id="closeModal">❌</button>
        <h2>${membership.rank}</h2>
        <p><strong>Cost: </strong>${membership.cost}</p>
        <p><strong>Benefits: </strong>${membership.benefits}</p>
        </div>
    `;
    modal.showModal();

    // const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}



membershipDisplay(tiersData);




























// -----------------------------------------------------------------------------------------



// detailSelect.addEventListener('click', () => {

//     const memberLevel = detailSelect.parentElement.getAttribute();
//     // IS THIS CORRECT AT ALL??!!

//     console.log(memberLevel);

//     displayMembershipDetails(memberLevel);
// });

// function displayMembershipDetails(level) {

//     let rank = '';
//     let cost = ''; // THIS WILL BE A $Value, not a single number
//     let benefits = '';

//     if (level === np) {
//         rank = 'Non Profit';
//         cost = 'Free';
//         benefits = '(General Support)';
//     }

//     if (level === bronze) {
//         rank = 'Non Profit';
//         cost = '$20';
//         benefits = '(Some more benefits)';
//     }

//     if (level === silver) {
//         rank = 'Non Profit';
//         cost = '$65';
//         benefits = '(A BUNCH OF BENEFITS!)';
//     }

//     if (level === gold) {
//         rank = 'Gold';
//         cost = '$100';
//         benefits = '(ALL BENEFITS!)';
//     }


//     detailSelect.innerHTML = `
//         <div id="modal" class="popup-membership ${rank}">
//         <button id="closeModal">❌</button>
//         <h2>${rank}</h2>
//         <p><strong>Cost: </strong>${cost}</p>
//         <p><strong>Benefits: </strong>${benefits}</p>
//         </div>
//     `;

//     closeModal.addEventListener("click", () => {
//         detailSelect.close();
//     });



// };

// // // USE THE FOLLOWING AS THE TARGET DESIGN FOR THE GENERATED MODAL POP-UP
// // <div id="modal" class="popup-membership non-profit">
// //     <button id="closeModal">❌</button>
// //     <h2>Non-profit</h2>
// //     <p><strong>Cost: </strong>Free</p>
// //     <p><strong>Benefits: </strong> Some Benefits</p>
// // </div>
// // // END EXAMPLE



// // function displayCourseDetails(course) {
// //     courseDetails.innerHTML = '';
// //     courseDetails.innerHTML = `
// //                 <button id="closeModal">❌</button>
// //                 <h2>${course.subject} ${course.number}</h2>
// //                 <h3>${course.title}</h3>
// //                 <p><strong>Credits</strong>: ${course.credits}</p>
// //                 <p><strong>Certificate</strong>: ${course.certificate}</p>
// //                 <p>${course.description}</p>
// //                 <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
// //             `;
// //     courseDetails.showModal();

// //     closeModal.addEventListener("click", () => {
// //         courseDetails.close();
// //     });
// // }