import React, {useState} from 'react';
import {gameBoardReference}  from 'util.js';
import PlayerEntry from '../newgame/PlayerEntry'

function EditDialog({showEditModal, setShowEditModal, game, getGameData, formValid}){

  //Retrieve keys from boards, map to generate radio buttons
  const gameBoards = Object.keys(gameBoardReference[game.gameNumber]);

  //Set the initial state of the players
  const initialEditPlayersData = [
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
  ];

  //Set the state for the players
  const [editPlayersData, setEditPlayersData] = useState(initialEditPlayersData);

  //Set the initial edit form data
  const intialEditFormData = {
    _id: game._id,
    date: game.date,
    board: game.board,
    players: editPlayersData,
    gameNumber: game.gameNumber
  };

  //Set the state for the form
  const [editFormData, setEditFormData] = useState(intialEditFormData);


  //Submit the form adn validate data
  const submitForm = (e) => {
    //Stop the form from submitting
    e.preventDefault();
    if (formValid(editFormData)){
      updateGame(e);
    } else {
      console.log("Form Not Valid")
    }
  };

  //Send update request to API
  const updateGame = (e) => {

    console.log(editFormData);

    //Send the updated date to the API
    fetch('http://localhost:8080/api/updategame', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(editFormData)
    }).then(response => {

      //Check the response
      if (response.status === 200){
        console.log("Update Successful")
        getGameData();
      } else {
        console.log("Unable to Update")
      }
    })

    //Hide the dialog
    setShowEditModal(false);
  }


  //Cancel the game edit
  const cancelEdit = (e) => {

    //Prevent form functions
    e.preventDefault();

    //Reset the edit form data to it's initial state
    setEditFormData(intialEditFormData);
    setEditPlayersData(initialEditPlayersData);

    //Hide the dialog
    setShowEditModal(false);
  }


  if (showEditModal){
    return(
      <div className='overlay'>
        <div className="game-form-container edit-game yellow-header thick-yellow-border centered">
          <div className="new-game-content">
          <form>
            <div>
              <label>Select the Board: </label>
              <div className="board-select">
              {gameBoards.map((board, index) => {

                return <div className="board-selection" key={index}>
                        <input className="game-board-radio" type="radio"
                               name="gameBoard" id={board + "-radio-edit"} value={board}
                               onChange={e => setEditFormData({...editFormData, board: board})}
                               checked={editFormData.board === board}/>
                        <label htmlFor={board + "-radio-edit"}>
                          <img className="game-board-img" src={gameBoardReference[game.gameNumber][board]} alt=""/>
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
              <div className='form-button-container'>
              <button className="thin-yellow-border yellow-header" onClick={submitForm}>Save Changes</button>
              <button className="thin-yellow-border yellow-header" onClick={cancelEdit}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default EditDialog;
