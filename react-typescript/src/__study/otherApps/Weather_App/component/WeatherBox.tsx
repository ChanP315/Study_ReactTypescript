import React from 'react'
import { weather_fomat } from '../model/weather_data';

interface OwnProps {
  currWeather?:weather_fomat | null
}

const WeatherBox:React.FC<OwnProps> = ({currWeather = null}) => {
  return (
    <div className='weather-box'>
        <div>{currWeather?.name}</div>
        <h2>{currWeather?.main.temp}C / {currWeather?.main.fells_like}F</h2>
        <h3>{currWeather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox;