import React from 'react'
import ForecastContextProvider  from '../context/ForecastContext';
import Forecast from './Forecast'
import SearcBox from './SearcBox'


function App() {
   
    return (
        <div>
           <SearcBox  />
           <hr/> 
           <ForecastContextProvider>
           <Forecast />
           </ForecastContextProvider>
          
        </div>
    )
}

export default App
 