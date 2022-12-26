import React from 'react'
import Person from './Person'

function NameList() {

    const names=["Bruce","Clark","Diana","Bruce"]
    const nameList = names.map((name,index) => <h2 key={index}> {index} {name}   </h2>)
    

    const persons = [
        {
            id:1,
            name:"Bruce",
            age:30
        },
        {
            id:2,
            name:"Clark",
            age:39
        },
        {
            id:3,
            name:"Diana",
            age:33
        },
    ]
    const personList = persons.map((name,index) =><Person  key={persons.id} person={persons}/>)
  return (
    <div>
        {/*<h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        {personList}*/}
        {nameList}
       
    </div>
  )
}

export default NameList