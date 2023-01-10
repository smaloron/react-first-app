import { useState } from 'react';
export default function ListOfStuff () {
    const [stuffList, setStuff] = useState(['truc 1', 'truc 2', 'truc de ouf']);

    function deleteStuff (index) {
        const newState = [...stuffList];
        newState.splice(index, 1);
        setStuff(newState);
    }
    function getStuffItems () {
        return stuffList.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                    <button onClick={() => deleteStuff(index)}>Supprimer</button>
                </li>
            );
        })
    }

    const listStyle = {
        textAlign: 'left',
        color: '#FF8800'
    }

    function addStuff () {
        const newStuffName = 'truc ' + stuffList.length
        const newState = [...stuffList, newStuffName];
        setStuff(newState);
    }

    return (
        <div>
            <button onClick={addStuff}>Ajouter un truc</button>
            <ul style={listStyle}>{getStuffItems()}</ul>
        </div>
    )

}