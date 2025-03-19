import axios from "axios";

//Fetches forecast data for given latitude and longitude parameters
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

//This given matching City name with given latitude and longitude
//this find the latitude and longitude of the given city name
const GEO_API_URL = "https://geocoding-api.open-meteo.com/v1/search";


export const fetchWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(WEATHER_API_URL, {

      // --  params -- object is used to send query paramenters in an API request--
      params: {
        latitude,
        longitude,
        daily: "temperature_2m_max,temperature_2m_min,weathercode",
        current_weather: true,
        
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export const fetchCoordinates = async (city) => {
  try {
    const response = await axios.get(GEO_API_URL, {

      // --  params -- object is used to send query paramenters in an API request--

      params: {
        name: city,
        count: 1,  // Limit to one result
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      const { latitude, longitude } = response.data.results[0];
      return { latitude, longitude };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};
