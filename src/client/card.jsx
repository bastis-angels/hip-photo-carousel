import React from 'react';


const Card = (props) => {
  return (
    <div id={`card-${props.image}`} className="card">
      <div className="userAvatar">
        <i class="fas fa-campground"></i>
      </div>
      <button className="helpful"><span className="thumb"><i class="far fa-thumbs-up"></i></span> Helpful <span>5</span></button>
      <div className="socialMediaIcons">
        <i className="fab fa-pinterest icon"></i>
        <i className="fab fa-facebook icon"></i>
        <i className="fab fa-twitter icon"></i>
        <i className="fas fa-link icon"></i>
      </div>
      <img src={props.image} alt={props.location} />
    </div>
  )
}

export default Card;