import { dom } from './dom.js'

const WEATHER_API_KEY = 'a2550266a75b4917919135441232511'
const WEATHER_BASE = 'https://api.weatherapi.com/v1'

const weatherAPI = (() => {
    
    async function getCurrentWeatherInfo(location) {
        const response = await fetch(
            `${WEATHER_BASE}/current.json?key=${WEATHER_API_KEY}&q=${location}`,
            { mode: 'cors' }
        )
        const data = response.json()
        return data
    }

    function processWeatherData(data) {
        return {
            location: data.location.name,
            country: data.location.country,
            localtime: data.location.localtime,
            temp_c: data.current.temp_c,
            temp_f: data.current.temp_f,
            icon: data.current.condition.icon
        }
    }

    return {
        getCurrentWeatherInfo,
        processWeatherData
    }

})();


export {
    weatherAPI
}