import React, { Component } from 'react'

import './style.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='left-indent'>MemoReact</div>
        <div className='centered'>Click any image to start!</div>
        <div className='right-indent'>Score : {this.props.score}</div>
      </nav>
    );
  }
}

export default Navbar