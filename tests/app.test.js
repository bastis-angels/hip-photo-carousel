//import react, enzyme tools, and component you're testing
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Overlay from "../src/client/overlay"
import { isTSAnyKeyword } from "@babel/types";
import LeftArrow from "../src/client/leftArrow";
import Card from "../src/client/card";
import data from "../src/client/data";
import RightArrow from "../src/client/rightArrow";

describe('Overlay', () => {

  //props should be passed from Overlay to child components 

  it('displays image based on props.image', () => {
    const card = shallow(
      <Card 
        key={image.index} 
        image={'https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png'} 
        location={image.location} 
        index={image.index}
      />
    );

    expect(card.find('.card').image()).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png');

    card.setProps({image: 'https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png'});

    expect(card.find('.card').image()).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png');
  });

  //image functions should be caleed on left or right arrow clicks

  it('calls props.prevImage on left arrow click', () => {
    const prevImageSpy = jest.fn();

    const leftArrow = shallow(
      <LeftArrow 
        prevImage={prevImageSpy}
      />
    );

    leftArrow.find('.backArrow').simulate('change');

    expect(prevImageSpy).toHaveBeenCalled();
  });

  it('calls props.nextImage on right arrow click', () => {
    const nextImageSpy = jest.fn();

    const rightArrow = shallow(
      <RightArrow 
        nextImage={nextImageSpy}
      />
    );

    rightArrow.find('.nextArrow').simulate('change');

    expect(nextImageSpy).toHaveBeenCalled();
  });

  //state should update when left or right arrow is clicked

  it('updates the state on arrow click', () => {
    const leftArrowClick = shallow(<LeftArrow prevImage={prevImageSpy}/>);
    
    leftArrowClick.find('.backArrow').simulate('change', {
      target: {value: 1},
    });

    expect(leftArrowClick.state().Overlay).toBe(1);

  })

});
