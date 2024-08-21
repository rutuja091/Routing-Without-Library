import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import "./About.css"
import aboutImg from "./about.png"
function About() {
  return (
    <div>
           <Navbar/>
       <h1 className='page-title'>About</h1>
       <img src= {aboutImg} className='header-img'/>
    </div>
  )
}

export default About
