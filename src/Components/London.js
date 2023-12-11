import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const London = () => {
 const [weatherData, setWeatherData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
    const apiKey = 'b4297826727bd0ceb133d93504d77fe2'; 

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
        );

        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
 }, []);

 if (loading) {
    return <div>Loading...</div>;
 }

 if (error) {
    return <div>Error: {error.message}</div>;
 }

 return (
    <div className="weather-info">
      <h2>Weather Information for London</h2>
      {weatherData && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
 );
};

export default London;