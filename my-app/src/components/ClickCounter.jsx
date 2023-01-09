import React from "react";

function Button (props) {
    return (
        <button style={{ backgroundColor: props.color }}
            onClick={props.incrementState}>
            {props.text}
        </button>
    )
}
class StateComponent extends React.Component {
    state = { counter: 1 };
    clickHandler = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    render () {
        return (<div>
            <p>Nombre de clicks : {this.state.counter}</p>
            <button onClick={this.clickHandler}
            >
                ajouter
            </button>

            <Button
                text="hello"
                color={this.state.counter % 2 ? 'red' : 'green'}
                incrementState={this.clickHandler}
            />
        </div>
        );
    }
}
export default StateComponent;