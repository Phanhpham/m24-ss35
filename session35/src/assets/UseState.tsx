import { useState } from "react";

export default function UseState() {
    const [count,setCount]=useState<number>(0);
    // const result =useState(0);
    const increase=()=>{
            setCount(pre => pre + 1);
            setCount(a=>a + 2);
            setCount(b=>b + 3);
        
    }
  return (
    <div>UseState
        <p>gia tri bien count:{count}</p>
        <button onClick ={increase}>tăng</button> 
        <button onClick ={()=>setCount(count-1)}>giam</button> 
          </div>
  )
}
