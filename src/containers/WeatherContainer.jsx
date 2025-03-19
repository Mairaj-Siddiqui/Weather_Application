import React from 'react'
import Search from '../components/pages/Search'
import { useState } from 'react'
import { useEffect } from 'react'
import {fetchWeather, fetchCoordinates} from '../services/WeatherService'
import WeatherCard from '../components/pages/WeatherCard'
import WeatherDetails from '../components/pages/WeatherDetails'

const WeatherContainer = () => {

  // On first load no weather data available until we fetch it from the API using --- "null"
    const [weather, setWeather] = useState(null)
    const [forecast, setForecast] = useState(null)


    const [city, setCity] = useState("Stockholm") // Default city when page loaded

    //for default city when page loaded - Stockholm
    useEffect(() => {
      getWeather(59.3327, 18.0656, "Stockholm");   
      
    }, [])
    
    const getWeather = async (lat, lon, cityName) => {
        const data = await fetchWeather(lat, lon);
        console.log("API Response:", data);
        if(data) {
            setWeather(data);
            setForecast(data);
            setCity(cityName); // This will update city name in state
        }
    }

    //converts a city name --"Stockholm"-- into latitude & longitude.

    const handleSearch = async (cityName) => {
        const coordinates = await fetchCoordinates(cityName);
        if(coordinates) {
            getWeather(coordinates.latitude, coordinates.longitude, cityName);
        } else {
            alert('City not found.');
        }
    }

  return (
  <div className="app">
    <h1>{city} Weather Forecast</h1>
    <WeatherCard weather={weather} city={city} />
    <Search onSearch={handleSearch}/>
    <WeatherDetails forecast={forecast} />

  </div>
  )
}

export default WeatherContainer