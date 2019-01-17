import React, { Component } from 'react'

import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'
import images from './images.json'

class App extends Component {
  state = {
    images,
    clicked: [],
    score: 0
  };

  // when a card is clicked, it is removed from the array
  cardClick = event => {
    const currentCard = event.target.alt;
    const hasBeenClicked = this.state.clicked.indexOf(currentCard) > -1;

    // if a card is clicked a second time,
    // the game resets and shuffles the cards
    if (hasBeenClicked) {
      this.setState({
        images: this.state.image.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
      alert('Game over. Continue?');
    } else {
      this.setState({
        images: this.state.image.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        clicked: this.state.clicked.concat(currentCard),
        score: this.state.score + 1
      },

        () => {
          if (this.state.score === 12) {
            alert('Congratulations! You won!');
            this.setState({
              images: this.state.image.sort((a, b) => {
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
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div>
          {this.state.image.map(images => (
            <Card
              clicked={this.clicked}
              id={images.id}
              key={images.id}
              name={images.name}
              image={images.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
