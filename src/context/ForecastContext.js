import React from 'react';
import axios from 'axios';
import {createContext,useEffect,useState} from 'react'

export const ForecastContext = createContext();
const ForecastContextProvider = (props) =>{
    const [wheatherData,setWheatherData]=useState([]);
    const APP_KEY="110a2df0fcb445dc97893636211501";

    useEffect(() => {
        (async () => {
          const response= await axios.get("http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q={value}&days=7");
          setWheatherData(response.data);
        })()
      },[setWheatherData])
    return (
<ForecastContext.Provider>
{props.children}
</ForecastContext.Provider>
    )
}
export default ForecastContextProvider