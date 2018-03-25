import React from 'react';

const fiftyfifty = Math.random()<0.5;

class Fiftyfifty extends React.Component{
  
  render(){
    let task;
    if (fiftyfifty === true){
      task ='out'
    }else{
      task='to bed'
    }
    return (
    <h2>Tonight I'm going {task}. </h2>
    )
   }
 }
  
export default Fiftyfifty;
