import React, { useRef, useState } from 'react'
import "./Signup.css"
import {useNavigate} from 'react-router-dom'

function Signup() {

let letterPattern = /^[a-zA-Z]*$/
let numberpattern = /^[0-9]*$/


  let [signup,setsignup] = useState({name:"",password:""})
  let navigateToLogin = useNavigate()

  let updateSignup = ({target:{name,value}})=>{
    setsignup({...signup,[name]:value})
  }


  let pass = useRef()
  let uname = useRef()
  let but =useRef()
  let errh = useRef()


  let sendFormData = (e)=>{
    e.preventDefault()
  let users = JSON.parse(localStorage.getItem("users") || "[]");     
    console.log(signup);
    console.log(pass.current);
    console.log(e.target);
    if(pass.current.value==="" && uname.current.value===""){
      e.target.disabled=true;
      errh.current.innerHTML="password and username should not be empty"
      errh.current.style.visibility="visible"
    }else if(pass.current.value===""){
      errh.current.innerHTML="password should not be empty"
      errh.current.style.visibility="visible"
    }else if(pass.current.value.match(!numberpattern)){
      e.target.disabled=true;
      errh.current.style.visibility="visible"
      errh.current.innerHTML="password should only have numbers"
    }else if(uname.current.value.match(!letterPattern)){
      e.target.disabled=true;
      errh.current.style.visibility="visible"
      errh.current.innerHTML="username should only have alphabets"
    }else if(uname.current.value===""){
      e.target.disabled=true;
      errh.current.innerHTML="username should not be empty"
      errh.current.style.visibility="visible"
    }else{
      e.target.disabled=false;
      errh.current.style.visibility="hidden"
      let user1 ={
        username:uname.current.value,
        password:pass.current.value
      } 
      users.push(user1)
      localStorage.setItem("users", JSON.stringify(users));
      e.target.disabled=false;
      e.target.style.cssText = `background-color:green`
      navigateToLogin('/login')
    }
    
    // // if(pass.current.value!==""){
    //   let user1 ={
    //     username:uname.current.value,
    //     password:pass.current.value
    //   } 
    //   users.push(user1)
    //   localStorage.setItem("users", JSON.stringify(users));
    //   errh.current.style.visibility="hidden"
    //   e.target.disabled=false;
    //   e.target.style.cssText = `background-color:green`
    // // }
  }




  return (
    <section>
    <form>
    <h2>Registration Form</h2>
      <input  type="text" placeholder='username or account-number' onChange={updateSignup} name='name' ref={uname}/>
      {/* <input  type="email" placeholder='email' onChange={updateSignup} name='email'/> */}
      <input  type="password" placeholder='password' onChange={updateSignup} name='password' ref={pass} />
      <button type='submit' onClick={sendFormData} ref={but}>Register</button>
    </form>
    <div className='error'>
      <h3 ref={errh}></h3>
    </div>
    </section>
  )

}

export default Signup