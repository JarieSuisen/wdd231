
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


// ESTABLISH CALLS TO DOCUMENT CONTENTS

// const captionDesc = document.querySelector('figcaption');

// const currentTemp = document.querySelector('#current-temp');
// const description = document.querySelector("#description");
// const high = document.querySelector("#high");
// const low = document.querySelector("#low");
// const humidity = document.querySelector("#humidity");
// const sunrise = document.querySelector("#sunrise");
// const sunset = document.querySelector("#sunset");
const weatherIcon = document.querySelector('#weather-icon'); // THIS IS THE WEATHER ICON
const details = document.querySelector('#details'); // THIS IS THE TODAY WEATHER CARD

const forecast = document.querySelector('#forecast'); // THIS IS THE FORECAST CARD

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
&lon=${lon}
&appid=${apikey}
&units=${units}
`;
// &cnt=${ range }
// THIS LAST OPTION ALLOWS FOR LIMITING THE NUMBER OF the 40 3-hour STEPS THAT ARE NORMALLY RETURNED.

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
    // console.table(data); // console print of both called the JSON tables

    // // THIS IS THE BASE ELEMENT, THE "CARD" ON THE DOCUMENT THAT EVERYTHING WILL BE APPLIED TO.
    // // Except the weather icon, that will just be on its own.
    const section = document.createElement('section');

    // ASSIGN A CLASS(es)
    section.classList.add('weatherCard');


    if (url === urlToday) {


        // console.table(data); // console print of the JSON table for this dataset

        // IMAGE INFORMATION ------------------------
        const icon = data.weather[0].icon;
        // console.log(icon);
        // GENERATE IMAGE DATA   
        const iconsrc = `https://openweathermap.org/img/wn/${icon}.png`;
        // console.log(iconsrc); // console print of the icon's weblink
        // let desc = data.weather[0].description;

        // SET ATTRIBUTES TO THE ICON
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', 'an icon representing the weather');
        // IMAGE INFORMATION END ------------------------


        // create page elements

        const temperaturetoday = document.createElement('p');
        const description = document.createElement('p');
        const high = document.createElement('p');
        const low = document.createElement('p');
        const humidity = document.createElement('p');
        const sunrise = document.createElement('p');
        const sunset = document.createElement('p');

        // CALL DATA

        // SIMPLE STRINGS, no fancy work needed.
        description.textContent = `${data.weather[0].description}`; // Simple text. Usable as-is.
        humidity.textContent = `Humidity: ${data.main.humidity}%`; // Simple text in A PERCENTAGE. Usable as-is.

        // GET TEMPS AND SET THEIR STRING FORMAT
        temperaturetoday.textContent = `${tempConvert(data.main.temp)}`; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL
        high.textContent = `High: ${tempConvert(data.main.temp_max)}`; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL
        low.textContent = `Low: ${tempConvert(data.main.temp_min)}`; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL

        // THE FOLLOWING VALUES CONTAIN A UNIX TIMESTAMP, measured in seconds, THEN CALLS FUNCTION TO CONVERT AND RETURN USEFUL STRING
        const sunriseValue = data.sys.sunrise;
        // console.log(`Sunrise Value: ${sunriseValue}`);
        const sunsetValue = data.sys.sunset;
        // console.log(`Sunset Value: ${sunsetValue}`);
        const sunriseTime = timeConvert(sunriseValue);
        // console.log(`Sunrise Time: ${sunriseTime}`);
        const sunsetTime = timeConvert(sunsetValue);
        // console.log(`Sunset Time: ${sunsetTime}`);



        sunrise.textContent = `Sunrise: ${sunriseTime}`;
        // console.log(sunriseTime.textContent);
        sunset.textContent = `Sunset: ${sunsetTime}`;



        // APPLY TEXT TO DOCUMENT CONTENT
        // section.appendChild();
        section.appendChild(temperaturetoday);
        section.appendChild(description);
        section.appendChild(high);
        section.appendChild(low);
        section.appendChild(humidity);
        section.appendChild(sunrise);
        section.appendChild(sunset);


        // NOW ADD IT TO THE PAGE!
        details.appendChild(section);


    }
    else {
        // DO FORECAST STUFF HERE

        // console.table(data); // console print of the JSON table for this dataset

        // CREATE ELEMENTS
        const temperature1Day = document.createElement('p');
        const temperature2Day = document.createElement('p');
        const temperature3Day = document.createElement('p');

        // SET WHICH RETURNED 3-HOUR SET TO TARGET TO GET EACH DAY, every 8 is 24 hours or another day
        let day1 = 0
        let day2 = day1 + 8
        let day3 = day2 + 8;


        const temp1Val = data.list[day1].main.temp; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL
        const temp2Val = data.list[day2].main.temp; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL
        const temp3Val = data.list[day3].main.temp; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL

        // const temp1Date = data.list[day1].dt; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL
        // console.log(temp1Date);
        const temp2Date = data.list[day2].dt; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL
        // console.log(temp2Date);
        const temp3Date = data.list[day3].dt; // CALLS Simple text in DESIGNATED TEMP, CONVERT TO STRING WITH TEMP SYMBOL
        // console.log(temp3Date);

        // const date1 = dateConvert(temp1Date); // UNUSED HERE
        // console.log(date1);
        const date2 = dateConvert(temp2Date);
        // console.log(date2);
        const date3 = dateConvert(temp3Date);
        // console.log(date3);


        temperature1Day.textContent = `Tomorrow: ${tempConvert(temp1Val)}`;
        temperature2Day.textContent = `${date2}: ${tempConvert(temp2Val)}`;
        temperature3Day.textContent = `${date3}: ${tempConvert(temp3Val)}`;


        section.appendChild(temperature1Day);
        section.appendChild(temperature2Day);
        section.appendChild(temperature3Day);


        // NOW ADD IT TO THE PAGE!
        forecast.appendChild(section);


    };



};


function tempConvert(temp) {

    let newTemp = '';
    // GET TEMPERATURE INFORMATION
    if (units === 'imperial') {
        newTemp = `${temp}°F`;
    }
    else {
        newTemp = `${temp}°C`;
    };

    // console.log(newTemp);
    return newTemp;

};

function timeConvert(time) {

    // Calls in a time in unix seconds, converts it into a usable string;

    // console.log(`Received value: ${time}`);

    // time = Date((time * 1000).toLocaleString('en-US', { timeZone: 'America/Denver' }));
    // console.log(`Adjusted value: ${time}`);

    const timeBase = new Date(time * 1000);
    // timeBase = timeBase.toLocaleTimeString('en-US', {
    //     timeZone: 'America/Denver',
    //     hour: 'numeric',
    //     minute: '2-digit',
    //     hour12: true
    // })
    // console.log(`Adjusted value: ${timeBase}`);


    const newTime = timeBase.toLocaleTimeString('en-US', {
        timeZone: 'America/Denver',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })
    // console.log(`Time is: ${newTime}`);

    return newTime;
};


function dateConvert(day) {

    // console.log(day);


    const longDate = new Date(day * 1000);

    const weekday = longDate.toLocaleDateString('en-US', {
        weekday: 'long',
        timeZone: 'America/Denver'
    })

    // console.log(weekday);

    return weekday;

};

displayResults(urlToday);
displayResults(urlForecast);

