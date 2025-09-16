// const byuiCourse = {
//     code: "WDD231",
//     name: "Web Frontend Development I",
//     sections: [
//         {
//             sectionNumber: 1,
//             enrolled: 88,
//             instructor: "Brother Bingham",
//         },
//         {
//             sectionNumber: 2,
//             enrolled: 81,
//             instructor: "Sister Shultz",
//         },
//         {
//             sectionNumber: 3,
//             enrolled: 95,
//             instructor: "Sister Smith",
//         },
//     ],
//     changeEnrollment: function (sectionNumber, add = true) {
//         // Find the section with the given section number
//         const sectionIndex = this.sections.findIndex(
//             (section) => section.sectionNumber == sectionNumber
//         );
//         if (sectionIndex >= 0) {
//             if (add) {
//                 this.sections[sectionIndex].enrolled++;
//             } else {
//                 this.sections[sectionIndex].enrolled--;
//             }
//             renderSections(this.sections);
//         }
//     },
// };

// function setSectionSelection() {
//     const sectionSelect = document.querySelector("#sectionNumber");
//     byuiCourse.sections.forEach((section) => {
//         const option = document.createElement("option");
//         option.value = section.sectionNumber;
//         option.textContent = `${section.sectionNumber}`;
//         sectionSelect.appendChild(option);
//     });
// }

// function setTitle(course) {
//     document.querySelector("#courseName").textContent = course.name;
//     document.querySelector("#courseCode").textContent = course.code;
// }

// function renderSections(sections) {
//     const html = sections.map(
//         (section) => `<tr>
//     <td>${section.sectionNumber}</td>
//     <td>${section.enrolled}</td>
//     <td>${section.instructor}</td></tr>`
//     );
//     document.querySelector("#sections").innerHTML = html.join("");
// }


// // ------------------- THIS IS THE WRONG FORMAT PROVIDED BY THE COURSE -------------------
// import byuiCourse from './course';
// import { setSectionSelection } from './sections';
// import { setTitle, renderSections } from "./output";

// // ------------------- CORRECTED VERSION -------------------
import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';
import { setTitle, renderSections } from "./output.mjs";




// // // ------------------- THIS IS THE WRONG(?) FORMAT PROVIDED BY THE COURSE, WHICH DOES NOT EVEN MATCH THE RESULT OF THE INSTRUCTIONS -------------------
// document.querySelector("#enrollStudent").addEventListener("click", function () {
//     const sectionNum = document.querySelector("#sectionNumber").value;
//     byuiCourse.changeEnrollment(sectionNum);
//     renderSections(byuiCourse.sections);
// });

// document.querySelector("#dropStudent").addEventListener("click", function () {
//     const sectionNum = document.querySelector("#sectionNumber").value;
//     byuiCourse.changeEnrollment(sectionNum, false);
//     renderSections(byuiCourse.sections);
// });


// // THEN...


// // ------------------- THIS IS THE WRONG(?) FORMAT THAT RESULTS FROM FOLLOWING THE COURSE INSTRUCTIONS -------------------
// document.querySelector("#enrollStudent").addEventListener("click", function () {
//     const sectionNum = Number(document.querySelector("#sectionNumber").value);
//     byuiCourse.changeEnrollment(sectionNum);

// // ADDING THIS SECTION, PER INSTRUCTIONS
//     renderSections(this.sections);


// });
// document.querySelector("#dropStudent").addEventListener("click", function () {
//     const sectionNum = Number(document.querySelector("#sectionNumber").value);
//     byuiCourse.changeEnrollment(sectionNum, false);

// // ADD THIS SECTION, PER INSTRUCTIONS
//     renderSections(this.sections);


// });


// // AND FINALLY


// ------------------- CORRECTED VERSION -------------------
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);

    // ADDING THIS SECTION, PER INSTRUCTIONS, BUT CORRECTED
    renderSections(byuiCourse.sections);


});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);

    // ADD THIS SECTION, PER INSTRUCTIONS, BUT CORRECTED
    renderSections(byuiCourse.sections);
});


setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections); // IF THIS IS COMMENTED OUT, THE FIELDS AUTO-POPULATE EVEN THOUGH THE FORM IS STILL NON-FUNCTIONAL
renderSections(byuiCourse.sections);