import React from 'react'
import './ForecastBox.css'

const ForecastBox = ({location, data}) => { 

  if(!location || !data) {
    return (
      <div className="content-box message">
        <p>Type in a city name and check the real time weather in few seconds!</p>
      </div>
    )
  }

  const [date, time] = data.time.split(' ')
  console.log(data.icon)
  return (
    <div className="content-box"> 
      <div className="top-segment">
        <div className="top-left">
          <div className="weather-icon-wrapper">
            <img className="weather-icon" alt="weather icon" src={data.icon}/>
          </div>
          <div className="description">
            {data.descp}
          </div>
        </div>
        <div className="top-right">
          <p className="temperature">{data.temp}°C</p>
          <div>
            <p className="location">{location}</p>
            <p className="date">{date}</p>
            <p className="time">{time}</p>
          </div>
        </div>
      </div>

      <div className="bottom-segment">
        <p className="feels-like">Feels Like: {data.feelslike}°C</p>
        <p className="precipitation">Precipitation: {data.precip}%</p>
        <p className="wind-speed">Wind Speed: {data.windSpeed}kmph</p>
      </div>
    </div>
  )
}

export default ForecastBox