// GENERATE COPYRIGHT YEAR
const copyyear = document.querySelector("#currentyear");
const today = new Date();
copyyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// GENERATE LAST MODIFIED DATE-TIME STRING
const lastModify = document.querySelector("#lastModified");
let oLastModify = new Date(document.lastModified);
// const pad = (num) => num.toString().padStart(2, '0');
// const sec = pad(oLastModify.getSeconds());
// const min = pad(oLastModify.getMinutes());
// const hr = pad(oLastModify.getHours());
// const day = pad(oLastModify.getDate());
// const month = pad(oLastModify.getMonth());
// const year = oLastModify.getFullYear();
// lastModify.innerHTML = `<span class="highlight">${month}/${day}/${year} ${hr}:${min}:${sec}</span>`;

// ... OR just do this I guess??? The assignment says to not worry about modifying the output. Wish I'd caught that first. Oh well, I learned something new instead.
lastModify.innerHTML = document.lastModified;