import React, {useState} from 'react';
import {gameBoardReference}  from 'util.js';
import PlayerEntry from './PlayerEntry'

function NewGameForm({showForm, gameNumber, setFormData, addNewGame, formData}){

  //Retrieve keys from boards, map to generate radio buttons
  const gameBoards = Object.keys(gameBoardReference[gameNumber]);

  //Create state for each player
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [player3, setPlayer3] = useState({});
  const [player4, setPlayer4] = useState({});

  const submitForm = (e) => {

    //Stop the form from submitting
    e.preventDefault();

    // //Set the form data state
    // setFormData((formData) => ({
    //   ...formData,
    //   date: new Date(),
    //   player1: player1,
    //   player2: player2,
    //   player3: player3,
    //   player4:player4
    // }));


      console.log(formData);
      //Post the form information to the api
      fetch('http://localhost:8080/api/newgame', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      }).then(response => {
        console.log(response.status);
      })
  };


  return(
      <div className="new-game-content">
      {
        /* Assign the className of new-game-form, if showForm is true, append show-form class*/
      }
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
          <PlayerEntry setPlayer = {setPlayer1} player={player1} playerNumber = '1' gameNumber = {gameNumber} setFormData={setFormData}/>
          <PlayerEntry setPlayer = {setPlayer2} player={player2} playerNumber = '2' gameNumber = {gameNumber} setFormData={setFormData}/>
          <PlayerEntry setPlayer = {setPlayer3} player={player3} playerNumber = '3' gameNumber = {gameNumber} setFormData={setFormData}/>
          <PlayerEntry setPlayer = {setPlayer4} player={player4} playerNumber = '4' gameNumber = {gameNumber} setFormData={setFormData}/>
          <input type="submit" name="" value="Add New Game" onClick={(e) => submitForm(e)}/>
        </form>
      </div>
  );
}

export default NewGameForm;

// const setPlayerField = (e, index, property) => {
//   console.log(property);
//     if (index === 1){
//       setFormData({...formData, player1: {[property]: e.target.value}});
//     } else if (index === 2){
//       setFormData({player2: {[property]: e.target.value}});
//     } else if (index === 3) {
//       setFormData({player3: {[property]: e.target.value}});
//     } else {
//       setFormData({player3: {[property]: e.target.value}});
//     }
// };
