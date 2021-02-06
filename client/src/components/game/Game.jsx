import React, {useState} from "react";
import star from 'images/star.png';
import coin from 'images/coin.png';
import Player from './Player.jsx';
import GameHeader from './GameHeader.jsx';
import {deleteIcon} from 'util.js';
import {editIcon} from 'util.js';
import DeleteDialog from '../dialogs/DeleteDialog';
import EditDialog from '../dialogs/EditDialog';



function Game({game, getGameData, formValid}){

  //Sort players by place
  const playersSorted = game.players.sort((a, b) => (a.placed > b.placed) ? 1: -1);

  //Set state for showing dialogs
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);


  //Put this in delete dialog??
  const deleteGame = () => {
    fetch('http://localhost:8080/api/deletegame', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({_id: game._id})
    }).then(response => {
      if (response.status === 200){
        console.log("Delete Successful")
        getGameData();
      } else {
        console.log("Unable to delete")
      }
    })
  }

  return(
    <div>
    <DeleteDialog showDeleteModal={showDeleteModal}
                  setShowDeleteModal={setShowDeleteModal}
                  deleteGame={deleteGame}/>
    <EditDialog showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
                game={game}
                getGameData={getGameData}
                formValid={formValid}/>
      <div className="game-div med-blue-border">
        <GameHeader board={game.board} date={new Date(game.date).toDateString()}/>
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
        <button onClick={() => setShowEditModal(true)}>
          <img className='game-button-edit' src={editIcon} alt='Yellow Edit Icon'/>
        </button>
        <button onClick={() => setShowDeleteModal(true)}>
          <img className='game-button-delete' src={deleteIcon} alt='Yellow Delete Icon'/>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Game;
