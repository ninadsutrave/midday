import Place from 'react-algolia-places'
import React from 'react'
import axios from 'axios'
import setIcon from '../utils/icons'
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

        forecast.location = forecast.location.split(',').slice(2).join(',').trim()

          let icon = forecast.descp[0].toLowerCase()
          if(icon === "clear") {
              icon = icon + " " + forecast.isDay
          }
          icon = (setIcon[icon])?setIcon[icon]:setIcon["clear true"]
          
          setWeatherData({
              descp: forecast.descp[0],
              feelslike: forecast.feelslike,
              location: forecast.location,
              precip: forecast.precip,
              temp: forecast.temp,
              time: forecast.time,
              windSpeed: forecast.windSpeed,
              isDay: forecast.isDay,
              icon
          })
      }
      else {
        response.data.location = response.data.location.split(',').slice(2).join(',').trim()

                let icon = response.data.descp[0].toLowerCase()
                if(icon === "clear") {
                    icon = icon + " " + response.data.isDay
                }
                icon = (setIcon[icon])?setIcon[icon]:setIcon["clear true"]
                
                setWeatherData({
                    descp: response.data.descp[0],
                    feelslike: response.data.feelslike,
                    location: response.data.location,
                    precip: response.data.precip,
                    temp: response.data.temp,
                    time: response.data.time,
                    windSpeed: response.data.windSpeed,
                    isDay: response.data.isDay,
                    icon
                })

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
