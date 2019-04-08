import React from "react";

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={() => {props.prevImage()}}>
      <i className="fas fa-chevron-left"></i>
    </div>
  )
}

export default LeftArrow;