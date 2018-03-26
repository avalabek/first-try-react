import React, { Component } from "react";
//import React from "react";
//the above is the same
//allows you to not say React.Component

class Input extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  componentDidMount() {
    console.log("current state", this.state)
  }
  // handle any changes to the input fields
  //takes in an event, deconstructs it
  //NB: this is useful for input changes to copy
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    //name comes from the render function
    //?? why two variable names, why brackets? how does it know 
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    //computed value 
    this.setState({
      //the bracket around name here indicates it will give the value of name, ie: password, and username
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Input;
