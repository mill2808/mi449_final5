import axios from 'axios';

const API_KEY = 'D8gR01Rx7RTEftnzzqfpIGWaPq27AeMyUHl184Qu';

export async function getRadiationData(latitude, longitude) {
  const response = await axios.get(
    `https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=${API_KEY}&lat=${latitude}&lon=${longitude}`
  );
  return response.data;
}
