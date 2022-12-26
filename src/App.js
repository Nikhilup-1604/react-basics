// useState-->
// import React,{useState} from "react";

// function App(){
//     const [name,setName]=useState("xyz");
//     const [roll,setRoll] = useState('101');
//     const handleClick = () =>{
//         setName('Nikhil');
//         setRoll("29");
//     }
//     return <React.Fragment>
//         <h1>Name: {name}</h1>
//         <h2>Roll: {roll}</h2>
//         <button type="button" onClick={handleClick}>Click Me!!</button>

//     </React.Fragment>
// }

// export default App;


// useEffect-->
                             
import React,{Component} from "react";
import StateUp from "./StateUp";
// import useCustomCounter from "./Custom";
// import Controlled from "./Controlled";
// import Form2 from "./Form2";
// import NameList from "./NameList";
//  import Student2 from "./Student2";
//  import Update2 from "./Update2";
// import UserGreeting from "./UserGreeting";

// function App(){
//     const[count,setCount] = useState(0);
//     const[count1,setCount1] = useState(50);
//     const handleIncrement = ()=>{
//         setCount(count+ 1);
//     }
//     const handleDecrement = ()=>{
//         setCount1(count1-1);
//     }
//     useEffect(()=>{
//         console.log("useEffect called ");

//     },[count]);
//     return(
//         <>
//             <h1>Count up: {count}</h1>
//             <button type="button" onClick={handleIncrement}>Increment</button>

//             <h1>Count Down: {count1}</h1>
//             <button type="button" onClick={handleDecrement}>Decrement</button>
//         </>
//     )

// const App =()=>{
//     // When you will use useCustomCounter it will return two things(in form of object) as defined earlier in useCustomCounter
//     const data = useCustomCounter();
//     const data1 = useCustomCounter();
//     return(
//         <>
//            <h1>Count up: {data.count}</h1> 
//            <button type="button" onClick={data.handleIncrement}>Increment</button>

//            <h1>Count up: {data1.count}</h1> 
//            <button type="button" onClick={data1.handleIncrement}>Increment</button>
//         </>
//     )
// }

// Lifting state up --> 

export default class App extends Component{
    state={
        name:"Aniket"
    };
    render(){
        return (
            <StateUp name={this.state.name} />
        )
    }
}

