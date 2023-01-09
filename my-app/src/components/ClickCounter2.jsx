import React from 'react';
import { useState } from 'react';
export default function UseStateDemo () {
    const [clickCount, setClickCount] = useState(0);

    const addClick = () => {
        setClickCount(clickCount + 1)
    }
    return (
        <div>
            <p>Nombre de clics {clickCount}</p>
            <button onClick={addClick}>
                Cliquez ici
            </button>
        </div>
    );
}