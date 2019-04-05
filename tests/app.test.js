//import react, enzyme tools, and component you're testing
import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
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

    leftArrow.find('.backArrow').simulate('click');

    expect(prevImageSpy).toHaveBeenCalled();
  });

  it('calls props.nextImage on right arrow click', () => {
    const nextImageSpy = jest.fn();

    const rightArrow = shallow(
      <RightArrow 
        nextImage={nextImageSpy}
      />
    );

    rightArrow.find('.nextArrow').simulate('click');

    expect(nextImageSpy).toHaveBeenCalled();
  });

  //state should update when left or right arrow is clicked

  it('updates the state on left arrow click', () => {
    const overlay = mount(<Overlay />);
    
    overlay.find('#leftArrow').simulate('click');

    expect(overlay.state('image')).toBe(data.images[0]);

  });

  it('updates the state on right arrow click', () => {
    const overlay = mount(<Overlay />);

    overlay.find('#rightArrow').simulate('click');

    expect(overlay.state('image')).toBe(data.images[1]);
  })

  //Testing the card component 

  //the helpful button should have a function that is called on click
  //the helpful button state should change (increment the helpful vote by 1) when clicked

  //other things you could test, but might not need to
  //  1. the counter props match what's passed in
  //  2. the userName reflects the prop passed down
  //  3. the post date reflects the prop passed down
  //  4. location reflects the prop passed down
  //  5. the description is displayed if there is one (haven't included this in data or component yet)


});
