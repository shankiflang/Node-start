const request = require('request')

const getLocation = (city = Paris, callback) => {
    setTimeout(() => {
        const url_location = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic2hhbmtpIiwiYSI6ImNqdGZ6b205YTAzbWw0YXA2eTgwYThrOWUifQ.dRod-R7pg5hyKX2t48IwGA&limit=1`

        request({ url: url_location, json: true }, (err, res) => {
            if(err){
                callback(err, "")
            } else if (res.body.features.length === 0) { 
                callback('Unable to find location.', "")
            } else {
                callback("", res.body.features[0].center)
            }
        })
    }, 0)
}

const getTemp = (latitude, longitude, callback) => {
    setTimeout(() => {
        const url_meteo = `https://api.darksky.net/forecast/2b40c1b74f4523138c89cadfd69acea2/${latitude},${longitude}?units=si&lang=fr`

        request({ url: url_meteo, json: true }, (err, res) => {
            if(err){
                callback(err, '')
            } else if (res.body.error) {
                callback(res.body.error, '')
            } else {
                callback('', res.body.daily.data[0].summary)
            }
        })
    }, 0)
}

const data = getLocation("Lyon", (err, res) => {
    getTemp(res[1], res[1], (err, res) => {
        console.log(res)
    })
})



