import React from 'react';
import './styles/weather.css'
const Weather = ({ weatherData }) => {
    return (
        <div>
          <div className="location-box">
            <div className="location">{weatherData.name}, {weatherData.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weatherData.main.temp)}°c
            </div>
            <div className="weather">{weatherData.weather[0].main}</div>
          </div>
        </div>
    );
}
 
export default Weather;