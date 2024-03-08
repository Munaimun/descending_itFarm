import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import './LayOutDesign.css'


const MainLayout = () => {
  return (
    <>    
      <Navbar />
      <div className='layout'>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default MainLayout;