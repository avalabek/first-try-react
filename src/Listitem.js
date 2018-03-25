import React from "react";
import List from "./List";
// Trying to use the below to map through friends array and give a key to each. but not sure why,yet
// const peopleLis = {this.state.friends}.map((friend, i) =>
//   <li key={"friend_" + i}>{friend}</li>);

// By extending the React.Component class, Counter inherits functionality from it
class Listitem extends React.Component {
 

          render() {
    return (
      <ul>
        {/* These first two li render blank, why?
        <li className="list-group-item" friends ={this.props.friends}></li>
        <li className="list-group-item" friends ={this.props.friends}></li> */}
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    )
  }
};
      export default Listitem;