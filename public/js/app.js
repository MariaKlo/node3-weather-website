const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')

const imgweather = document.createElement("img")
imgweather.setAttribute("class", "weather-icon")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value.replace(/;/g, "")

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = data.location
                let arrweather = data.forecast.split(',')
                messageTwo.textContent = arrweather[0]
                switch (arrweather[0]) {
                    case ('Sunny'):
                        imgweather.src = "/img/sunny.png"
                        break
                    case ('Cloudy'):
                        imgweather.src = "/img/cloud.png"
                        break
                    case ('Overcast'):
                        imgweather.src = "/img/cloud.png"
                        break
                    case ('Patchy rain possible'):
                        imgweather.src = "/img/cloud.png"
                        break
                    case ('Partly cloudy'):
                        imgweather.src = "/img/partly_cloudy.png"
                        break
                    case ('Haze'):
                        imgweather.src = "/img/foggy.png"
                        break
                    case ('Mist'):
                        imgweather.src = "/img/foggy.png"
                        break
                    case ('Freezing Fog'):
                        imgweather.src = "/img/foggy.png"
                        break
                    case ('Clear'):
                        imgweather.src = "/img/moon.png"
                        break
                    case ('Rain'):
                        imgweather.src = "/img/rain.png"
                        break
                    case ('Light Rain'):
                        imgweather.src = "/img/light_rain.png"
                        break
                    case ('Light Drizzle'):
                        imgweather.src = "/img/light_rain.png"
                        break
                    case ('Heavy rain'):
                        imgweather.src = "/img/rain.png"
                        break
                    case ('Moderate or heavy rain shower'):
                        imgweather.src = "/img/rain.png"
                        break
                    case ('Light Snow Shower'):
                        imgweather.src = "/img/snow.png"
                        break
                    case ('Light Snow' || 'Light snow'):
                        imgweather.src = "/img/snow.png"
                        break
                    case ('Heavy snow'):
                        imgweather.src = "/img/snow.png"
                        break
                    case ('Patchy heavy snow'):
                        imgweather.src = "/img/snow.png"
                        break
                    case ('Moderate or heavy snow showers'):
                        imgweather.src = "/img/snow.png"
                        break 
                    case ('Blizzard'):
                        imgweather.src = "/img/blizzard.png"
                }
                messageTwo.appendChild(imgweather)

                messageThree.textContent = arrweather[1] + ' C'
                messageFour.textContent = 'Precipitation: ' + arrweather[2] + '%'
                messageFive.textContent = 'Wind speed: ' + arrweather[3] + ' Kmph'
            }
        })
    })
})