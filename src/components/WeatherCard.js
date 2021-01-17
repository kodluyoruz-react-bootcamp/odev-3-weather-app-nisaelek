import React from 'react'

function WeatherCard({day}) {
  var date = new Date(day.dt*1000);
    return (
        <div className="card bg-info">
        <div className="card-body text-center flex-container"  >
          <p className="card-text">{date.toLocaleString("tr-tr", { weekday: "long" })}</p>
          <p className="card-text"><img
				src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
				alt=""
			/></p>
          <p className="card-text">{day.temp.max}{day.temp.min} </p>
        </div>
      </div>
    )
}

export default WeatherCard
