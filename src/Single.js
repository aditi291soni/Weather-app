import React,{useState,useEffect} from 'react'
import weather from './weather.webp'
import axios from 'axios'
import css from './Single.module.css'
import { useParams } from 'react-router-dom'
const Single = ({weathers}) => {
let {name}=useParams()
console.log("hello",name);
const [single, setsingle] = useState();
const setweatherdata = async () => {
    const  {data}  = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6243aaf48b62471c43490a0d129cb8dc&units=metric`
    );
    
    
  await  setsingle(data)
};
 console.log(single)
useEffect(() => {
    setweatherdata()
  
}, []);
  return (
   <>
   <div className={css.imgs}>
      <img src={weather} />
      <div className={css.box}>
    <h1 className={css.heading}>{name} </h1>
    <h3>  {single?.weather[0]?.description} </h3>
    <hr />
    <h3>Temperature:{single?.main?.temp} °C</h3>
    <h3>Max Temp:  {single?.main?.temp_max} °C</h3>
    <h3>Min Temp:  {single?.main?.temp_min} °C</h3>
    <h3>Humidity:  {single?.main?.humidity} </h3>
    <h3>Pressure:  {single?.main?.pressure} </h3>
    <h3>Wind speed:  {single?.wind?.speed} </h3>
    <h3>Wind gust:  {single?.wind?.gust} </h3>
    <h3>Timezone:  {single?.timezone} </h3>
    <h3>Sunrise:  {single?.sys?.sunrise} </h3>
    <h3>Sunset:  {single?.sys?.sunset} </h3>








      </div>
      </div>
</>
  
  ) 
}

export default Single
