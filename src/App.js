import React from 'react'
import Header from './components/Header'
import WeatherList from './components/WeatherList'
import { WeatherProvider } from './context/WheatherContext';
function App() {
    //Provider'ı kullanabilmemiz için useContext kullanmamız gerekir.
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
