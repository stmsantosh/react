import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className='logo' />
      <ul className='header-menu'>
        <li><a href="">Home</a></li>
        <li><a href="">Programs</a></li>
        <li><a href="">Why Us</a></li>
        <li><a href="">Plans</a></li>
        <li><a href="">Testimonials</a></li>
      </ul>
    </div>
  )
}

export default Header
