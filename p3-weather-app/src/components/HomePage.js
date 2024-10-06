import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { FiSearch } from "react-icons/fi";
import { BsCloudRainHeavyFill, BsSun, BsCloudFill, BsSnow } from "react-icons/bs"; 


export default function HomePage() {

  const [city,setCity]=useState('')
  const [weatherDataSet,setWeatherDataSet]=useState(null)
  const apiKey='842e702d0c3857a2a7a46c33bdea9b88'
  const day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  useEffect(()=>{
    let weatherData= async ()=>{
      try {
        const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const parseData=await data.json()
        if(data.ok)
        setWeatherDataSet(parseData)
      } catch (error) {
        alert("Somethin went wron gwhile fetching the data")
      }
    }
    weatherData()
  },[city])


  let now
  if(weatherDataSet)
  now=new Date(weatherDataSet.dt *1000)

  const getWeatherCondition=()=>{
    if(!weatherDataSet || !weatherDataSet.weather || weatherDataSet.weather.length === 0)
      return 'Unknown';
    switch(weatherDataSet.weather[0].main){ 
      case 'Clear':return{
        bgClass:'bg-clear',
         weather:'Sunny',
         icon: <BsSun />,
      };
      case 'Drizzle' :
      case 'Rain': return{
        bgClass:'bg-rain',
        weather: 'rain',
        icon: <BsCloudRainHeavyFill />,
      };
      case 'Snow':return{
        bgClass:'bg-snow',
        weather: 'snowy',
        icon: <BsSnow />,
      };
      case 'Clouds':return{
        bgClass:'bg-clouds',
        weather: 'Cloudy', 
        icon: <BsCloudFill />,
      };
      default: return{
        bgClass:'bg-default',
        weather: 'Unknown',
        icon: <BsCloudFill />,
      }
    }
  }

  const weatherBackground=getWeatherCondition();

  return (
    <div>
      <div className='cantainer-search'>
        <input type='text' placeholder='Enter the city Name...' onChange={(e)=>setCity(e.target.value)}  className='input-search'/>
        <FiSearch  className='icon-search'/>
      </div>
      {
        weatherDataSet && weatherDataSet.main  ?(
          <div className={`container ${weatherBackground.bgClass}`}>
          <div className='left'>
            <div className='status'>
                <BsCloudRainHeavyFill />
                <p>{getWeatherCondition().weather}</p>
                {/* <p>{weatherDataSet.weather[0].main}</p> */}
            </div>  
            <div className='temp'>
                <h1>{weatherDataSet.main.temp}°C</h1>
            </div>
          </div>
          <div className='right'>
              <div className='time-day'>
                  <h1>{now.getHours()}:{now.getMinutes()}</h1>
                  <p> {day[now.getDay()]} {now.getDate()}-{now.getFullYear()}</p>
              </div>
              <div>{weatherDataSet.name}</div>
          </div>
        </div>
        ):
         <h1>Enter a City Name</h1>
      }
    </div>
  )
}
