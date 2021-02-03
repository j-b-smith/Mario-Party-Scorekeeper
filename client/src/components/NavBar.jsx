import React from 'react';
import {Link} from "react-router-dom";
import navLogo from "images/game-banners/marioparty-header.png";
import NavLink from './NavLink'

function NavBar(){
    return(
      <nav className="navbar">
        <div className="nav-logo">
          <h3 className="nav-header yellow-header">Score Keeper</h3>
            <Link to= '/'><img className="nav-img" src={navLogo} alt=""/></Link>
        </div>
        <div className="nav-links">
          {[1,2,3,4,5,6,7].map((gameNumber, index) => {
            return <NavLink key={index} gameNumber={gameNumber}/>
          })}
        </div>
      </nav>
    );
}

export default NavBar;
