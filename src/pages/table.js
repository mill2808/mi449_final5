import { supabase } from './supabaseClient';

import { useState, useEffect } from 'react'

export default function RadiationExample() {
  const [myRadiation, setMyRadiation] = useState([])
  async function getRadiation() {
    let { data: radiation} = await supabase
     .from('radiation')
     .select('*')
    setMyRadiation(radiation);
  }
  getRadiation();
 
  return (
    <table className="radiation-example w-full">

        {myRadiation.map(portion => (
          <tr>
            <td className="border px-4 py-2">{portion.month}</td>
            <td className="border px-4 py-2">{portion.peaksunlight}</td>
          </tr>
        ))}
    </table>
  )
}
