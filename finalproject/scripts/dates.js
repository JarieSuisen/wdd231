// GENERATE COPYRIGHT YEAR
const copyyear = document.querySelector("#currentyear");
const today = new Date();
copyyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// GENERATE LAST MODIFIED DATE-TIME STRING
const lastModify = document.querySelector("#lastModified");
let oLastModify = new Date(document.lastModified);
lastModify.innerHTML = document.lastModified;