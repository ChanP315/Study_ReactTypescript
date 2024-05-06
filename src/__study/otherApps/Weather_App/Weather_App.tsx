import React, {useEffect, useState, useContext} from 'react';
import './css/Weather_App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CurrentLocation, weather_fomat } from './model/weather_data';
import { getWeatherByLocation} from './function/getWeather';
import ClipLoader from "react-spinners/ClipLoader";

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { useEffectCustom } from '../model/customHook';


const API_Key:string = "asd"  //OpenWeather API Key


const Weather_App:React.FC = () => {
  const [currWeather, setCurrWeather] = useState<weather_fomat | null>(null);
  const [location, setLocation] = useState<CurrentLocation>({latitude:0, longitude:0});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    console.log("[App]");
    navigator.geolocation.getCurrentPosition((position):void => {
      let lat:number =  position.coords.latitude
      let lng:number = position.coords.longitude;
      console.log("let1 : ", lat, "lng1 : " , lng);

      setLocation({latitude:position.coords.latitude, longitude:position.coords.longitude})
      
      getWeather(location);
  })}, []);

  useEffectCustom(()=>{
    console.log("[App Custom] ", currWeather);
  },[currWeather]);

  const getWeather = (locationthis:CurrentLocation):void => {
    getWeatherByLocation(locationthis, API_Key).then(result => setCurrWeather(result));
    setLoading(false);
  }

  return (
    <React.Fragment>
      <div className='container'>
        {
          loading?
          <ClipLoader color="#f88c6b" loading={true} size={150} aria-label="Loading Spinner" data-testid="loader"/>
          : <WeatherBox currWeather={currWeather}></WeatherBox>
        }
        <WeatherButton location={location} getWeather={getWeather}></WeatherButton>
      </div>
    </React.Fragment>
  )
}

export default Weather_App;