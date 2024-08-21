import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import contactImg from "./conatct.png"
import "./Contact.css"
function Contact() {
  return (
    <div>
           <Navbar/>
      <h1 className='page-title'>Contact</h1>
      <img src={contactImg} className='header-img'/>
    </div>
  )
}

export default Contact
