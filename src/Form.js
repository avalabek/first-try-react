import React from 'react';
import Card from "./Card";

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { userInput: '' };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <h4>Type anything you want in the box.</h4>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <Card message= {this.state.userInput} />
      </div>
    );
  }
}

export default Form;