import React from "react";

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={() => {props.nextImage()}} onKeyPress={props.handleKeyPress}>
      <i className="fas fa-chevron-right"></i>
    </div>
  )
}

export default RightArrow;