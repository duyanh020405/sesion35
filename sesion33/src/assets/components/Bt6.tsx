import React, { useState } from 'react'

export default function Bt6() {
    const [count,setCount]=useState<number>(0)
    const tang =()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h4>Bai 6</h4>
        <p>count:{count}</p>
      <button onClick={tang}>Len</button>
    </div>
  )
}
