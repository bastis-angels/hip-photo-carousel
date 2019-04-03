import React from 'react';


const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.location} />
    </div>
  )
}

export default Card;