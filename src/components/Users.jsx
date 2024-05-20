import React from 'react'
import { useParams } from 'react-router-dom';
import "./Users.css"

function Users() {

  let {pid} = useParams()

  let getData = JSON.parse(localStorage.getItem("users"));

  let user = getData.find((e)=>{
    // console.log(e);
    // console.log(e.username===pid);
    return e.username === pid
  
  })

  // console.log(user);

  return (
    <>
    <div className='user'>
    <h3>NAME: {user.username}</h3>
    {/* <h3>PASSWORD: {user.password}</h3> */}
    <h3>ACCOUNT TYPE: SAVINGS</h3>
    <h3>AVAILABLE BALANCE: ${Math.floor(Math.random()*10000000)}</h3>
    <h3>ACCOUNT NUMBER: {Math.floor(Math.random()*10000)}</h3>
    </div>
    </>
  )
}

export default Users