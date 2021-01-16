import { createContext, useState, useEffect } from "react";
import axios from "axios";
const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
	const [selected, setSelected] = useState("İstanbul");
	const [weather, setWeather] = useState(null);


	useEffect(() => {
		const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${selected}&appid=6764f39e03912e6b993d63f9379ed1ef&units=metric`;

		axios(url).then((res) =>{
			setWeather(res.data);
			console.log(res.data);

		} ).catch((err => console.log(err.response.data)));
	}, [selected]);

	const values = {
		selected,
		setSelected,
		weather,
		
	};

	return (
		<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
	);
};

export default WeatherContext;