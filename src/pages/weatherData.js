import React, { useState, useEffect } from 'react';

// Code on this page was based on output from ChatGPT, with minor changes made to troubleshoot and make it specific to my project. Full chat GPT output is at the bottom of this page. 

export default function NRELData() {
  const [radiationData, setRadiationData] = useState(null);
  const ApiKey = 'D8gR01Rx7RTEftnzzqfpIGWaPq27AeMyUHl184Qu';
  const ApiUrl = `https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=${ApiKey}&lat=40&lon=-105`;

  useEffect(() => {
    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => setRadiationData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {radiationData ? (
        <div class="font-mono bg-yellow-100 dark:text-black-400">
          <p>{radiationData.inputs.latitude}</p>
          <p>{radiationData.inputs.longitude}</p>
          <p>Your Solar Radiation: {radiationData.outputs.avg_dni.annual} kWh/m²/day</p>
        </div>
      ) : (
        <p>Wait for more weather data!</p>
      )}
    </div>
  );
}


/*
/* ChatGPT Citation 
Question asked: How do I use the public API from NREL to create a weather dashboard in React JS?

Output from ChatGPT that code was based off of:

"function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [areaCode, setAreaCode] = useState('');
  const apiKey = 'your-api-key-here';
  const apiUrl = `https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=${apiKey}&zip=${areaCode}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log(error));
  }, [areaCode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use the area code from the form input to update the state
    setAreaCode(event.target.areaCode.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your area code:
          <input type="text" name="areaCode" />
        </label>
        <button type="submit">Get Weather Data</button>
      </form>
      {weatherData ? (
        <div>
          <h2>Solar Radiation Data</h2>
          <p>Latitude: {weatherData.inputs.latitude}</p>
          <p>Longitude: {weatherData.inputs.longitude}</p>
          <p>Solar Radiation: {weatherData.outputs.avg_dni.annual} kWh/m²/day</p>
        </div>
      ) : (
        <p>Please enter your area code to get weather data.</p>
      )}
    </div>
  );
}

export default WeatherDashboard;"
*/