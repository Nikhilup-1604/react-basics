import React, { Component } from 'react'
import Update1 from './Update1';

export default class Updating extends Component {
    constructor(){
        super();
        this.state={
            roll:101
        };
    }
    clickHandle = () =>{
        console.log("Button clicked")
        this.setState({roll:this.state.roll + 2})

    }

  render() {
    console.log("(1) rendered")
    return (
      <div>
        <Update1 roll={this.state.roll}/>
        <button onClick={this.clickHandle}>Change!!</button>
      </div>
    )
  }
}





