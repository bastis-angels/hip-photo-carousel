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
      image: data.images[0],
      // currentIndex: 0,
      // translateValue: 0
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.incrementUpVotes = this.incrementUpVotes.bind(this);
  }

  nextImage() {
    if(this.state.image.index === this.state.images.length - 1) {
      this.setState({
        image: data.images[0],
      });
      return;
    }

    var newIndex = this.state.image.index + 1;
    this.setState({
      image: data.images[newIndex],
    });
  }

  prevImage() {
    if (this.state.image.index === 0) {
      return;
    }
    var newIndex = this.state.image.index - 1;
    this.setState({
      image: data.images[newIndex],
    });
  }

  incrementUpVotes(e) {
    //will replace this with a patch request that increments upvotes by 1
    e.preventDefault();
    var helpfulVotes = this.state.image.helpfulVotes + 1;
    this.state.image.helpfulVotes = helpfulVotes;
  }

  render() {
    return (
      <div className="overlay">
        <div className="cards-slider">
          <div className="cards-slider-wrapper"
            style={{
              // transform: `translateX(${this.state.translateValue}px)`,
              // transition: 'transform ease-out 0.45s'
            }}
            >
              <Card 
                key={this.state.image.index} 
                index={this.state.image.index}
                image={this.state.image.imageURL} 
                location={this.state.image.location} 
                date={this.state.image.datePosted}
                upVotes={this.state.image.helpfulVotes}
                incrementUpVotes= {this.incrementUpVotes}
              />
          
          </div>
        </div> 

        <LeftArrow prevImage={this.prevImage}/>
        <RightArrow nextImage={this.nextImage}/>
        
      </div>
    );
  }
}

export default Overlay;

