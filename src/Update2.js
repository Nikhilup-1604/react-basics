import React,{useEffect, useState} from 'react'

const Update2 = () => {
    const [count,setCount] = useState(0) 
    const [count1,setCount1] = useState(50)
    const handleIncrement = () =>{
        setCount(count+1);
        console.log("Count: ", count);
        
    }
    const handleDecrement = () =>{
        setCount1(count1-1)
        console.log("Count1: ",count1)
    }
    useEffect(()=>{
        console.log("useEffect called");
        console.log(count1)
    },[count1])
  return (
    <>
        <h1>Count up:{count}</h1>
        <button type="button" onClick={handleIncrement}>Increment</button>

        <h1>Count down:{count1}</h1>
        <button type="button" onClick={handleDecrement}>Decrement</button>


    </>
  )
}

export default Update2