import React, { Component } from 'react'

import './style.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className='left-indent'>MemoReact</li>
          <li className='centered'>Click any image to start!</li>
          <li className='right-indent'>Score : {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar