import React from 'react'
import { useContext } from "react";
import {cities} from "./consts"
import  WeatherContext from '../context/WheatherContext'
function Header() {
    const { selected, setSelected } = useContext(WeatherContext);
    const handleOnChange = (e) => {
		setSelected(e.target.value);
	};
    return (
        <div className="header">
           <select className="dropdown"
           onChange={handleOnChange}
           defaultValue={selected}>
           {cities.map((city) => (
					<option key={city.id} value={city.name}>
						{city.name}
					</option>
                    ))}
                </select>
        </div>
    )
}

export default Header
