import React from "react";

class HelpfulBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      votes: this.UpVotes 
    }
  }

  render() {
    return(
      <button className="helpful">
        <span className="thumb"><i class="far fa-thumbs-up" ></i> &nbsp; </span> 
        Helpful 
        <span> &nbsp; {this.upVotes} </span>
      </button>
    )
  }
}

export default HelpfulBtn;