import React from 'react'

import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'
import img from './img.json'

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card 
        name={img[0].name}
        image={img[0].image}
      />
      
      <Footer />
    </div>
  )
}

export default App
