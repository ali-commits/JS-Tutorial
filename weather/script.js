$(document).ready(function () {
    const apiKey = '';

    $('#search-button').on('click', function () {
        const city = $('#city').val();
        if (city) {
            $('#weather-result').hide();
            $('#loading').show();
            getWeather(city);
        }
    });

    function getWeather(city) {
        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
        $.get(apiUrl, function (data) {
            displayWeather(data);
        }).fail(function () {
            alert('City not found. Please try again.');
            $('#loading').hide();
        });
    }

    function displayWeather(data) {
        if (data.success === false) {
            alert('City not found. Please try again.');
            $('#loading').hide();
            return;
        }
        $('#city-name').text(data.location.name);
        $('#temperature').text(`Temperature: ${data.current.temperature} °C`);
        $('#weather-description').text(
            `Weather: ${data.current.weather_descriptions[0]}`
        );

        // Map weather descriptions to icons
        const iconClass = getWeatherIcon(data.current.weather_descriptions[0]);
        $('#weather-icon').attr('class', `wi ${iconClass}`);

        $('#loading').hide();
        $('#weather-result').show();
    }

    function getWeatherIcon(description) {
        switch (description.toLowerCase()) {
            case 'clear':
                return 'wi-day-sunny';
            case 'partly cloudy':
                return 'wi-day-cloudy';
            case 'cloudy':
                return 'wi-cloudy';
            case 'rain':
                return 'wi-rain';
            case 'thunderstorm':
                return 'wi-thunderstorm';
            case 'snow':
                return 'wi-snow';
            default:
                return 'wi-day-sunny';
        }
    }
});
