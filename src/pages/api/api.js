
import axios from 'axios';

const Api_Key = '"D8gR01Rx7RTEftnzzqfpIGWaPq27AeMyUHl184Qu"';
const Api_Url = `https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=${Api_Key}`;

export const getSolarData = async (lat, lon) => {
  const response = await axios.get(`${API_URL}&lat=${lat}&lon=${lon}`);
  return response.data;
};
