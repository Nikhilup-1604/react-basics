import React, { Component } from 'react'
import Mark from './Mark'
export default class Derived extends Component {
  render() {
    console.log("Derived- Rendered (1)")
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Mark/>

      </div>
    )
  }
}
