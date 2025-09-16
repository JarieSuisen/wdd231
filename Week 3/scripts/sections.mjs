// // THIS IS THE ORIGINAL VERSION, NO CHANGES MADE AND NONE ARE INTENDED BY THE LESSON - DOES NOT WORK, DUE TO:
// // ReferenceError: byuiCourse is not defined
// // WHY IS IT SUDDENLY NOT DEFINED? BECAUSE THE MODULE FORMAT BREAKS THE REFERENCE THAT RELIED ON BEING IN THE SAME DOCUMENT
// function setSectionSelection() {
//     const sectionSelect = document.querySelector("#sectionNumber");
//     byuiCourse.sections.forEach((section) => {
//         const option = document.createElement("option");
//         option.value = section.sectionNumber;
//         option.textContent = `${section.sectionNumber}`;
//         sectionSelect.appendChild(option);
//     });
// };


// // FIXED VERSION
// // Add the reference of 'sections'
function setSectionSelection(sections) {


    const sectionSelect = document.querySelector("#sectionNumber");


    // // remove "byuiCourse" so it refences 'sections' correctly:
    
    sections.forEach((section) => {


        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
};




// // ------------------- THIS IS THE ESPECIALLY WRONG FORMAT PROVIDED BY THE COURSE -------------------
// export function populateSections(sections) { ... }
// // SERIOUSLY, WHIAT IS "populateSections(sections)" SUPPOSEDLY EVER USED FOR? THIS IS BLATANTLY WRONG IN EVERY CASE AS IT IS NEVER REFERENCED NOR EVEN CONSTRUCTED.

// // ------------------- THIS IS THE STILL-WRONG FORMAT THAT THE LESSON EXPECTS -------------------
// export function setSectionSelection(sections) { ... }

// // ------------------- CORRECTED VERSION -------------------
export { setSectionSelection };