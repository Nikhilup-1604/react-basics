

import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
    return(
        this.state.isLoggedIn? 
        <div>Welcome Nikhil </div> :
        <div>Welcome Guest</div>
    )
    
    {// SECOND WAY --> Using Element Variable
    // let message;
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Nikhil</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

    // return (
    //     <div>{message}\</div>
    // )
    
    // FIRST WAY--> Using if-else normally
    {// if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Nikhil</div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // // return (
    //   <div>
    //     <div>Welcome Nikhil</div>
    //     <div>Welcome guest</div>
      
    //   </div>
    // )
    }
    }
  }
}

export default UserGreeting