import React from 'react';
import {Link} from "react-router-dom";

function NavLink({gameNumber}){
  return(
    <Link className="yellow-header" to={`/marioparty${gameNumber}`}>Mario Party {gameNumber}</Link>
  );
}

export default NavLink;
