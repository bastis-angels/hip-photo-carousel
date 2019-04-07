import React from 'react';

const HeaderImage = (props) => {

  return (
    <div id={`image-${props.index}`}>
      <img src={props.image} alt={props.location} />
    </div>
  )
};

//add onClick event handler and pass down a prop that will render the overlay with the image index indicated as the state

export default HeaderImage;

