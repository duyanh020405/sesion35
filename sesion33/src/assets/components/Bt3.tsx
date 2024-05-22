import React, { useState } from 'react'

export default function Bt3() {
    const [color,changeColor]=useState<string>("black") 
    const change =()=>{
        changeColor("red")
    }
  return (
    <div>
        <h4>Bai 3</h4>
      <p style={{color:color}}>Tieu de van ban </p>
      <button onClick={change}>Change Color</button>
    </div>
  )
}
