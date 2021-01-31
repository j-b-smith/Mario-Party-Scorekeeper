import React, {useState} from "react";
import star from 'images/star.png'
import coin from 'images/coin.png'
import Player from './Player.jsx'
import GameHeader from './GameHeader.jsx'
import {deleteIcon} from 'util.js';



function Game({game}){

  //Sort players by place
  const[playersSorted] = useState(game.players.sort((a, b) => (a.placed > b.placed) ? 1: -1));

  return(
      <div className="game-div med-blue-border">
        <GameHeader board={game.board} date={game.date}/>
        <table className="scores-table yellow-header">
          <thead>
            <tr className="scores-headers">
              <th>Players</th>
              <th>
                <img className="table-header-icon" src={star} alt="Star"/>
                Stars
                <img className="table-header-icon" src={star} alt="Star"/>
              </th>
              <th>
                <img className="table-header-icon" src={coin} alt="Coin"/>
                Coins
                <img className="table-header-icon" src={coin} alt="Coin"/>
              </th>
              <th>Placed</th>
            </tr>
          </thead>
          <tbody>
            {playersSorted.length > 0 && playersSorted.map((player) => {
              return <Player player={player} key={player._id}/>
            })}
          </tbody>
      </table>
      <div className="game-buttons">
        <button>
          <img className='game-button-img' src={deleteIcon} alt='Yellow Delete Icon'/>
        </button>
      </div>
    </div>
  );
}

export default Game;
