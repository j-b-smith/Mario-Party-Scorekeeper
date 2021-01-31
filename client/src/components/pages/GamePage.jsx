import React from "react";
import NavBar from "components/NavBar"
import Banner from "components/Banner"
import NewGame from "components/newgame/NewGame"
import Game from "components/game/Game"
import NoGames from "components/game/NoGames"


function GamePage({bannerSrc, gameNumber, gameData, getGameData}) {

  return ( <div>
      <NavBar / >
      <Banner bannerSrc = {bannerSrc}/>
      <NewGame gameNumber = {gameNumber} gameData = {gameData} getGameData={getGameData}/>
      {gameData.filter((game) => {return game.gameNumber === parseInt(gameNumber)}).length > 0
        ? gameData
              .filter((game) => {return game.gameNumber === parseInt(gameNumber)})
              .map((game) => {return <Game apiSrc={gameNumber} game={game} key={game._id}/>})
        : <NoGames />
      }
      </div>
    );
}

export default GamePage;
