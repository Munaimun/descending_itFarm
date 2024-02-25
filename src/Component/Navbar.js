import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../assets/F.png'

const Navbar = () => {
  return (
   <nav className='header'>

    {/* THE LOGO & NAME */}
    <div className='title'>
      <Link to="/">
          <img src={Logo} alt='Logo' className='logo-img'/>
      </Link>      
      <Link to="/" className='title-name'>Descending</Link>
    </div>

    {/* THE MAIN MENU */}
    <div id='nav-links'>
      <div id='menu'>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <ul>
        <li className='nav-link'><NavLink to="/">home</NavLink></li>
        <li className='nav-link'><NavLink to="/about">About Us</NavLink></li>
        <li className='nav-link'><NavLink to ="/service">Services</NavLink></li>
        <li className='nav-link'><NavLink to="/contact">Contact</NavLink></li>
        <span className='span'></span>
      </ul>
    </div>

    {/* PRODUCTS LINK */}
    <div>
      <a href='https://view-finder-nine.vercel.app/' target='blank' className='product-link'>Our Products</a>      
    </div>
   </nav>
  )
}

export default Navbar;