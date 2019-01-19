import React from 'react'

import './style.css'

const Card = props => (
  <div
    className='card'
    onClick={props.cardClick}
  >
    <div
      className="img-container"
    >
      <img className='card-img-top' alt={props.name} src={props.image} />
    </div>
  </div>
);


export default Card