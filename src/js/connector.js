console.log('Hello World!');

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        //return an array of card badges for the given card
        return t.card('all')
            .then(function (card) {
                console.log(card);
                return fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.610769&lon=3.876716&appid=%%APP_ID%%')
                    .then(function (response) {
                        console.log(response);
                        return response.json();
                    })
                    .then(function (weatherData) {
                        console.log("weatherdata: ");
                        console.log(weatherData);
                        return [{
                            text: weatherData.main.temp.toString()
                        },
                        {
                            text: weatherData.wind.speed.toString()
                        }]
                    });

            });
    }
});