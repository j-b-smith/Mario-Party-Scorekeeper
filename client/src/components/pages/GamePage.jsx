import React, {useState, useEffect} from "react";
import NavBar from "components/NavBar"
import Banner from "components/Banner"
import NewGame from "components/newgame/NewGame"
import Game from "components/game/Game"


function GamePage({bannerSrc, apiSrc}) {
  //Set the api url based on the game page rendered
  const url = "http://localhost:8080/api/mp" + apiSrc;

  //Store a state constant and set function for gameData
  const [gameData, setGameData] = useState([]);

  //Fetch the data from the api
  //useEffect calls after rendering (componentDidMount)
  //Empty array of dependencies prevents infinite loop
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setGameData(data));
    // eslint-disable-next-line
  }, []);

  return ( <div>
      <NavBar / >
      <Banner bannerSrc = {bannerSrc}/>
      <NewGame gameNumber = {apiSrc} gameData = {gameData} setGameData={setGameData}/>
      {gameData.map((game) => {
        return <Game apiSrc = {apiSrc} game = {game} key={game._id}/>
      })}
      </div>
);
}

export default GamePage;
