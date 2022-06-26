import React, { useState, useEffect } from 'react'
import ForecastBox from './ForecastBox'
import axios from 'axios'
import AlgoliaSearch from './AlgoliaSearch'
import './Home.css'

const Home = () => {

    const [weatherData, setWeatherData] = useState({
        descp: [],
        feelslike: 0,
        location: "",
        precip: 0,
        temp: 0,
        time: "",
        windSpeed: 0
    })
    const [query, setQuery] = useState()

    useEffect(() => {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
        };
        
        const success = async (pos) => {
            const response = await axios.get(process.env.REACT_APP_BASE_URL+`initial?lat=${pos.coords.latitude}&long=${pos.coords.longitude}`)
            if(response.data.error) {
                console.warn(`ERROR: ${response.data.error}`);
            }
            else {
                response.data.location = response.data.location.split(',').slice(2).join(',').trim()
                setWeatherData(response.data)
            }
        } 
        
        const error = (err) => {
            setWeatherData(null)
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(success, error, options)
    }, [])

  return (
    <div className="Home">
        <div className="Form">
            <AlgoliaSearch 
                query={query}
                setQuery={setQuery}
                setWeatherData={setWeatherData}
            />
        </div>
        <ForecastBox location={query?query:weatherData?weatherData.location:null} data={weatherData} />
    </div>
  )
}

export default Home