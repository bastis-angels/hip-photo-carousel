import React from 'react';
import HeaderImage from './header-image.jsx';

const CarouselHeader = (props) => {
  const images = props.images.map(image => {
    return <HeaderImage 
    key={image.id}
    index={image.index}
    image={image.imageURL}
    location={image.location}
  />
  });

  //map over the props passed from overlay to create a new header-image with the images array 
  return (
    <div className="carouselHeader">
        {images}
    </div>
  )
};

export default CarouselHeader;