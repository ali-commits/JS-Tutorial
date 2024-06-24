function myFunction() {
    const sheet = SpreadsheetApp.getActiveSheet();
    const city = sheet.getRange('B1').getValue();
    Logger.log(city);
    const key = '32a1a09648d48b83a9efe8041e29019a';

    const url =
        'http://api.weatherstack.com/current?access_key=' +
        key +
        '&query=' +
        city;

    var reponse = UrlFetchApp.fetch(url);
    var json = reponse.getContentText();
    var data = JSON.parse(json);

    Logger.log(data.current.temperature);

    const temp = data.current.temperature;
    const desc = data.current.weather_descriptions[0];
    const humidity = data.current.humidity;

    sheet.getRange('B2').setValue(desc);
    sheet.getRange('B3').setValue(temp);
    sheet.getRange('B4').setValue(humidity);
}
