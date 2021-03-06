import React from 'react'

import './style.css'

const Card = props => (
  <div className='card'>
    <img onClick={props.onClick} className='card-img-top' alt={props.name} src={props.image} />
  </div>
);


export default Card