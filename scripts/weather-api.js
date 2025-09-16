
// //  API KEY:
// // d4a2062d7a1ce65d0d64edbe8113f565

// // Trier, Germany
// // Latitude = 49.74804731383235
// // Longitude = 6.642583866437649
// // can truncate to two digits, this is overly-specific for what is needed

const lat = '49.74';
const lon = '6.64';
const apikey = 'd4a2062d7a1ce65d0d64edbe8113f565';
const units = 'imperial'; // Comment out to use the other
// const units = 'metric'; // Comment out to use the other

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// // The following are important pieces of the link:
// // 'weather': designates (something) within the target site link
// // '?': Indicates a request for data
// // '&': Required to separate values from each other. Their order does not matter, just that they are distinct.

const url = `https://api.openweathermap.org/data/2.5/
weather
?
lat=${lat}
&
lon=${lon}
&
appid=${apikey}
&
units=${units}
`;


async function apiFetch() {


    try {
        const response = await fetch(url);

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

    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/wn/${icon}.png`;
    // console.log(iconsrc); // console print of the icon's weblink
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'an icon representing the weather');
    captionDesc.textContent = `${desc}`;

};

displayResults();