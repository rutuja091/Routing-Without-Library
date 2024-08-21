import React from 'react'
import AKP from "./Aga-Khan-Palace-Pune-India.webp"
function App() {
  return (
    <div>
      <h1>This is App component </h1>
      <img src="https://www.savaari.com/blog/wp-content/uploads/2022/08/Pune-city-in-Arai-Hills-74449-pixahive-768x542-1.jpg" height="350px" width="400px"/>
      <img src ={AKP}height="350px"width="400px"/>
    </div>
  )
}

export default App
