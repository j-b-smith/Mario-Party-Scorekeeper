import React, {useState} from 'react';
import {gameBoardReference}  from 'util.js';
import PlayerEntry from '../newgame/PlayerEntry'

function EditDialog({showEditModal, setShowEditModal, game, getGameData}){

  //Retrieve keys from boards, map to generate radio buttons
  const gameBoards = Object.keys(gameBoardReference[game.gameNumber]);

  //Set edit players data state
  const [editPlayersData, setEditPlayersData] = useState([
    {
      name: game.players[0].name,
      character: game.players[0].character,
      stars: game.players[0].stars,
      coins: game.players[0].coins,
      placed: game.players[0].placed
    },
    {
      name: game.players[1].name,
      character: game.players[1].character,
      stars: game.players[1].stars,
      coins: game.players[1].coins,
      placed: game.players[1].placed
    },
    {
      name: game.players[2].name,
      character: game.players[2].character,
      stars: game.players[2].stars,
      coins: game.players[2].coins,
      placed: game.players[2].placed
    },
    {
      name: game.players[3].name,
      character: game.players[3].character,
      stars: game.players[3].stars,
      coins: game.players[3].coins,
      placed: game.players[3].placed
    }
  ]);

  //Set edit form data state
  const [editFormData, setEditFormData] = useState({
    _id: game._id,
    date: game.date,
    board: game.board,
    players: editPlayersData,
    gameNumber: game.gameNumber
  });


  //Send update request to API
  const updateGame = () => {
    fetch('http://localhost:8080/api/updategame', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(editFormData)
    }).then(response => {

      if (response.status === 200){
        console.log("Update Successful")
        getGameData();
      } else {
        console.log("Unable to Update")
      }
    })
  }


  if (showEditModal){
    return(
      <div className='alert-overlay'>
        <div className="new-game-container-edit yellow-header thick-yellow-border centered">
          <div className="new-game-content">
            <form className="new-game-form show-form">
              <div>
                <label>Select the Board: </label>
                <div className="board-select">
                {gameBoards.map((board, index) => {
                  return <div className="board-selection" key={index}>
                          <input className="game-board-radio"
                                 type="radio" name="gameBoard"
                                 id={board + "-radio"} value={editFormData.board}/>
                          <label htmlFor={board + "-radio"}>
                            <img className="game-board-img"
                                 src={gameBoardReference[game.gameNumber][board]}
                                 alt={`Game Board: ${board}`}/>
                          </label>
                         </div>
                })}
                </div>
              </div>
              {game.players.map((player, index) => {
                return <PlayerEntry key={player._id} index = {index}
                                    gameNumber = {game.gameNumber} setEditFormData={setEditFormData}
                                    editFormData={editFormData} editPlayer={true}
                                    editPlayersData={editPlayersData} setEditPlayersData={setEditPlayersData}/>
              })}
              <div className='new-game-button-container'>
              <button className="new-game-button thin-yellow-border yellow-header" onClick={updateGame}>Save Changes</button>
              <button className="new-game-button thin-yellow-border yellow-header" onClick={() => setShowEditModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default EditDialog;
