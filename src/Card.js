import React from "react";
import "./Card.css";


// By extending the React.Component class, Counter inherits functionality from it
class Card extends React.Component {
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
      <div className='card'>
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    This is some text within a card body.
  </div>
         
  </div>

   </div>
    )}}



export default Card;
