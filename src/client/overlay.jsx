import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <div className="cardsSlider">
          <div className="cardsSliderWrapper" 
            style={{
              // transform: `translateX(${this.state.translateValue}px)`,
              // transition: 'transform ease-out 0.45s'
            }}
            >
              <Card 
                key={this.props.key} 
                index={this.props.index}
                image={this.props.image} 
                location={this.props.location} 
                date={this.props.date}
                upVotes={this.props.upVotes}
                incrementUpVotes={this.props.incrementUpVotes}
                decrementUpVotes={this.props.decrementUpVotes}
              />
          
          </div>
        </div> 
      <div id='leftArrow'><LeftArrow prevImage={this.props.prevImage}/></div>    
      
      <div id='rightArrow'><RightArrow nextImage={this.props.nextImage}/></div>
      
    </div>, this.container
    )};
}

export default Overlay;