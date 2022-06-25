import React from 'react'
import './ForecastBox.css'
import icon from '../assets/svg/wi-day-showers.svg'

const ForecastBox = ({ content }) => { 

  return (
    <div className="content-box"> 
      <div className="top-segment">
        <div className="top-left">
          <div className="weather-icon-wrapper">
            <img className="weather-icon" alt="weather icon" src={icon}/>
          </div>
          <div className="description">
            Light Rain Showers
          </div>
        </div>
        <div className="top-right">
          <p className="temperature">25°C</p>
          <p className="location">Rupnagar</p>
          <p className="date">15/05/21</p>
          <p className="time">2:30PM</p>
        </div>
      </div>



    </div>
  )
}

export default ForecastBox