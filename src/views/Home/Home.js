import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import homeImg from "./home.png"
import "./Home.css"

function Home() {
  return (
    
    <div>
        <Navbar/>
      <h1 className='page-title'>Home</h1>
      <img src={homeImg}className='header-img'/>
    </div>
  )
}

export default Home
