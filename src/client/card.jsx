import React from 'react';
import HelpfulBtn from './HelpfulBtn.jsx';


const Card = (props) => {
  return (
    <div id={`card-${props.index}`} className="card">

      <div class="counter">{props.index + 1} / 30</div>

      <div className="userInfo">
        <div className="userAvatar">
          <i class="fas fa-campground"></i>
        </div>
        <div className="userName">Eliana L.</div>
        <div className="datePosted">Posted on <span>{props.date}</span></div>
      </div>

      <HelpfulBtn votes={props.UpVotes} />

      <div className="location">
          <span><i class="fas fa-map-marker-alt"></i></span> <span>{props.location}</span>
      </div>

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