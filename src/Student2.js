import React, { useEffect, useState } from 'react';

const Student2 = () =>{
    const [name,setName] = useState("Nikhil");
    const [location,setLocation] = useState("Gkp");
    const [date,setDate] = useState("16-Apr");

    const handleClick = () =>{
        setName("Aniket");
        setLocation("Bilari")
        setDate("22-Dec")

       
    }
    useEffect((e)=>{
        console.log("ddddd")
    })
 
    return <>
        <h1>Name : {name}</h1>
        <h1>Location : {location}</h1>
        <h1>Day: {date}</h1>


        <button onClick={handleClick} >Change</button>
    </>
}

export default Student2;   