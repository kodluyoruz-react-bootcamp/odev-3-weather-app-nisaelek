import React from 'react'
import WeatherContext from '../context/WheatherContext'
import { useContext } from "react";
import WeatherCard from './WeatherCard'

function WeatherList() {
    const { weather } = useContext(WeatherContext);
    return (
        <div>
            	<div className="weatherList">
				{weather?.list.map((day, index) => (
                   
           <WeatherCard key={index} day={day} />
           ))}
        </div>
        </div>
    )
}

export default WeatherList
