import React, { Component } from 'react'

export default class Update1 extends Component {
    constructor(props){
        super(props);
        this.state={
            mroll:this.props.roll
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("Get Derived State from Props is called");
          if(props.roll !== state.mroll){  //(102 !== 101) // true
                return {mroll : props.roll}; // mroll : 102
          } 
          return null;
    }
  render() {
    console.log("(2) rendered");
    return (
        <>
            <h1>{this.state.mroll}</h1>
        </>
        
    )
  }
}
