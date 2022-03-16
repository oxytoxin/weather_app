let apiKey = "932c68ea2cc54120afb114715221503";
let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

let lat = document.querySelector('#lat');
let lon = document.querySelector('#lon');
let weatherIcon = document.querySelector('#weather-icon');
let weatherDescription = document.querySelector('#weather-description');
let temperature = document.querySelector('#temperature');
let humidity = document.querySelector('#humidity');
let precipitation = document.querySelector('#precipitation');
let windSpeed = document.querySelector('#wind_speed');

let textInput = document.querySelector('#location');
let fetchBtn = document.querySelector('#fetch-btn');

fetchBtn.addEventListener('click', function () {
    let place = textInput.value;
    if (place == "") {
        return alert("No location entered.");
    }
    fetch(url + place).then(function (response) {
        return response.json();
    }).then(function (data) {
        let weather = data;
        console.log(data);
        lat.innerText = weather.location.lat;
        lon.innerText = weather.location.lon;
        weatherIcon.setAttribute('src', "https:" + weather.current.condition.icon);
        weatherDescription.innerText = weather.current.condition.text;
        temperature.innerText = weather.current.temp_c + ' C';
        humidity.innerText = weather.current.humidity + ' %';
        precipitation.innerText = weather.current.precip_mm + ' mm';
        windSpeed.innerText = weather.current.wind_kph + ' kph';
    })
});

