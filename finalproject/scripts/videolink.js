const video = document.querySelector("#videolink");

const url = "https://www.youtube.com/shorts/XRoHhQyu9SY";
const words = `HELLO, THIS WILL LINK TO THE VIDEO I NEED TO UPLOAD. DO NOT FORGET, UPDATE THIS AND THE LINK. GO TO "videolink.js" TO UPDATE IT.`;

video.setAttribute('href', url);
video.textContent = words;
