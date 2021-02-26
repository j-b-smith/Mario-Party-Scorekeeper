import React from 'react';
import {Link} from "react-router-dom";

function NavLink({gameNumber}){
  return(
    <Link className="yellow-header nav-bar-link" to={`/marioparty${gameNumber}`} >Mario Party {gameNumber}</Link>
  );
}

export default NavLink;
