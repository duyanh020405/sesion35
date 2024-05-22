import React, { useState } from 'react'

export default function Bt9() {
    const [hi,setHi]=useState<string>('')
    const chon=(e:React.ChangeEvent<HTMLFormElement>)=>{
        setHi(e.target.value)
    }

  return (
    <div>
        <h4>Bai 9</h4>
        <p>Chon :{hi}</p>
      <form onChange={chon} >
        <p><input type="radio" value="Nam" />Nam</p>
        <p><input type="radio" value="Nu" />Nu</p>
        <p><input type="radio" value="Other" />Other</p>
      </form>
    </div>
  )
}
