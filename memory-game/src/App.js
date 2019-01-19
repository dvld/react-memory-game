// 
// react
import React, { Component } from 'react';

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

// data
import images from './images.json';

// styling
// import './App.css'

class App extends Component {

  state = {
    images,
    clicked: [],
    score: 0,
    highScore: 0
  };

  handleClick = event => {
    const index = event.target.alt;
    const clicked = this.state.clicked.indexOf(index) > -1;
    console.log(clicked);

    if (clicked) {
      this.setState({
        images: this.state.images.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
      alert('Game over! Try Again');
    } else {
      this.setState(
        {
          images: this.state.images.sort((a, b) => {
            return 0.5 - Math.random();
          }),
          clicked: this.state.clicked.concat(index),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert('You win!');
            this.setState({
              images: this.state.images.sort((a, b) => {
                return 0.5 - Math.random();
              }),
              clicked: [],
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
        <Navbar />
        <Jumbotron />
        <div>
          {this.state.images.map(images => (
            <Card
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