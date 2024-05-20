import React, { useRef, useState } from 'react'
import Users from './Users';
import {useNavigate} from 'react-router-dom'


function Login() {


  let navigateTousers = useNavigate()

  let err = useRef()


  let updateName = (e)=>{

    // console.log(e);
    e.preventDefault()

    let validation = getData.find((ele,i,a)=>{
      return ele.username === cid.current.value
    })

    // console.log(validation);

   if(validation.username===cid.current.value && validation.password===pwd.current.value){
    e.target.disabled=false;
    err.current.style.visibility="hidden"
    navigateTousers(`/users/${cid.current.value}`)
   }else if(validation.username!==cid.current.value){
    e.target.disabled=true;
    err.current.style.visibility="visible"
    err.current.innerHTML="invalid username"
   }else if(validation.password!==pwd.current.value){
    e.target.disabled=true;
    err.current.style.visibility="visible"
    err.current.innerHTML="invalid password"
   }else if(validation.username!==cid.current.value && validation.password!==pwd.current.value){
    e.target.disabled=true;
    err.current.style.visibility="visible"
    err.current.innerHTML="invalid credentials"
   }
   else if(validation.username==="" && validation.password===""){
    e.target.disabled=true;
    err.current.style.visibility="visible"
    err.current.innerHTML ="username or password should not be empty"
   }else if(validation.username===""){
    e.target.disabled=true;
    err.current.style.visibility="visible"
    err.current.innerHTML ="username should not be empty"
   }else if(validation.password===""){
    e.target.disabled=true;
    err.current.style.visibility="visible"
    err.current.innerHTML ="password should not be empty"
   }

  }


  let cid = useRef()
  let pwd =useRef()

  let getData = JSON.parse(localStorage.getItem("users"));
  // console.log(getData);



  return (
    <>
      <form action="">
        <h3>LOGIN PAGE</h3>
        <input type="text" name=""  placeholder='customer-Id'ref={cid}/>
        <input type="password" name=""  placeholder='password'ref={pwd}/>
        <button type='submit' onClick={updateName}>LOGIN</button>
      </form>
      <div className='error'>
      <h3 ref={err}></h3>
      </div>
    </>
  )
}

export default Login