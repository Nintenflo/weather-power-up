console.log('Hello World!');

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        //return an array of card badges for the given card
        return t.card('all')
            .then(function (card) {
                // console.log(card);
                return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=43.610769&lon=3.876716&exclude=minutely,hourly,alerts&appid=%%APP_ID%%')
                    .then(function (response) {
                        console.log(response);
                        return response.json();
                    })
                    .then(function (weatherData) {
                        // console.log("weatherdata: ");
                        // console.log(weatherData);
                        console.log(card);

                        return [{
                            icon: `https://openweathermap.org/img/w/${weatherData.daily[0].weather.icon}.png`,
                            text: weatherData.daily[0].weather.main
                        },
                        {
                            icon: `https://openweathermap.org/img/w/${weatherData.daily[1].weather.icon}.png`,
                            text: weatherData.daily[1].weather.main

                        }]
                    });

            });
    }
});