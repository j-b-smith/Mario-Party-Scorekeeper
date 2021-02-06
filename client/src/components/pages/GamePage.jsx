import React from "react";
import NavBar from "components/NavBar"
import Banner from "components/Banner"
import NewGame from "components/newgame/NewGame"
import Game from "components/game/Game"
import NoGames from "components/game/NoGames"


function GamePage({bannerSrc, gameNumber, gameData,
                   getGameData, formData, setFormData,
                   playersData, setPlayersData, resetFormData}) {



  //Validate the form
  const formValid = (data) => {
    console.log(data);
    let valid = true;

    //Check for empty form values
    Object.values(data).forEach(value => {
        if (value === '' || value === undefined){
          console.log(value + " is either blank or undefined");
          valid = false;
        }
    })

    //Check for empty player values
    data.players.forEach(player => {
      Object.values(player).forEach( value => {
        if (value === '' || value === undefined){
            valid = false;
            console.log(value + " is either blank or undefined");
        }
      })

      //Check if character selection was made
      if (player.character === 'Select...'){
        valid = false;
        console.log("No Character was selected");
      }
    })

    //Return the result of the check
    return valid;
  }

  return ( <div>
      <NavBar / >
      <Banner bannerSrc = {bannerSrc}/>
      <NewGame gameNumber = {gameNumber} gameData = {gameData}
               getGameData={getGameData} formData={formData}
               setFormData={setFormData} playersData={playersData}
               setPlayersData={setPlayersData} formValid={formValid}
               resetFormData={resetFormData}/>

      {/*Filters and displays games based on the game number associated with it*/}
      {gameData.filter((game) => {return game.gameNumber === parseInt(gameNumber)}).length > 0
        ? gameData
              .filter((game) => {return game.gameNumber === parseInt(gameNumber)})
              .map((game) => {return <Game gameNumber={gameNumber} game={game} key={game._id} getGameData={getGameData} formValid={formValid}/>})
        : <NoGames />
      }
      </div>
    );
}

export default GamePage;
