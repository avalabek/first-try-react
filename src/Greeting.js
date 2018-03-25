import React from "react";
import Fiftyfifty from "./Fiftyfifty";

class Greeting extends React.Component {

  render() {
    return (
      <div>
        <h1> Hi there, {this.props.firstName}</h1>
        <Fiftyfifty />
      </div>

    )
  }
}



export default Greeting;
