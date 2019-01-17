import React, {Component } from 'react'

// import Navbar from './components/Navbar/Navbar'
// import Jumbotron from './components/Jumbotron/Jumbotron'
import Card from './components/Card/Card'
// import Footer from './components/Footer/Footer'
import img from './img.json'

class App extends Component {
  state = {
    img
  };

  render() {
    return (
      <div>
        <Card
          id={img.id}
          key={img.id}
          name={img.name}
          image={img.image}
        />
      </div>
    );
  }
}

export default App
