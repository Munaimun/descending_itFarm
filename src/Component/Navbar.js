import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='header'>

      <div className='logo'>
        <Link to="/">Descending</Link>
      </div>

      <div id='nav-links'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/about">About Us</Link>
        <Link className='nav-link active' to="/service">Services</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
        <span className='span'></span>
      </div>

        <div className='products-link'>
          <a href='https://view-finder-nine.vercel.app/' target='blank'>Our Prodects</a>
        </div>
    </div>
  )
}

export default Navbar;