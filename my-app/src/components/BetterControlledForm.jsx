import { useState } from 'react'
export default function ControlledForm () {
    const [person, setPerson] = useState({
        firstName: 'Arya',
        lastName: 'Stark',
        universe: 'Game Of Throne'
    });
    function handleChange (ev) {
        const newState = { ...person };
        newState[ev.target.name] = ev.target.value
        setPerson(newState);
    }

    function handleSubmit (ev) {
        ev.preventDefault();
        console.log(person)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName"
                value={person.firstName}
                onChange={handleChange} placeholder="Votre prénom" />
            <input type="text" name="lastName"
                value={person.lastName}
                onChange={handleChange} placeholder="Votre nom" />
            <input type="text" name="universe"
                value={person.universe}
                onChange={handleChange} placeholder="Votre univers" />
            <button>Valider</button>
        </form>
    )
}