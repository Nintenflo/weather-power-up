console.log('Hello World!');

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        //return an array of card badges for the given card
        return t.card('all')
            .then(function (card) {
                console.log(card);
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.610769&lon=3.876716&appid=2ff5f0db9251c46e0020f6a608efdeaf')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (weatherData) {
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