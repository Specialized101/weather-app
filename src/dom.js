import './style.css'
import SearchIcon from './images/search.png'
import Fahrenheit from './images/fahrenheit.png'
import Celcius from './images/celsius.png'
import { format } from 'date-fns'

const dom = (() => {

    function init() {
        const searchButton = document.querySelector('button')
        const searchIcon = new Image()
        searchIcon.src = SearchIcon
        searchButton.appendChild(searchIcon)
        
    }

    function updateCard(data, unit){
        // const card = document.querySelector('card')
        const location = document.querySelector('#location')
        const temperature = document.querySelector('#temperature')
        const time = document.querySelector('#time')
        const tempLogo = document.querySelector('#temp-logo')
        const tempUnit = document.querySelector('#temp-unit')

        
        location.textContent = `${data.location}, ${data.country}`
        time.textContent = format(new Date(data.localtime), 'EEEE, MMMM d, yyyy - p')
        
        tempLogo.src = data.icon
        
        tempUnit.addEventListener('click', () => {
            updateCard(data, unit === 'C' ? 'F' : 'C')
        })

        if (unit === 'C'){
            temperature.textContent = data.temp_c
            tempUnit.src = Celcius    
        }
        else {
            temperature.textContent = data.temp_f    
            tempUnit.src = Fahrenheit
        }
        
        
    }

    return {
        init,
        updateCard
    }

})();


export {
    dom
}