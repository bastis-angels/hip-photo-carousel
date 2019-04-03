import React from 'react';
import data from './data.js';
import Card from './card.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: data,
      images: data.images,
      image: data.images[0]
    }
  }

  nextImage() {
    const newIndex = this.state.image.index + 1;
    this.setState = ({
      image: data.images[newIndex],
    })
  }

  //prevImage()

  render() {
    return (
    <div>
      <button id="previous-arrow">prev</button>
      <button onClick={() => this.nextImage()} disabled={this.state.images.index === data.images.length-1} id="next-arrow">next</button>
      <div className="cards-slider">
        <div className="cards-slider-wrapper">
        {
              this.state.images.map(image => <Card key={this.state.listing._id} image={image.imageURL} location={image.location}/>)
            }
        </div>
      </div>
    </div>
    );
  }
}

export default App;