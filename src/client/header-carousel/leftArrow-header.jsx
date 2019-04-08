import React from "react";

const LeftArrowHeader = (props) => {
  return (
    <div className="leftArrowHeader arrow" onClick={() => {props.toggleOverlay()}}>
      <i className="fas fa-chevron-left"></i>
    </div>
  )
}

export default LeftArrowHeader;