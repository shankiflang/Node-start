const request = require('request')

const geocode = (city = Paris, callback) => {
    setTimeout(() => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic2hhbmtpIiwiYSI6ImNqdGZ6b205YTAzbWw0YXA2eTgwYThrOWUifQ.dRod-R7pg5hyKX2t48IwGA&limit=1`

        request({ url, json: true }, (err, res) => {
            if(err){
                callback(err)
            } else if (res.body.features.length === 0) { 
                callback('Unable to find location.')
            } else {
                callback(undefined, {
                    latitude: res.body.features[0].center[1],
                    longitude: res.body.features[0].center[0]
                })
            }
        })
    }, 0)
}

module.exports = geocode