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
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.incrementUpVotes = this.incrementUpVotes.bind(this);
    this.decrementUpVotes = this.decrementUpVotes.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //Go to next or previous slide (using left and right arrow buttons)

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

  handleKeyPress(e) {
    console.log(e.key);
    if(e.key === 'ArrowRight') {
      e.preventDefault();
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

    if(e.key=== 'ArrowLeft'){
      e.preventDefault();
      if (this.state.image.index === 0) {
        return;
      }
      var newIndex = this.state.image.index - 1;
      this.setState({
        image: data.images[newIndex],
      });
    }
  }

//Increment and decrement Helpful Votes (using helpful button)
  incrementUpVotes() {
    //will replace this with a patch request that increments upvotes by 1
    const newImage = Object.assign(this.state.image);
    newImage.helpfulVotes += 1;
    this.setState({
      image: newImage,
    })
  }

  decrementUpVotes() {
    const newImage = Object.assign(this.state.image);
    newImage.helpfulVotes -= 1;
    this.setState({
      image: newImage,
    })
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
                incrementUpVotes={this.incrementUpVotes}
                decrementUpVotes={this.decrementUpVotes}
              />
          
          </div>
        </div> 
        <div id='leftArrow'><LeftArrow prevImage={this.prevImage} onKeyPress={this.handleKeyPress}/></div>    
        
        <div id='rightArrow'><RightArrow nextImage={this.nextImage} onKeyPress={this.handleKeyPress}/></div>
        
      </div>
    );
  }
}

export default Overlay;

