import { useState } from 'react'
export default function ControlledForm () {
    const [person, setPerson] = useState('Arya');
    function handleChange (ev) {
        setPerson(ev.target.value);
    }

    return (
        <form>
            <h1>Hello {person}</h1>
            <input type="text" name="firstName"
                value={person}
                onChange={handleChange} placeholder="Votre prénom" />
        </form>
    )
}