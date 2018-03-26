import React from "react";


// By extending the React.Component class, Counter inherits functionality from it
class Input extends React.Component {
  // constructor(props){
  //   super(props);
  //   // set initial state to empty
  //   this.state = {userInput: ""};
  // }
  // make a function to listen for events
  handleUserInput = event => {
    const {userInput, value} = event.target;
    this.setState({
      [userInput]: value
    });
  };
  // handleUserInput(e){
  //   this.setState({
  //     userInput: e.target.value
  //   });
  // }
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Name</span>
          {/* set upf event listener attribute onChange= and set value attribute */}
          <input onChange={this.handleUserInput} value={this.state.userInput} type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        {/* put the value where you want it to render on the page */}
         <h1>{this.state.userInput}</h1>

      </div>
     
        
        
     
      
    
   



    )
  }
}



export default Input;