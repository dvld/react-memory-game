import React from 'react'

import './style.css'

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>MemoReact</li>
          <li>Click any image to start!</li>
          <li>Score : {props.score} | High Score : {props.highScore}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar