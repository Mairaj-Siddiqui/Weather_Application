import React from "react";
import WeatherIcon from "../icons/WeatherIcon";

//  --forecast-- props coming from parent component WeatherContainer.jsx
const WeatherDetails = ({ forecast }) => {
  if (!forecast) return null;
  console.log(forecast);

  
    //Return 5 days forecast
  return (
    <div className="weather-details">
      <h3>5-Days Forecast</h3>
      <div className="forecast-container">
        {forecast.daily.time.slice(0, 5).map((date, index) => ( 
          <div key={index} className="forecast-box">
            <p>{new Date(date).toDateString()}</p>
            <WeatherIcon weatherCode={forecast.daily.weathercode[index]} />
            <p>Min: {Math.round(forecast.daily.temperature_2m_min[index])}°C</p>
            <p>Max: {Math.round(forecast.daily.temperature_2m_max[index])}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
