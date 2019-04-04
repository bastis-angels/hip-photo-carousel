import React from 'react';


const Card = (props) => {
  return (
    <div id={`card-${props.image}`} className="card">

      <div class="counter">1 / 30</div>

      <div className="userInfo">
        <div className="userAvatar">
          <i class="fas fa-campground"></i>
        </div>
        <div className="userName">Eliana L.</div>
        <div className="datePosted">Posted on <span>June 10, 2018</span></div>
      </div>

      <button className="helpful"><span className="thumb"><i class="far fa-thumbs-up"></i> &nbsp; </span> Helpful <span> &nbsp; 5 </span></button>
     
      <div className="location">
          <span><i class="fas fa-map-marker-alt"></i></span> <span>#1 PARK N SURF OCEANVIEW, WildTender Ranch</span>
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