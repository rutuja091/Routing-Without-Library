import React from 'react'
import Navbar from "./Navbar"
import aboutImg from "./about.png"
function About() {
  return (
    <div>
           <Navbar/>
       <h1>About</h1>
       <img src= {aboutImg} className='header-img'/>
    </div>
  )
}

export default About
