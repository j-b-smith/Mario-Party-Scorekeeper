import React from 'react';
import {noGamesToad} from 'util.js';

function NoGames() {
  return(
    <div className="game-div no-games">
      <img src={noGamesToad} alt='Surprised Toad'/>
      <h1 className="yellow-header no-games-text">Oh No! There are no games to display!</h1>
    </div>
  );
}

export default NoGames;
