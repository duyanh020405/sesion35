import React, { useState } from 'react'
export default function Bt8() {
  let [u,setU]=useState<string>('')
    const handleChange =(e:React.ChangeEvent<HTMLSelectElement>)=>{
      setU(e.target.value)
    }
  return (
    <div>
        <h4>Bai 8</h4>
        <p>Chon :{u}</p>
      <select onChange={handleChange} name="" id="">
        <h4>Bai 8</h4>
        <option value="">Chon tinh , thanh pho</option>
        <option value="Thai Binh">Thai Binh</option>
        <option value="Hai Phong">Hai Phong</option>
        <option value="Dark Lak">Dark Lak</option>
      </select>
    </div>
  )
}