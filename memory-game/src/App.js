
// react
import React, { Component } from 'react';

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

// data
import Images from './images.json';

// styling
import './App.css'

class App extends Component {

  // initial state
  state = {
    Images,
    Clicked: [],
    score: 0,
    highScore: 0
  };

  // what happens when cards are clicked
  handleClick = event => {

    // variables
    const index = event.target.alt;
    const lastClicked = this.state.Clicked.indexOf(index) > -1;

    // test
    console.log(`Last clicked ${lastClicked}`);

    // if the 'lastClicked' image already exists within in the 'Clicked' array
    if (lastClicked) {

      // set state to...
      this.setState({

        // rearrange images
        Images: this.state.Images.sort((a, b) => {
          return 0.5 - Math.random();
        }),

        // empty the 'Clicked' array
        Clicked: [],

        // reset 'score' to zero
        score: 0,
      });

      // alert loss
      alert('Game over! Try Again');

      // otherwise (image does not already exist in 'Clicked array)
    } else {

      // set state to...
      this.setState(
        {

          // rearrange images
          Images: this.state.Images.sort((a, b) => {
            return 0.5 - Math.random();
          }),

          // push 'lastClicked' image to 'Clicked' array
          lastClicked: this.state.Clicked.push(index),

          // increment 'score'
          score: this.state.score + 1,
        },

        () => {

        // if 'score' reaches 12
          if (this.state.score === 12) {

            // alert win
            alert('You win!');

            // set state to...
            this.setState({

              // rearrange images
              Images: this.state.Images.sort((a, b) => {
                return 0.5 - Math.random();
              }),

              // empty 'lastClicked' array
              lastClicked: [],

              // reset 'score' to zero
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <div className='card-area'>
          {this.state.Images.map(images => (
            <Card
              className='wrapper'
              id={images.id}
              key={images.id}
              name={images.name}
              image={images.image}
              onClick={this.handleClick}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App