import React from "react";
import Button from './Button';


// By extending the React.Component class, Counter inherits functionality from it
class Talk extends React.Component {
  handleClick(){
    let speech = "blah blah blah";
    alert (speech);
  }
  
  render() {
    return (
      <Button onClick={this.handleClick} />
    )
  }
}



export default Talk;