import React from "react";
import Listitem from "./Listitem";

// By extending the React.Component class, Counter inherits functionality from it
class Panel extends React.Component {
  
  render() {
    return (
      <ul className="list-group">
       <Listitem  />
      </ul>

      
    )
  }
}



export default Panel;
