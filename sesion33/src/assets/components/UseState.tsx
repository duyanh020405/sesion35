import { useState } from 'react'
export default function UseState() {
    /*
       Hook là những cái hàm thôi, khi sử dụng hàm để ý cho thầy
       đầu vào của hàm , đâuf ra trả về kết quar là gì ?
       useState dùng để quản lí trạng thái dữ liệu
    */
    // const result =useState(0)
    // const [c,d]=useState(0)
    // console.log(result);
    // let arr =[5,6]
    // let [a,b] = arr
    const [count,Setcount]=useState<number>(0)
    const tang=()=>{
        Setcount(count+1)
        Setcount(a=>a+1)
        Setcount(b=>b+1)
    }
    const giam=()=>{
        Setcount(count-1)
    }
  return (
    <div>
      <p>Gia tri count : {count}</p>
      <button onClick={tang}>+</button>
      <button onClick={giam}>-</button>
    </div>
  )
}
