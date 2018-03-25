import React from "react";
import Listy from "./Listy";
import Card from "./Card";
import Greeting from "./Greeting";
import People from "./People";

// By extending the React.Component class, Counter inherits functionality from it
class List extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    friends: [" Chi Chi", " Neville", " Francine"]
  };

  // handleIncrement increments this.state.count by 1
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="container">
        <div className="jumbotron" style={{ backgroundColor:"#e8d5dc"}}>
      
        <h1>My friends</h1>
    
          <h1>are named: {this.state.friends}</h1>
          {/* <button className="btn btn-primary" onClick={this.handleIncrement}> */}
            {/* Increment
          </button> */}
        <Listy friends="why can't I pass in a prop?"/>
        <Greeting firstName='ANDREYA' />
        <Greeting firstName={this.state.friends}/>
      </div>
  
        <Card />
      {/* <br />
      <Card />
      <br />
        <Card /><br /> */}
      <Listy friends="silly" />
      <People friends={this.props.friends} />
      </div>
    );
  }
}

export default List;
