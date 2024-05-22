import React, { useState } from 'react'

export default function Bt7() {
    const [input,setInput]=useState<string>()
    const input2 =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        let a=e.target.value
        let b = a.length
        setInput(b.toString())
    }
  return (
    <div>
        <h4>Bai 7</h4>
        <p>do dai :{input}</p>
      <textarea onChange={input2} name="" id=""></textarea>
    </div>
  )
}
