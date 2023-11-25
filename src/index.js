import { dom } from './dom.js'
import { weatherAPI } from './api.js'



dom.init()

const form = document.querySelector('form')
const search = document.querySelector('form input')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    dom.switchLoadingCircle()
    const response = await weatherAPI.getCurrentWeatherInfo(search.value)
    const data = weatherAPI.processWeatherData(response)

    dom.updateCard(data)
    dom.switchLoadingCircle()

})

// dom.updateCard(data)

// const img = document.querySelector('img')

// img.src = data.icon