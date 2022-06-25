import Place from 'react-algolia-places'
import React from 'react'
import axios from 'axios'
import './AlgoliaSearch.css'

const AlgoliaSearch = ({setQuery, setWeatherData}) => {

  const handleSubmit = async (e) => {
    // console.log(e.suggestion.highlight)

    const lat = e.suggestion.latlng.lat
    const long = e.suggestion.latlng.lng

    const search = e.suggestion.highlight.name
    const item = search.slice(4).split("<").shift()

    setQuery(item)

    try {
      const response = await axios.get(`https://midday-weather-application.herokuapp.com/initial?lat=${lat}&long=${long}`)
      setWeatherData(response.data)
    }
    catch (err) {
        console.error(err)
        const response = await axios.get(`https://midday-weather-application.herokuapp.com/weather?address=${item}`)
        const forecast = JSON.stringify(response.data)
        setWeatherData(forecast)        
    }
  }

  return (
    <>
      <Place 
        onChange={handleSubmit}
        useDeviceLocation={true}
      /> 
      <p className="placeholder">Search a location</p>
    </>
  )
}


export default AlgoliaSearch
