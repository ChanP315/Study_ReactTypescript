import React, { useEffect } from 'react'
import {Button} from 'react-bootstrap';
import {CurrentLocation} from '../model/weather_data'
import { useEffectCustom } from '../../model/customHook';

interface OwnProps {
  location?:CurrentLocation;
  getLocation?:() => void;
  getWeather:(location:CurrentLocation) => void;
}

type Cities = {
  city:string,
  location:CurrentLocation,
  status:boolean
}
let cities:Cities[] = [
  {
    city:"Current Location",
    location:{latitude:0, longitude:0},
    status:false
  },
  {
    city:"ChungJu",
    location:{latitude:36.6424341, longitude:127.4890319},
    status:false
  },
  {
    city:"InCheon",
    location:{latitude:37.4562557, longitude:126.7042062},
    status:false
  },
  {
    city:"BuSan",
    location:{latitude:35.1795543, longitude:129.0756416},
    status:false
  }
] 

const WeatherButton:React.FC<OwnProps> = ({location = {latitude:0, longitude:0}, getWeather}) => {

  useEffect(() => {
    console.log("[button] ");
  },[])

  const locationJudgment = (locations:CurrentLocation):void => {
    if(locations === cities[0].location)
    {
      getWeather(location);
    }else getWeather(locations);
    cities.forEach((city) => {
      city.status = false;
      if(city.location === locations)
        city.status = true;
    })
  }

  return (
    <div>
        {
          cities.map((city)=> (
            <Button variant={!city.status?"warning" : ""} onClick={() => locationJudgment(city.location)} >{city.city}</Button>
          ))
        }
    </div>
  )
}

export default WeatherButton;