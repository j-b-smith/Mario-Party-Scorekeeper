import React, {useState} from 'react';
import {gameBoardReference}  from 'util.js';
import PlayerEntry from './PlayerEntry'
import {useHistory} from 'react-router-dom';

function NewGameForm({showForm, gameNumber, addNewGame, gameData, getGameData}){

  //Retrieve keys from boards, map to generate radio buttons
  const gameBoards = Object.keys(gameBoardReference[gameNumber]);

  console.log(useHistory.path)

  //Form Data state
  const [formData, setFormData] = useState({
    board: '',
    player1Name: '',
    player1Character: '',
    player1Stars: '',
    player1Coins: '',
    player1Placed: '',
    player2Name: '',
    player2Character: '',
    player2Stars: '',
    player2Coins: '',
    player2Placed: '',
    player3Name: '',
    player3Character: '',
    player3Stars: '',
    player3Coins: '',
    player3Placed: '',
    player4Name: '',
    player4Character: '',
    player4Stars: '',
    player4Coins: '',
    player4Placed: '',
  });

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
    let valid = true;
    for (const [value] of Object.values(formData)){
      if (value === '' || value === undefined){
        console.log(value);
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
                      <input className="game-board-radio" type="radio" name="gameBoard" id={board + "-radio"} value={formData.board}
                        onClick={() => setFormData(formData => ({...formData, board: board}))}/>
                      <label htmlFor={board + "-radio"}>
                        <img className="game-board-img" src={gameBoardReference[gameNumber][board]} alt=""/>
                      </label>
                     </div>
            })}
            </div>
          </div>
          {[1,2,3,4].map((playerNumber) => {
            return <PlayerEntry key={playerNumber} playerNumber = {playerNumber} gameNumber = {gameNumber} setFormData={setFormData} formData={formData}/>
          })}
          <input type="submit" name="" value="Add New Game" onClick={(e) => submitForm(e)}/>
        </form>
      </div>
  );
}

export default NewGameForm;
