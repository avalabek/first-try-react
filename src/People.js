import React from "react";
import List from "./List";

// import Listitem from "./Listitem";
// The below takes the array and maps them into list items
 const people = ["Does", "This", "Work"];
// the below doesn't work
// const people = {this.state.friends}
const peopleLis = people.map(person =>
  <li>{person}</li>
);
// By extending the React.Component class, Counter inherits functionality from it
class People extends React.Component {

  render() {
    return (
      <div>
      <ul>{peopleLis}</ul>
      </div>
      


    )
  }
}





export default People;