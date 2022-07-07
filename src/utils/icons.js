import sunny from '../assets/day-sunny.svg'
import clear from '../assets/night-clear.svg'
import cloud from '../assets/cloud.svg'
import cloudy from '../assets/cloudy.svg'
import haze from '../assets/dust.svg'
import sprinkle from '../assets/sprinkle.svg'
import rain from '../assets/showers.svg'
import rainy from '../assets/rain.svg'
import smoke from '../assets/smoke.svg'
import mist from '../assets/fog.svg'
import thunder from '../assets/storm-showers.svg'
import thunderstorm from '../assets/thunderstorm.svg'
import snowflake from '../assets/snowflake-cold.svg'
import snow from '../assets/snow.svg'
import blizzard from '../assets/snow-wind.svg'
import fog from '../assets/night-fog.svg'

const icons = new Map([
    ["clear true", sunny],
    ["clear false", clear],
    ["sunny", sunny],
    ["partly cloudy", cloud],
    ["cloudy", cloud],
    ["overcast", cloudy],
    ["haze", haze],
    ["light drizzle", sprinkle],
    ["light rain", rain],
    ["rain, rain shower", rain],
    ["moderate rain at times", rain],
    ["light rain, rain shower", rain],
    ["shower in vicinity", rain],
    ["light rain, rain", rain],
    ["light rain shower", rain],
    ["patchy rain possible", rain],
    ["moderate or heavy rain shower", rainy],
    ["smoke", smoke],
    ["smog", smoke],
    ["mist", mist],
    ["mist, rain with thunderstorm", thunderstorm],
    ["thundery outbreaks possible", thunder],
    ["snow", snowflake],
    ["snowy", snowflake],
    ["heavy snow", snow],
    ["blizzard", blizzard],
    ["fog", fog]
])

export default icons