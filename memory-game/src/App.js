
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
// import './App.css'

class App extends Component {

  state = {
    Images,
    Clicked: [],
    score: 0,
    highScore: 0
  };

  handleClick = event => {
    const index = event.target.alt;
    const lastClicked = this.state.Clicked.indexOf(index) > -1;
    console.log(`Last clicked ${lastClicked}`);

    if (lastClicked) {
      this.setState({
        Images: this.state.Images.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        Clicked: [],
        score: 0
      });
      alert('Game over! Try Again');
    } else {
      this.setState(
        {
          Images: this.state.Images.sort((a, b) => {
            return 0.5 - Math.random();
          }),
          lastClicked: this.state.Clicked.push(index),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert('You win!');
            this.setState({
              Images: this.state.Images.sort((a, b) => {
                return 0.5 - Math.random();
              }),
              lastClicked: [],
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