function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
};


// // ------------------- THIS IS THE WRONG FORMAT PROVIDED BY THE COURSE -------------------
// export function setTitle(course) { ... }
// export function renderSections(sections) { ... }

// // ------------------- CORRECTED VERSION -------------------
export { setTitle, renderSections };