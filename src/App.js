import React from 'react'
import Header from './components/Header'
import './App.css';
import WeatherList from './components/WeatherList'
import {WeatherProvider} from './context/WheatherContext'
function App() {

    return (
        <div>
           <WeatherProvider>
            <Header/>
              <WeatherList />
            </WeatherProvider>
          
        </div>
    )
}

export default App
