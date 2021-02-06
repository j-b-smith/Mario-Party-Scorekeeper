import React from 'react';
import {gameBoardReference}  from 'util.js';
import PlayerEntry from './PlayerEntry'

function NewGameForm({showForm, gameNumber, addNewGame,
                      gameData, getGameData, formData,
                      setFormData, playersData, setPlayersData,
                      formValid, resetFormData}){

  //Retrieve keys from boards, map to generate radio buttons
  const gameBoards = Object.keys(gameBoardReference[gameNumber]);

  //Submit the form adn validate data
  const submitForm = (e) => {
    //Stop the form from submitting
    e.preventDefault();
    if (formValid(formData)){
      postFormData();
    } else {
      console.log("Form Not Valid")
    }
  };



  //Post new game data to the API
  const postFormData = () => {
    fetch('http://localhost:8080/api/newgame', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({formData: formData, gameNumber: gameNumber})
    }).then(response => {
      //check response
      if (response.status === 200){

        //Reset the form data
        resetFormData();

        //Update game data
        getGameData();

      } else {
        console.log("Response Not Received, Status Code: " + response.status);
      }
    })
  }



  return(
      <div className="new-game-content">
        <form className={`new-game-form ${showForm ? 'show-form' : ''}`}>
          <div>
            <label>Select the Board: </label>
            <div className="board-select">
            {gameBoards.map((board, index) => {

              return <div className="board-selection" key={index}>
                      <input className="game-board-radio" type="radio"
                             name="gameBoard" id={board + "-radio"} value={board}
                             onChange={e => setFormData({...formData, board : board})}
                             checked={formData.board === board}/>
                      <label htmlFor={board + "-radio"}>
                        <img className="game-board-img" src={gameBoardReference[gameNumber][board]} alt=""/>
                      </label>
                     </div>
            })}
            </div>
          </div>
          {[1,2,3,4].map((playerNumber, index) => {
            return <PlayerEntry key={playerNumber} index = {index}
                                gameNumber = {gameNumber} editPlayer={false}
                                playersData={playersData} setPlayersData={setPlayersData}/>
          })}
          <div className='form-button-container'>
            <button className="thin-yellow-border yellow-header" onClick={submitForm}>Add New Game</button>
          </div>
        </form>
      </div>
  );
}

export default NewGameForm;
