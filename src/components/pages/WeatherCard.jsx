const WeatherCard = ({ weather, city }) => {
    if (!weather) return <p>Loading...</p>;
  
      //return selected city and temperature
    return (
      <div className="weather-card">
        <h2>{city}</h2>                        
        <p className="parah">Min: {Math.round(weather.daily.temperature_2m_min[0])}°C</p>
        <br />
        <p className="parah">Max: {Math.round(weather.daily.temperature_2m_max[0])}°C</p>
      </div>
    );
  };
  
  export default WeatherCard