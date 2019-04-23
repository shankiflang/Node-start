const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode("Paris", (err, { latitude, longitude }) => {
    if (err) return console.log('Erreur: ', err)

    forecast(latitude, longitude, (err, { summary, temperature }) => {
        if (err) return console.log('Erreur: ', err)
        
        console.log(summary, temperature)
    })
})



