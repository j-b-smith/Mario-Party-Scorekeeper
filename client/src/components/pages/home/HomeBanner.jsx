import React from "react";
import homeImg from 'images/home-img.png'

function HomeBanner(){
  return(
    <div>
      <h1 className="yellow-header title">Score Keeper</h1>
      <div className="home-banner">
        <img className="glow" src={homeImg} alt=""/>
      </div>
    </div>
  );
}

export default HomeBanner;
