import React from "react";
import {gameLogos} from 'util.js';

function GameLinks(){
  return(
    <div className="game-links med-blue-border">
    {[1,2,3,4,5,6,7].map((gameNumber) => {
      return <a href={`/marioparty${gameNumber}`}><img src={gameLogos.[gameNumber]} alt={`Mario Party ${gameNumber} Logo`} key={gameNumber}/></a>
    })}

    </div>
  );
}

export default GameLinks;
