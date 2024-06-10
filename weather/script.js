$(document).ready(function () {
    const apiKey = 'key'; 

    $('#search-button').on('click', function () {
        const city = $('#city').val();
        if (city) {
            getWeather(city);
            console.log(city)
        }
    });

    function getWeather(city) {
        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
        $.get(apiUrl, function (data) {
            displayWeather(data);
        }).fail(function () {
            alert('City not found. Please try again.');
        });
    }

    function displayWeather(data) {
        if (data.success === false) {
            alert('City not found. Please try again.');
            return;
        }
        $('#city-name').text(data.location.name);
        $('#temperature').text(`Temperature: ${data.current.temperature} °C`);
        $('#weather-description').text(
            `Weather: ${data.current.weather_descriptions[0]}`
        );
        $('#weather-result').show();
    }
});
