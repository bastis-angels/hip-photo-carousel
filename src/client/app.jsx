import React from 'react';
import data from './data.js';
import CarouselHeader from './header-carousel.jsx';
import Overlay from './overlay.jsx';

//notes for header-carousel
  //on component mount, we want to show the header-carousel
  //when any item is clicked on the carousel, we want to render the overlay 
  //when you click the x button, dismount/unrender the overlay component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: data.images,
      image: data.images[0],
      showOverlay: false,
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.incrementUpVotes = this.incrementUpVotes.bind(this);
    this.decrementUpVotes = this.decrementUpVotes.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }
  //Show Overlay

  toggleOverlay() {
    this.setState({
      showOverlay: !this.state.showOverlay,
    })
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
    console.log('key code:', e.keyCode);
    if(e.keyCode === 39) {
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

    else if(e.keyCode === 37){
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
      <div>

        <div className="carouselHeader">
          <button onClick={this.toggleOverlay}>OVERLAY!</button>
          <CarouselHeader images={this.state.images}/>
          {this.state.showOverlay && <Overlay 
            key={this.state.image.id} 
            index={this.state.image.index}
            image={this.state.image.imageURL} 
            location={this.state.image.location} 
            date={this.state.image.datePosted}
            upVotes={this.state.image.helpfulVotes}
            incrementUpVotes={this.incrementUpVotes}
            decrementUpVotes={this.decrementUpVotes}
            nextImage={this.nextImage}
            prevImage={this.prevImage}
          />}
        </div>

      </div>
    );
  }
}



export default App;

