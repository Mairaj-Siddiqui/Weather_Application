// src/components/WeatherIcon.jsx
import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiFog,
  WiThunderstorm,
} from "react-icons/wi";

const WeatherIcon = ({ weatherCode, size = 48 }) => {
  // Map the weather code to an appropriate icon
  if (weatherCode === 0) {
    return <WiDaySunny size={size} />;
  } else if ([1, 2, 3].includes(weatherCode)) {
    return <WiCloud size={size} />;
  } else if ([45, 48].includes(weatherCode)) {
    return <WiFog size={size} />;
  } else if ([51, 53, 55, 56, 57].includes(weatherCode)) {
    return <WiRain size={size} />;
  } else if ([61, 63, 65, 66, 67].includes(weatherCode)) {
    return <WiRain size={size} />;
  } else if ([71, 73, 75, 77].includes(weatherCode)) {
    return <WiSnow size={size} />;
  } else if ([80, 81, 82].includes(weatherCode)) {
    return <WiRain size={size} />;
  } else if ([95, 96, 99].includes(weatherCode)) {
    return <WiThunderstorm size={size} />;
  } else {
    return <WiDaySunny size={size} />; // Fallback icon
  }
};

export default WeatherIcon;
