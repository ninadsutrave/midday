import Place from 'react-algolia-places'
import React from 'react'
import axios from 'axios'
import './AlgoliaSearch.css'

const AlgoliaSearch = ({setQuery, setWeatherData}) => {

  const handleSubmit = async (e) => {
    // console.log(e.suggestion.highlight)
    setWeatherData(null)
    const lat = e.suggestion.latlng.lat
    const long = e.suggestion.latlng.lng

    const search = e.suggestion.highlight.name
    const item = search.replaceAll("<em>","").replaceAll("</em>","")
    setQuery(item)

    try {
      const response = await axios.get(`http://localhost:5000/initial?lat=${lat}&long=${long}`)
      if(response.data.error) {
        const response = await axios.get(`http://localhost:5000/weather?address=${item}`)
        const forecast = JSON.stringify(response.data)
        setWeatherData(forecast)  
      }
      else {
        setWeatherData(response.data)
      }
    }
    catch (err) {
        console.error(err)
        const response = await axios.get(`http://localhost:5000/weather?address=${item}`)
        const forecast = JSON.stringify(response.data)
        setWeatherData(forecast)        
    }

  }

  return (
      <Place 
        onChange={handleSubmit}
        useDeviceLocation={true}
      /> 
  )
}


export default AlgoliaSearch
