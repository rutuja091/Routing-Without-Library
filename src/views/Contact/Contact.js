import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import contactImg from "./conatct.png"
import "./Contact.css"
import Footer from '../../components/Footer/Footer'
function Contact() {
  return (
    <div>
           <Navbar/>
      <h1 className='page-title'>Contact</h1>
      <img src={contactImg} className='header-img'/>

      <Footer/>
    </div>
  )
}

export default Contact
