const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode("Paris", (err, res) => {
    if (err) return console.log('Erreur: ', err)

    forecast(res.latitude, res.longitude, (err, res) => {
        if (err) return console.log('Erreur: ', err)
        
        console.log(res.summary, res.temperature)
    })
})



