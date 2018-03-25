import React from "react";
import Panel from "./Panel";
import Listitem from "./Panel";
import "./Listy.css";


// By extending the React.Component class, Counter inherits functionality from it
class Listy extends React.Component {
  
  // Setting the initial state of the Counter component
  // state = {
  //   friends: ["Chi Chi", "Francine", "Neville"]
  // };

  // handleIncrement increments this.state.count by 1
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <h1>Where is this? {this.props.friends}</h1>
        <Panel />
        
         </div>
    );
  }
}
    


export default Listy;
