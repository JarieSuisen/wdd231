
// //  API KEY:
// // d4a2062d7a1ce65d0d64edbe8113f565

// // SLC, UTAH
// // 40.759640597442704, -111.90583806902863
// // Latitude = 40.759640597442704
// // Longitude = -111.90583806902863
// // can truncate to two digits, this is overly-specific for what is needed

// ESTABLISH SEARCH VARIABLES
const lat = '40.76';
const lon = '-111.91';
const apikey = 'd4a2062d7a1ce65d0d64edbe8113f565';
const units = 'imperial'; // Comment out to use the other
// const units = 'metric'; // Comment out to use the other
const range = 24// number of 3-hour steps over the next 5 days for the forecast to call (range: 1-40)

const temp = document.querySelector('#current-temp');
// const lowTemp = document.querySelector('#low-temp');
const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// // The following are important pieces of the link:
// // 'weather': designates (something) within the target site link
// // '?': Indicates a request for data
// // '&': Required to separate values from each other. Their order does not matter, just that they are distinct.

const urla = `https://api.openweathermap.org/data/2.5/
weather
?
lat=${lat}
&
lon=${lon}
&
appid=${apikey}
&
units=${units}
&
cnt=3
`;


async function apiFetch() {


    try {
        const response = await fetch(urla);

        if (response.ok) {
            const data = response.json();

            // console.log(data);

            return data;
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
        console.text('AN ERROR HAS OCCURED, DUMMY. - VIA CONSOLE.TEXT');
        console.log('AN ERROR HAS OCCURED, DUMMY. - VIA CONSOLE.LOG');
    };




};

// apiFetch();


async function displayResults() {

    // const temp = 'main.temp';
    // const iconID = 'weather[0].icon';
    // const description = 'weather[0].description'; //redundant


    const data = await apiFetch();

    // console.table(data); // console print of the JSON table

    const icon = data.weather[0].icon;

    temp.innerHTML = `${data.main.temp}&deg;F`;
    // lowTemp.innerHTML = `${data.main.temp_min}&deg;F`;


    const iconsrc = `https://openweathermap.org/img/wn/${icon}.png`;
    // console.log(iconsrc); // console print of the icon's weblink
    // let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'an icon representing the weather');
    // captionDesc.textContent = `${desc}`;



};

displayResults();