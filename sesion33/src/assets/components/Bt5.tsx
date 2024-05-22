import React, { useState } from 'react'

export default function Bt5() {
    const [input,setInput]=useState<string>("")
    const newInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)

    }
  return (
    <div>
        <h4>Bai 5</h4>
        <p>{input}</p>
      <input type="text" onChange={newInput} />
    </div>
  )
}
