import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../assets/F.png'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
    <div className='titles'>
      <Link to="/">
          <img src={Logo} alt='Logo' className='logo-img'/>
      </Link>      
      <Link to="/" className='title'>Descending</Link>
    </div>


    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li className='nav-link'><NavLink to="/">home</NavLink></li>
        <li className='nav-link'><NavLink to="/about">About Us</NavLink></li>
        <li className='nav-link'><NavLink to ="/service">Services</NavLink></li>
        <li className='nav-link'><NavLink to="/contact">Contact</NavLink></li>
        <span className='span'></span>
    </ul>
         
    {/* PRODUCTS LINK */}
    <div>
      <a href='https://view-finder-nine.vercel.app/' target='blank' className='product-link'>Our Products</a>      
    </div>
    
   </nav>
  )
}

export default Navbar;