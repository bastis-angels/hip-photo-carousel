//import react, enzyme tools, and component you're testing
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Overlay from "../src/client/overlay"
import { isTSAnyKeyword } from "@babel/types";
import LeftArrow from "../src/client/leftArrow";
import Card from "../src/client/card";
import RightArrow from "../src/client/rightArrow";

import data from "../src/client/data";

describe('Overlay', () => {

  //props should be passed from Overlay to child components 
  //when you pass the prop down, does it go where you expect  it to

  it('displays image based on props.image', () => {
    const card = shallow(
      <Card 
        key={1}
        image='https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png'
        location={'location'} 
        index={1}
      />
    );

    expect(card.find('img').prop('src')).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png');

    card.setProps({image: 'https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png'});

    expect(card.find('img').prop('src')).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png');
  });

  //image functions should be called on left or right arrow clicks
  //tests that props are passed down 

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

  //state should update when left or right arrow is clicked – not really sure that this test is working

  it('updates the state on left arrow click', () => {
    const leftArrowClick = shallow(<Overlay prevImage={() => {}}/>);
    
    leftArrowClick.find('LeftArrow').simulate('change', {
      target: {value: 1}
    });

    expect(leftArrowClick.state().currentIndex).toBe(1);

  })

});
