const request = require('request')

const url = 'https://api.darksky.net/forecast/2b40c1b74f4523138c89cadfd69acea2/37.8267,-122.4233'

request({ url }, (err, res) => {
    const data = JSON.parse(res.body)
    console.log(data.currently)
})