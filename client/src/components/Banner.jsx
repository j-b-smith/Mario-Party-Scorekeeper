import React from "react";
import star from 'images/star.png'

function Banner({bannerSrc}) {
  return (
    <div className="banner">
      <div className="banner-content">
        <img className="title-star-left" src={star} alt="star"/>
        <img className="mario-party-logo" src={bannerSrc} alt="mario party"/>
        <img className="title-star-right" src={star} alt="star"/>
     </div>
    </div>
  );
}

export default Banner;
