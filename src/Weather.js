import React from 'react'
import css from './Weather.module.css';
import weather  from './weather.webp'
import cloud from './cloud.jpg'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Weather = () => {
    const [weathers, setweathers] = useState();
    const [search, setsearch] = useState();
    const [btn,setbttn]=useState(false)
    const nav=useNavigate();

    const setweatherdata = async () => {
        const  {data}  = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6243aaf48b62471c43490a0d129cb8dc&units=metric`
        );
        
        await  setweathers(data)
        // console.log(data)
    };
    const navi=(name)=>{
nav(`/${name}`)
    }
    const changeHandler=(e)=>{
        setsearch(e.target.value.trim());
    }
    const clickHandler=async(e)=>{
        await setweatherdata();
      await  setbttn(true)
        // console.log("btn",weathers);
    e.preventDefault();
    
setsearch(" ")
}
  return (
    <div>
      <div className={css.first}>
      <img src={weather} alt="" />
      <div className={css.firstText}>       <h2 className={css.weather}>WEATHER APP</h2>
        <textarea value={search} onChange={changeHandler} placeholder="Enter your city" style={{width:"35vh",height:"6vh",margin:"20px",fontSize:"25px",borderRadius:"5px",padding:"5px"}} className={css.input}></textarea> <br />
        <button  onClick={clickHandler} style={{width:"35vh",backgroundColor:"rgb(135, 184, 220)",height:"6vh",margin:"15px",fontSize:"25px",borderRadius:"5px",padding:"5px",border:"none"}}>Search</button>

        </div>
 
      </div>
      <div className={css.second}>
        <div className={css.semisecond}>
     <img style={{height:"50%",width:"50%",objectFit:"contain",marginLeft:"120px"}}src={cloud} alt="" />
     {btn?<><h2 className={css.city}>{weathers.name}</h2> <h3 className={css.city}>{weathers.main.temp}°C</h3><br />     <h4 onClick={()=>navi(weathers.name)} weathers={weathers} className={css.link} >view more</h4>
</>:""}
       <br /> 
        </div>
      </div>
    </div>
  )
}

export default Weather
