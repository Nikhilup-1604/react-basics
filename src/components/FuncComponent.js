import React from 'react'

const FuncComponent = () => {

    function clickHandler(){
        console.log("Button clicked");
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FuncComponent