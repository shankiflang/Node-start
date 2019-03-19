const request = require('request')

const url = 'https://api.darksky.net/forecast/2b40c1b74f4523138c89cadfd69acea2/49.0167,2.0333?units=si&lang=fr'

request({ url, json: true }, (err, res) => {
    console.log(`${res.body.daily.data[0].summary} Il fait actuellement ${res.body.currently.temperature}°. Il y a ${res.body.currently.precipProbability}% de chance de pluie.`)
})