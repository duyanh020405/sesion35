import React, { useState } from 'react'
interface Sp {
    id:number,
    name:string,
    price:number,
    quantity:number
}
export default function Bt2() {
    const [sp,setSanpham]=useState<Sp>({
        name:"Iphone1",
        id:1,
        price:1000,
        quantity:2
    })

  return (
    <div>
      <h4>Bai 2</h4>
      <p>Thong tin san pham :</p>
      <p>name:{sp.name}</p>
      <p>id:{sp.id}</p>
      <p>price:{sp.price}</p>
      <p>quantity :{sp.quantity}</p>
    </div>
  )
}
