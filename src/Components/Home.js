import React, { useState, useEffect } from 'react'
import ForecastBox from './ForecastBox'
import axios from 'axios'
import AlgoliaSearch from './AlgoliaSearch'
import './Home.css'

const Home = () => {

    const [weatherData, setWeatherData] = useState()
    const [query, setQuery] = useState()

    useEffect(() => {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
        };
        
        const success = async (pos) => {
            const response = await axios.get(process.env.REACT_APP_BASE_URL+`initial?lat=${pos.coords.latitude}&long=${pos.coords.longitude}`)
            setWeatherData(response.data)
        } 
        
        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(success, error, options)
    }, [])

    const handleChange = async (event) => {
        setQuery(event.target.value)     
    }
    
    const handleSubmit = async (event) => {
        if(event.key === "Enter") {
            event.preventDefault()

            try {
                const response = await axios.get(process.env.REACT_APP_BASE_URL+`weather?address=${query}`)
                const forecast = JSON.stringify(response.data)
                setWeatherData(forecast)
            }
            catch (err) {
                console.error(err)
            }

        }
    }

  return (
    <div className="Home">
        <div className="Form">
            <AlgoliaSearch 
                query={query}
                setQuery={setQuery}
                setWeatherData={setWeatherData}
            />

            {/* <input 
                className="Searchbar" 
                placeholder="Search for a location" 
                id="search-location"
                type="text"
                onChange = {handleChange}
                onKeyPress = {handleSubmit}
            />
            <button onClick = {handleSubmit} className="SearchButton">
                <div className="Circle">
                    <img 
                        className="SearchIcon" 
                        alt="" 
                        src={require("../assets/search-icon.png")} 
                    />
                </div>        
            </button> */}
        </div>

        <ForecastBox content = {query} />
    </div>
  )
}

export default Home