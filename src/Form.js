import React,{ useState} from 'react'

const  Form = () => {
  const[value,setValue] = useState("")

  const [text,setText] = useState("Hello There, this is some text in a text area")
  const handleChange = (e) =>{
    console.log(e.target.value)
    setValue(e.target.value)
  }
  const handle = (e =>{
    setText(e.target.value)
    console.log(e.target.value);
  })
    return (  
        <div>
          <form action="">
            <h2>Controlled by React</h2>
            <input type="text" value={value} onChange={handleChange} /> <br />
            <textarea value={text}  onChange={handle}/>
          </form>
        </div>
    )
  }

export default Form;