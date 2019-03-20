const request = require('request')

const forecast = (latitude, longitude, callback) => {
    setTimeout(() => {
        const url = `https://api.darksky.net/forecast/2b40c1b74f4523138c89cadfd69acea2/${latitude},${longitude}?units=si&lang=fr`

        request({ url, json: true }, (err, res) => {
            if(err){
                callback('Unable to connect')
            } else if (res.body.error) {
                callback('Unable to find location')
            } else {
                callback(undefined, {
                    summary: res.body.daily.data[0].summary, 
                    temperature: res.body.currently.temperature
                })
            }
        })
    }, 0)
}

module.exports = forecast