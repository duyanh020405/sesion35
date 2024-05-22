import React, { useState } from 'react'

export default function Bt4() {
    const [show,setShow]=useState<string>("")
    const [button,setButton]=useState<string>("Hien")
    const change =()=>{
        if(button==="Hien"){
            setButton("An")
            setShow("Tieu de van ban")
        }
        else{
            if(button ==="An")
                setButton("Hien")
            setShow("")
            
        }
    }
  return (
    <div>
      <h4>Bai 4</h4>
      <button onClick={change}>{button}</button>
      <p>{show}</p>
    </div>
  )
}
