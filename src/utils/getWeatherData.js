import axios from 'axios'

const baseUrl = 'https://midday-weather-application.herokuapp.com/weather'

const getWeatherData = async (searchItem) => {

    try {
        const forecastData = await axios.get(baseUrl+'address?='+encodeURIComponent(searchItem))
        return forecastData
    }
    catch (err) {
        return ({'message': err})
    }

}

export default getWeatherData