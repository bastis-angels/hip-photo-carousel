import React from 'react';
import styled from 'styled-components';

const Image = styled.img `
  margin: 8px;
  z-index: -1;
  height: 500px;
  width: auto;
  display: flex;
`
const HeaderImage = (props) => {

  return (
      <Image src={props.image} alt={props.location} id={`image-${props.index}`}/>
  )
};

export default HeaderImage;

