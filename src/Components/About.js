import React from 'react'
import ForecastBox from './ForecastBox'
import './About.css'

const About = () => {
  return (
    <div className="About">
      <h3>Thank You For Visiting!</h3>
      <ForecastBox
        content="MidDay is an easy to use weather app, to get
        the weather details of the location entered by
        you in real time!
        Here you can find details such as temperature,
        precipitation, wind speed & more."
      />
    </div>
  )
}

export default About