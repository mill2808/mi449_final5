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
    <table class="font-mono">
      <thead class="font-mono bg-yellow-100 dark:text-black-400">
        <tr>
          <th className="items-center w-1/3 px-4 py-2">Month</th>
          <th className="w-1/3 px-4 py-2">Average Radiation</th>
        </tr>
      </thead>
      <tbody>
        {myRadiation.map(portion => (
          <tr class="table-fixed bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
            <td className="border px-4 py-2">{portion.month}</td>
            <td className="border px-4 py-2">{portion.peaksunlight}</td>
          </tr>
        
        ))}
        </tbody>
    </table>
  )
}
