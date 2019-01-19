// react
import React from 'react'

// styling
import './style.css'

const Footer = () => {
  return (
    <div>
      <footer className='custom'>
        <ul>
          <h5 className='leftSide'>
            Zelda Memory Game by Niko Roberts &#169; 2019
          </h5>
          <h5 className='rightSide'>
            <a  href='https://github.com/dvld/react-memory-game'>GitHub </a>
            |||
            <a href='www.linkedin.com/in/niko-roberts'> LinkedIn</a>
          </h5>
        </ul>
      </footer>
    </div>
  );
}

export default Footer