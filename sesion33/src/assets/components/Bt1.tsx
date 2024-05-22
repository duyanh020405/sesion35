import React, { useState } from 'react'

export default function Bt1() {
    const [name]=useState<string>("Nguyen Van A")
  return (
    <div>
      <p>Ho va ten :{name}</p>
    </div>
  )
}
