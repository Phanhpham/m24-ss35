import React ,{useState}from 'react'

export default function B1() {
    const[name,setName]=useState<string>("nguyen van a");
  return (
    <div>B1
        <h1>Bai1</h1>
        <h2>Ho va ten :{name}</h2>
    </div>
  )
}
