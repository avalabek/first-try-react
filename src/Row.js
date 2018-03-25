import React from "react";
import "./Row.css";
import "./Card";

// By extending the React.Component class, Counter inherits functionality from it
class Row extends React.Component {
  render() {
    return (
      <div>    
        <div className="row">
        <Card />
        </div>
      </div>
        
  

  
    )
  }
}



export default Row;