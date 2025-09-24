
function displayMembershipDetails(memberLevel) {

    let rank = '';
    let cost = ''; // THIS WILL BE A $Value, not a single number

};

// USE THE FOLLOWING AS THE TARGET DESIGN FOR THE GENERATED MODAL POP-UP
<div id="modal" class="popup-membership non-profit">
    <button id="closeModal">❌</button>
    <h2>Non-profit</h2>
    <p><strong>Cost: </strong>Free</p>
    <p><strong>Benefits: </strong> Some Benefits</p>
</div>
// END EXAMPLE



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