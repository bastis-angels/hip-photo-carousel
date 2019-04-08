import React from "react";

const RightArrowHeader = (props) => {
  return (
    <div className="rightArrowHeader arrow" onClick={() => {props.toggleOverlay()}}>
      <i className="fas fa-chevron-right"></i>
    </div>
  )
}

export default RightArrowHeader;