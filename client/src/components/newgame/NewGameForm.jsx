import React from 'react';
import {gameBoardReference}  from 'util.js';
import PlayerEntry from './PlayerEntry'

function NewGameForm({showForm, gameNumber, addNewGame, gameData, getGameData, formData, setFormData, playersData, setPlayersData}){

  //Retrieve keys from boards, map to generate radio buttons
  const gameBoards = Object.keys(gameBoardReference[gameNumber]);

  //Submit the form adn validate data
  const submitForm = (e) => {
    //Stop the form from submitting
    e.preventDefault();
    if (formValid()){
      postFormData();
    } else {
      console.log("Form Not Valid")
    }
  };

  //Check for empty form fields
  const formValid = () => {
    console.log(formData);
    let valid = true;
    for (const [value] of Object.values(formData)){
      console.log(value + " is valid");
      if (value === '' || value === undefined){
        console.log(value + " is either blank or undefined");
        valid = false;
      }
    }
    return valid;
  }

  //Post new game data to the API
  const postFormData = () => {
    fetch('http://localhost:8080/api/newgame', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({formData: formData, gameNumber: gameNumber})
    }).then(response => {
      //check response
      if (response.status === 200){
        //Reset form inputs
        Array.from(document.querySelectorAll('input')).forEach(
          input => (input.value = "")
        );
        //Reset form select options
        Array.from(document.querySelectorAll('select')).forEach(
          select => (select.value = "Select...")
        );

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
                             name="gameBoard" id={board + "-radio"} value={formData.board}
                             onChange={() => setFormData(formData => ({...formData, board: board}))} />
                      <label htmlFor={board + "-radio"}>
                        <img className="game-board-img" src={gameBoardReference[gameNumber][board]} alt=""/>
                      </label>
                     </div>
            })}
            </div>
          </div>
          {[1,2,3,4].map((playerNumber, index) => {
            return <PlayerEntry key={playerNumber} index = {index}
                                gameNumber = {gameNumber} setFormData={setFormData}
                                formData={formData} editPlayer={false}
                                playersData={playersData} setPlayersData={setPlayersData}/>
          })}
          <div className='new-game-button-container'>
            <button className="new-game-button thin-yellow-border yellow-header" onClick={(e) => submitForm(e)}>Add New Game</button>
          </div>
        </form>
      </div>
  );
}

export default NewGameForm;
