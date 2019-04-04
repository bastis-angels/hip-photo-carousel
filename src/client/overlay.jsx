import React from 'react';
import data from './data.js';
import Card from './card.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';


class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: data.images,
      currentIndex: 0,
      translateValue: 0
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  nextImage() {
    // Exit the method early if we are at the end of the images array and 
    // reset currentIndex and translateValue, to return to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState = prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.cardWidth()),
    })
  }

  prevImage() {
    if (this.state.currentIndex === 0) {
      return;
    }
    this.setState = prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    })
  }

  cardWidth() {
    return document.querySelector('.card').clientWidth;
  }

  render() {
    return (
      <div className="cards-slider">
        <div className="cards-slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>

            {this.state.images.map(image => <Card key={image.index} image={image.imageURL} location={image.location} index={image.index}/>)}
        
        </div>

        <LeftArrow prevImage={this.prevImage}/>

        <RightArrow nextImage={this.nextImage}/>
      </div>
    );
  }
}

export default Overlay;

