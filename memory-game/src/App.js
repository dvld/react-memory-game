// 
// react
import React, { Component } from 'react'

// components
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'

// data
import images from './images.json'

// styling
import './App.css'

class App extends Component {
  state = {
    images,
    clicked: [],
    score: 0
  };

  // function to determine if card has been clicked
  ifHasBeenClicked = id => {
    let wasClicked = this.state.clicked;
    let currentScore = this.state.score;

    // if id of clicked image exists (meaning a clicked image already exists in the state.clicked array)
    if (wasClicked.includes(id)) {
      // run reset function
      reset();
      // return game over alert
      return alert('Game over! Try Again');
    } else {
      // push the clicked image to the state.clicked array
      wasClicked.push(id);
      // increment score
      this.state.score++;

      // if state.score equals 12
      if (currentScore === 12) {
        // run reset function
        reset();
        // return win alert
        return alert('Nice, you got them all!');
      };
    }

    // this.setState({
    //   images,
    //   clicked: [],
    //   score: wasClicked.length,
    // });
  }



  // function to handle card clicks
  // handleClick = event => {

  // }

  // function to randomize card order
  // rearrange = event => {
  //   event.preventDefault();
  //   this.state.images.forEach((image) => {
  //     console.log(image);
  //   });
  // }

  // function to reset game
  reset = event => {
    event.preventDefault();
    this.setState({
      clicked: [],
      score: 0
    });
  }


  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className='wrapper'>
          {this.state.images.map(image => (
            <Card
              onClick={this.handleClick}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App

