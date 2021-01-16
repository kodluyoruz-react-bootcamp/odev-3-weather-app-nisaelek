import { createContext, useState, useEffect } from "react";

import axios from "axios";
import { API_ENDPOINT } from '../components/consts'
//Diğer Compenentlerde contexti kullanabilmemiz için tanımlamamız gerekiyor.
const WeatherContext = createContext(null);

export const WeatherProvider = () => {
	const [selected, setSelected] = useState("İstanbul");
	const [weather, setWeather] = useState(null);


	useEffect(() => {
		const url = `${API_ENDPOINT}/forecast/daily?q=${selected}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
                
		axios(url).then(
			(response) => 
		setWeather(response.data)
		);
		
	}, [selected]);

	const values = {
		selected,
		setSelected,
		weather,
	
	};

	return (
		<WeatherContext.Provider value={values}></WeatherContext.Provider>
	);
};

export default WeatherContext;