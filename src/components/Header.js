import React from 'react'
import logo from "../assets/image/logo_duende.png"

function Header() {
  return (
    <div className='logo'>
    <div><img src={logo} alt="Logo"></img></div>
    </div>
  )
}

export default Header