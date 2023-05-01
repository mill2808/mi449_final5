import React, { useState, useEffect } from 'react';

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

