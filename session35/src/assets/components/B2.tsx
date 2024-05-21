import React, { useState } from 'react'
interface User{
    id:number,
    name:string,
    price:string,
    quantity:number,
}
export default function B2() {
const [user,setUser]=useState<User>({
    id:1,
    name:"hoa",
    price:"20$",
    quantity:3,
});
  return (
    <div>B2
        <h1>Bai2</h1>
        <h3>Thong tin san pham </h3>
        <p>id la: {user.id}</p>
        <p>ten la: {user.name}</p>
        <p>gia tien la: {user.price}</p>
        <p>so luong la: {user.quantity}</p>
    </div>
  )
}
