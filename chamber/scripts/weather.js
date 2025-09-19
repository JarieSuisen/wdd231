
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
const days = 3// number of days for the forecast to call (range: 1-5)


// ESTABLISH CALLS TO DOCUMENT CONTENTS

// const captionDesc = document.querySelector('figcaption');

// const currentTemp = document.querySelector('#current-temp');
// const description = document.querySelector("#description");
// const high = document.querySelector("#high");
// const low = document.querySelector("#low");
// const humidity = document.querySelector("#humidity");
// const sunrise = document.querySelector("#sunrise");
// const sunset = document.querySelector("#sunset");
const weatherIcon = document.querySelector('#weather-icon');
const details = document.querySelector('#details');

const forecast = document.querySelector('#forecast');

// // The following are important pieces of the link:
// // 'weather': designates (something) within the target site link
// // '?': Indicates a request for data
// // '&': Required to separate values from each other. Their order does not matter, just that they are distinct.

// CALLS TODAY'S WEATHER
const urlToday = `https://api.openweathermap.org/data/2.5/
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

// CALLS A THREE-DAY FORECAST
const urlForecast = `https://api.openweathermap.org/data/2.5/
forecast
?
lat=${lat}
&
lon=${lon}
&
appid=${apikey}
&
units=${units}
&
cnt=${days}
`;


async function apiFetch(url) {
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


async function displayResults(url) {

    // UPDATE ME TO SHOW: 
    //      the current temperature
    //      the current weather description
    //      a three(3) day temperature forecast that is properly labeled

    // RECEIVING JSON CONTENTS:
    const data = await apiFetch(url);
    // console.table(data); // console print of the JSON table

    if (url === urlToday) {

        // IMAGE INFORMATION ------------------------
        const icon = data.weather[0].icon;
        // console.log(icon);
        // GENERATE IMAGE DATA   
        const iconsrc = `https://openweathermap.org/img/wn/${icon}.png`;
        // console.log(iconsrc); // console print of the icon's weblink
        let desc = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', 'an icon representing the weather');
        // IMAGE INFORMATION END ------------------------


        // create page elements
        const section = document.createElement('section');
        const temperaturetoday = document.createElement('p');
        const description = document.createElement('p');
        const high = document.createElement('p');
        const low = document.createElement('p');
        const humidity = document.createElement('p');
        const sunrise = document.createElement('p');
        const sunset = document.createElement('p');

        // CALL DATA

        // Apply data



        // GET TEMPERATURE INFORMATION
        if (units === 'imperial') {
            const temp = `${data.main.temp}&deg;F`;
        }
        else {
            const temp = `${data.main.temp}&deg;C`;
        };




        // APPLY TEXT TO DOCUMENT CONTENT
        captionDesc.textContent = `${desc}`;






    }
    else {
        // DO FORECAST STUFF HERE


        forecast.innerHTML = ``;


    };

};

displayResults(urlToday);
displayResults(urlForecast);