import React from "react";
import {gameLogos} from 'util.js';

function GameLinks(){
  return(
    <div className="game-links med-blue-border">
      <a href="/marioparty1"><img src={gameLogos.mp1} alt="Mario Party 1 Logo"/></a>
      <a href="/marioparty2"><img src={gameLogos.mp2} alt="Mario Party 2 Logo"/></a>
      <a href="/marioparty3"><img src={gameLogos.mp3} alt="Mario Party 3 Logo"/></a>
      <a href="/marioparty4"><img src={gameLogos.mp4} alt="Mario Party 4 Logo"/></a>
      <a href="/marioparty5"><img src={gameLogos.mp5} alt="Mario Party 5 Logo"/></a>
      <a href="/marioparty6"><img src={gameLogos.mp6} alt="Mario Party 6 Logo"/></a>
      <a href="/marioparty7"><img src={gameLogos.mp7} alt="Mario Party 7 Logo"/></a>
    </div>
  );
}

export default GameLinks;
