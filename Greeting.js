import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  render() {
    return (
      <h2>
        My name {this.props.greet.name}. I am {this.props.greet.age} yo and i am{" "}
        {this.props.greet.gender}.
      </h2>
    );
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = {
      name: "Difa Fadhil Juliansyah",
      age: 19,
      gender: "Male"
    };
    return (
      <div>
        <Car greet={carinfo} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById("reactElement"));
