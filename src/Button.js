import React from "react";



class Button extends React.Component {

  render() {
    return (
      <div>
        <button type="button" className="btn btn-outline-primary" onClick={this.props.onClick}>Button </button>
        
      </div>



    )
  }
}



export default Button;