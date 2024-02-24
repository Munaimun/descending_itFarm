import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../assets/F.png'

const Navbar = () => {
  return (
    <div className='header'>

    <div id='title'>
      <Link to="/" className='logo-img'>
          <img src={Logo} alt='Logo' className='logo-img' />
      </Link>
      <div className='title-name'>
        <Link to="/">Descending</Link>
      </div>
    </div>

    <div id='nav-links'>
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/about">About Us</Link>
      <Link className='nav-link active' to="/service">Services</Link>
      <Link className='nav-link' to="/contact">Contact</Link>
      <span className='span'></span>
    </div>

    <div className='products-link'>
      <a href='https://view-finder-nine.vercel.app/' target='_blank' rel='noopener noreferrer'>Our Products</a>
    </div>
  </div>
  )
}

export default Navbar;