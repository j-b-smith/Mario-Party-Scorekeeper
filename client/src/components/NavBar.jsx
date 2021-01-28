import React from 'react';
import {Link} from "react-router-dom";
import navLogo from "images/game-banners/marioparty-header.png";

function NavBar(){
    return(
      <nav className="navbar">
        <div className="nav-logo">
          <h3 className="nav-header yellow-header">Score Keeper</h3>
            <Link to= '/'><img className="nav-img" src={navLogo} alt=""/></Link>
        </div>
        <div className="nav-links">
          <Link className="yellow-header" to='/marioparty1'>Mario Party 1</Link>
          <Link className="yellow-header" to="/marioparty2">Mario Party 2</Link>
          <Link className="yellow-header" to="/marioparty3">Mario Party 3</Link>
          <Link className="yellow-header" to="/marioparty4">Mario Party 4</Link>
          <Link className="yellow-header" to="/marioparty5">Mario Party 5</Link>
          <Link className="yellow-header" to="/marioparty6">Mario Party 6</Link>
          <Link className="yellow-header" to="/marioparty7">Mario Party 7</Link>
        </div>
      </nav>
    );
}

export default NavBar;
