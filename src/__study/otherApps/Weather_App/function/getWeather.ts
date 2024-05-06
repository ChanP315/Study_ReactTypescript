import { CurrentLocation, weather_fomat } from "../model/weather_data";

export const getWeatherByLocation = async(location:CurrentLocation, API_key:string):Promise<weather_fomat | null> => {
    if(location !== null)
    {
        try{
            const Url_WeatherAPICall:string = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_key}&units=metric`;
            const response:Response = await fetch(Url_WeatherAPICall);
            const data:weather_fomat = await response.json();
  
            //console.log("data : ", data)
            return data;
        }catch{
            console.log("API Error");
            return null;
        }
        
    }else return null;
}