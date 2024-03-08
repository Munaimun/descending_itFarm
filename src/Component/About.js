import React from 'react'
import './About.css'
import office from "../assets/officeDesk.jpg"
import officeWork from "../assets/worling.jpg"
import working from "../assets/engineer.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='about-container'>

      <div className='welcome-note'>Welcome to Descending - Where innovation meets efficiency</div>

        {/* 1st div */}
      <div className='about'>

          <img src={office} alt='officephoto' className='office-photo'/>

      <div className='inside-about'>
            <p className='div-title'>Descending's Commitment to Your Success</p>
          <div className='about-text'>
            At <b>Descending</b>, we're dedicated to pioneering the future of technology and empowering businesses of all sizes to thrive in an increasingly digital world. With a relentless focus on innovation, creativity, and customer satisfaction, we strive to be the premier destination for all your technology needs.
          </div>        
        </div>
      </div>

      {/* 2nd div */}
      <div className='about'>
        <div className='inside-about'>
        <p className='div-title'>Connecting Businesses with Technology</p>
          <div className='about-text'>
          Our journey began with a simple yet powerful vision: to bridge the gap between you and technology by providing a wide array of reliable, scalable, and cost-effective solutions. From empowering e-commerce ventures to streamlining ERP systems and creating dynamic websites, our mission has remained unwavering since day one. We take pride in delivering exceptional service and concrete results across diverse technological realms for our esteemed clients.
          </div>
        </div>
        
        <img src={officeWork} alt='workingOffice' className='office-photo' />
      </div>

      {/* 3rd div */}
      <div className='working'>
          <p className='div-title'>Connecting Businesses with Technology</p>

        <div className='working-about'>
          <img src={working} alt='workingOffice' className='office-photo' />
          <div className='working-text'>At the core of our approach is a belief in the power of collaboration. We understand that every situation is unique, so we actively listen, learn, and customize our solutions to fit your needs. Whether you're starting fresh or refining existing processes, we have the expertise to help you succeed. Let's embark on this journey together, hand in hand.</div>
        </div>
      </div>    
       
    </div>

     <div className='links'>
        <p className='links-title'>Let's Build Together!!!</p>
          <p className='links-text'>Join Descending on a journey of digital growth. Whether you're starting fresh or leveling up, we're here to   collaborate and succeed side by side. <button className='links-btn'><Link to="/service">Explore Our Offerings</Link></button>
        </p>
        
     </div>
  </>
  )
}

export default About;