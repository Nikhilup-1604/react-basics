import React,{Component} from 'react';
import Derived from './Derived';
export default class Mounting extends React.Component{
    constructor(props){
        super(props);
        console.log("Mounting constructor called");
        //console.log(props );

        this.state={
            roll:"101"
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("App- Get Derived State called")
        console.log(props,state)
        return null;
    }

    componentDidMount(){
        //get data from server and set the data to state
        console.log("Mounting (1) componentDidMount");
    }

    render(){
        console.log("Mounting- Rendered (0)");
        return  (
            <Derived name="nikhil"/>
        )
    }
}