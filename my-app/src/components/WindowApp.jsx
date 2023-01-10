import { useState } from 'react';
function Button (props) {
    return (<button onClick={props.handler}>{props.text}</button>)
}

function Window (props) {
    return (
        <div style={{ display: props.open ? 'block' : 'none' }}>
            <h1>Fenêtre</h1>
        </div>
    )
}

export default function WindowApp () {

    const [open, setOpen] = useState(false)


    function openHandler () {
        console.log(open)
        setOpen(() => {
            const newOpen = !open;
            console.log(newOpen);
            return newOpen;
        });
    }

    return (
        <div style={{
            marginTop: '30px'
        }} >
            <Button
                text={open ? 'Fermer' : 'ouvrir'}
                handler={openHandler} />
            <Window open={open} />
        </div>
    )
}