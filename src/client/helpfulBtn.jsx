import React from "react";

class HelpfulBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }

    this.handleClick= this.handleClick.bind(this);
  }

  //create an event handler that will toggle state clicked between true and false (will change the style based on state)
  //create a method in Overlay that will set the value of image votes in the current image
  //  pass it to card and button as props

  handleClick(e) {
    e.preventDefault();

    if (this.state.clicked) {
      this.props.decrementUpVotes();
    } else {
      this.props.incrementUpVotes();
    }

    const newState = !this.state.clicked;

    this.setState({
      clicked: newState,
    });
  }

  render() {
    return(
      <button className="helpful" onClick={this.handleClick}>
        <span className="thumb"><i class="far fa-thumbs-up" ></i> &nbsp; </span> 
        Helpful 
        <span> &nbsp; {this.props.votes} </span>
      </button>
    )
  }
}

export default HelpfulBtn;