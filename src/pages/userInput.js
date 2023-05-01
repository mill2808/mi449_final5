import { useState } from 'react'

export default function UserForm(){
    const [location, setLocation] = useState('')
    const whenSubmitted = (e) => {
        e.preventDefault()
        setLocation(event.target.location.value)}
       
       
    return(
            <form onSubmit={whenSubmitted}>
                <label>Area Code:</label>
                <input 
                    type="text" 
                    value={location}
                />
                <button type="submit">Submit</button>
            </form>
    )
    

}