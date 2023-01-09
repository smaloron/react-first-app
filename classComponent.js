import React from 'react';
class Person extends React.Component {

    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="person">
                <h1>{this.props.name}</h1>
                <p>job : {this.props.job} </p>
            </div>);
    }
}