import Place from 'react-algolia-places'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import setIcon from '../utils/icons'
import './Searchbar.css'

const AlgoliaSearch = ({setQuery, setWeatherData}) => {

  const handleSubmit = async (e) => {

    if(e.key !== "Enter") return;
    // console.log(e.suggestion.highlight)
    setWeatherData(null);
    const search = e.target.value
    console.log(search)
    const item = search.split(",")[0];
    setQuery(item);

    try {

        const response = await axios.get(process.env.REACT_APP_BASE_URL+`location?address=${item}`)
        const forecast = response.data
        console.log(forecast);
        forecast.location = forecast.location.split(',').slice(2).join(',').trim()

          let icon = forecast.descp[0].toLowerCase()
          if(icon === "clear") {
              icon = icon + " " + forecast.isDay
          }
          icon = (setIcon.get(icon))?setIcon.get(icon):setIcon.get("clear true")
          
          setWeatherData({
              descp: forecast.descp[0],
              feelslike: forecast.feelslike,
              location: forecast.location,
              precip: forecast.precip,
              temp: forecast.temp,
              time: forecast.time,
              humidity: forecast.humidity,
              windSpeed: forecast.windSpeed,
              isDay: forecast.isDay,
              icon
          })
      
    }
    catch (err) {
        console.error(err)
        const response = await axios.get(process.env.REACT_APP_BASE_URL+`location?address=${item}`)
        const forecast = JSON.stringify(response.data)
        setWeatherData(forecast)        
    }

  }

  return (
    <input className="search-bar"type="search" id="search-input" placeholder="Start Searching..." onKeyPress={handleSubmit} />
  )
}


export default AlgoliaSearch
