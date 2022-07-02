import sunny from '../assets/svg/wi-day-sunny.svg'
import clear from '../assets/svg/wi-night-clear.svg'
import cloud from '../assets/svg/wi-cloud.svg'
import cloudy from '../assets/svg/wi-cloudy.svg'
import haze from '../assets/svg/wi-dust.svg'
import sprinkle from '../assets/svg/wi-sprinkle.svg'
import rain from '../assets/svg/wi-showers.svg'
import rainy from '../assets/svg/wi-rain.svg'
import smoke from '../assets/svg/wi-smoke.svg'
import mist from '../assets/svg/wi-fog.svg'
import thunder from '../assets/svg/wi-storm-showers.svg'
import thunderstorm from '../assets/svg/wi-thunderstorm.svg'
import snowflake from '../assets/svg/wi-snowflake-cold.svg'
import snow from '../assets/svg/wi-snow.svg'
import blizzard from '../assets/svg/wi-snow-wind.svg'
import fog from '../assets/svg/wi-night-fog.svg'

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