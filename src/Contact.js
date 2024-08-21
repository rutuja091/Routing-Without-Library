import React from 'react'
import Navbar from "./Navbar"
import contactImg from "./contact.png"
function Contact() {
  return (
    <div>
           <Navbar/>
      <h1>Contact</h1>
      <img src={contactImg} className='header-img'/>
    </div>
  )
}

export default Contact
