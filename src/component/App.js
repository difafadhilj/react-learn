import React from 'react';
import ReactDom from 'react-dom';

class Car extends React.Component{
    render () {
        return (
            <h1>I am a car. {this.props.greet}</h1>
        );
    }
}

export default Car;