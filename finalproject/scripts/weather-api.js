
const lat = '40.76';
const lon = '-111.91';
const apikey = 'd4a2062d7a1ce65d0d64edbe8113f565';
const units = 'imperial';

const range = 24

const temp = document.querySelector('#current-temp');

const weatherIcon = document.querySelector('#weather-icon');

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
        // console.error(error);
        // console.text('AN ERROR HAS OCCURED, DUMMY. - VIA CONSOLE.TEXT');
        // console.log('AN ERROR HAS OCCURED, DUMMY. - VIA CONSOLE.LOG');
    };
};


async function displayResults() {
    const data = await apiFetch();
    // console.table(data); // console print of the JSON table
    const icon = data.weather[0].icon;
    temp.innerHTML = `${data.main.temp}&deg;F`;
    // lowTemp.innerHTML = `${data.main.temp_min}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${icon}.png`;
    // console.log(iconsrc); // console print of the icon's weblink
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'an icon representing the weather');
    weatherIcon.setAttribute('loading', 'lazy');
};

displayResults();