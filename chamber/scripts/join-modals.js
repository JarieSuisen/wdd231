

// const modal = document.querySelector("#display");
const detailSelect = document.querySelector("#membership-details");
const modalGold = document.querySelector("#membership-gold");
const modalSilver = document.querySelector("#membership-silver");
const modalBronze = document.querySelector("#membership-bronze");
const modalNp = document.querySelector("#membership-np");



detailSelect.addEventListener('click', () => {

    const memberLevel = detailSelect.parentElement.getAttribute();
    // IS THIS CORRECT AT ALL??!!

    console.log(memberLevel);

    displayMembershipDetails(memberLevel);
});

function displayMembershipDetails(level) {

    let rank = '';
    let cost = ''; // THIS WILL BE A $Value, not a single number
    let benefits = '';

    if (level === np) {
        rank = 'Non Profit';
        cost = 'Free';
        benefits = '(General Support)';
    }

    if (level === bronze) {
        rank = 'Non Profit';
        cost = '$20';
        benefits = '(Some more benefits)';
    }

    if (level === silver) {
        rank = 'Non Profit';
        cost = '$65';
        benefits = '(A BUNCH OF BENEFITS!)';
    }

    if (level === gold) {
        rank = 'Gold';
        cost = '$100';
        benefits = '(ALL BENEFITS!)';
    }


    detailSelect.innerHTML = `
    <div id="modal" class="popup-membership ${rank}">
        <button id="closeModal">❌</button>
        <h2>${rank}</h2>
        <p><strong>Cost: </strong>${cost}</p>
        <p><strong>Benefits: </strong>${benefits}</p>
    </div>
    `;

    closeModal.addEventListener("click", () => {
        detailSelect.close();
    });



};

// // USE THE FOLLOWING AS THE TARGET DESIGN FOR THE GENERATED MODAL POP-UP
// <div id="modal" class="popup-membership non-profit">
//     <button id="closeModal">❌</button>
//     <h2>Non-profit</h2>
//     <p><strong>Cost: </strong>Free</p>
//     <p><strong>Benefits: </strong> Some Benefits</p>
// </div>
// // END EXAMPLE



// function displayCourseDetails(course) {
//     courseDetails.innerHTML = '';
//     courseDetails.innerHTML = `
//                 <button id="closeModal">❌</button>
//                 <h2>${course.subject} ${course.number}</h2>
//                 <h3>${course.title}</h3>
//                 <p><strong>Credits</strong>: ${course.credits}</p>
//                 <p><strong>Certificate</strong>: ${course.certificate}</p>
//                 <p>${course.description}</p>
//                 <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
//             `;
//     courseDetails.showModal();

//     closeModal.addEventListener("click", () => {
//         courseDetails.close();
//     });
// }