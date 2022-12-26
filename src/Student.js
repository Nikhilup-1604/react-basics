

// const  Student=(props)=>{
//     return <h1> Hello Me {props.children} </h1>

// }

import React,{Component} from 'react';

//Functional Component
// const Student=(props)=>{
//     const handleClick=(e)=>{
//         // e.preventDefault();
        
//         console.log("Button Clicked ");

//     }
//     return (
//         <div>
//             <h1> Hello {props.name}</h1>
//             <a href="http://www.youtube.com" target={'_blank'} onClick={handleClick} rel="noreferrer">Click ME!!</a>
            
//         </div>
//     )
// }

class Student extends Component{
    state={
        id:1,
        name:"Aniket"
    }
    handleClick=(id,e)=>{
        console.log("Button Clicked")
        console.log(id)
        console.log(e);
        this.setState({name:""})
        // this.setState({name:"Nikhil"})
    }
    handleClickArg = (e) =>{
        this.handleClick(this.state.id,e)
    }

    render(){
        return(
            <>  
                <h1>Hello,{this.state.name} </h1>
                <button onClick={this.handleClickArg}>Delete</button>
            </>
        )

    }
}
// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//                 <h2>Your Roll No. is {this.props.roll}</h2>
//             </div>
//         )
//     }
// }

// Student.defaultProps={
//     name:"Aniket",
//     roll:12
// }
export default Student;