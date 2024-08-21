import React from 'react'
import Navbar from "./Navbar"
import homeImg from "./home.png"

function Home() {
  return (
    
    <div>
        <Navbar/>
      <h1>Home</h1>
      <img src={homeImg}className='header-img'/>
    </div>
  )
}

export default Home
