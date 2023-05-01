
import { location } from './userInput'
import { useState, useEffect } from 'react'


export default function NRELdata(){
    const [radiationData, setRadiationData] = useState(null); 
    //const [location, setLocation] = useState('');
    const nrelApiKey = 'D8gR01Rx7RTEftnzzqfpIGWaPq27AeMyUHl184Qu';
    const nrelApiUrl = `https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=${nrelApiKey}&zip=${location}`;

    useEffect(() => {
        fetch(nrelApiUrl)
          .then(response => response.json())
          .then(data => setRadiationData(data))
          .catch(error => console.log(error));
      }, [nrelApiUrl]);


}