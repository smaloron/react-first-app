function TextField (props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} classname="form-label">{props.label}</label>
            <input type="text" name={props.name} id={props.name} className="form-control" />
        </div>
    );
}

function Form () {
    return (
        <form>
            <TextField name="firstName" label="Prénom" />
            <TextField name="lastName" label="Nom de famille" />
            <button className="btn btn-primary w-100">Valider</button>
        </form>
    );
}

function App () {
    return <div className="p-4"><Form /></div>;
}

ReactDOM.render(<App />, document.getElementById("app"));