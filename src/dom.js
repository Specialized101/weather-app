import './style.css'
import SearchIcon from './images/search.png'
import Fahrenheit from './images/fahrenheit.png'
import Celcius from './images/celsius.png'
import Background from './images/background.jpg'
import Loading from './images/loading.gif'
import { format } from 'date-fns'

const dom = (() => {

    function init() {
        const searchButton = document.querySelector('button')
        const searchIcon = new Image()
        const loading = document.querySelector('form img')
        
        loading.src = Loading
        searchIcon.src = SearchIcon
        searchButton.appendChild(searchIcon)

        document.body.style.backgroundImage = `url(${Background})`
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

    function switchLoadingCircle(){
        const loading = document.querySelector('.loading')
        const visibility = loading.style.visibility
        if (visibility !== 'visible'){
            loading.style.visibility = 'visible'
            return
        }

        loading.style.visibility = 'hidden'
    }

    return {
        init,
        updateCard,
        switchLoadingCircle
    }

})();


export {
    dom
}