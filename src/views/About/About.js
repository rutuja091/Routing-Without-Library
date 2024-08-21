import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import "./About.css"
import aboutImg from "./about.png"
import Footer from '../../components/Footer/Footer'
function About() {
  return (
    <div>
           <Navbar/>
       <h1 className='page-title'>About</h1>
       <img src= {aboutImg} className='header-img'/>

       <Footer/>
    </div>
  )
}

export default About
