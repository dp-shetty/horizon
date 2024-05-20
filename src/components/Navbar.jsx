import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='formNav'>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/signup">SIGNUP</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      {/* <NavLink to="/products">PRODUCTS</NavLink> */}
      <NavLink to="/users">USERS</NavLink>
    </nav>
  )
}

export default Navbar