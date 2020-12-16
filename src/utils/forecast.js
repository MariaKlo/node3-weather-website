const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fc5054c091d01dfbd7b3aab1f22dc864&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const { weather_descriptions, temperature, precip, wind_speed } = body.current
            callback(undefined, weather_descriptions[0] + ',' + temperature + ',' + precip + ',' + wind_speed)
            // callback(undefined, 
            //     `The weather is ${body.current.weather_descriptions[0]}. 
            //     It is currently ${body.current.temperature} degrees out. 
            //     It feels like ${body.current.feelslike} degrees out. 
            //     The humidity is ${body.current.humidity}%. 
            //     The wind speed is ${body.current.wind_speed} kph.`)
        }
    })
}

module.exports = forecast