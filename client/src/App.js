import React, {useState, useEffect} from "react";
import Home from "components/pages/home/Home"
import GamePage from "components/pages/GamePage"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {gameLogos} from 'util.js'

function App() {

  //Set url to retrieve all games
  const allGamesUrl = 'http://localhost:8080/api/allGames';

  //Set all Games state
  const [gameData, setGameData] = useState([]);

  //Fetch games on render
  useEffect(() => {
      getGameData();
      // eslint-disable-next-line
  }, []);

  const getGameData = () => {
    fetch(allGamesUrl)
      .then(res => res.json())
      .then(data => setGameData(data))
      .then(console.log(gameData))
  }

    return (
<main>
  <Router>
    <Switch>
      <Route exact path="/">
        <Home bannerSrc={gameLogos.main} />
      </Route>
      <Route path="/marioparty1">
        <GamePage bannerSrc={gameLogos.mp1} gameNumber="1" gameData={gameData} getGameData={getGameData}/>
      </Route>
      <Route path="/marioparty2">
        <GamePage bannerSrc={gameLogos.mp2} gameNumber="2" gameData={gameData} getGameData={getGameData}/>
      </Route>
      <Route path="/marioparty3">
        <GamePage bannerSrc={gameLogos.mp3} gameNumber="3" gameData={gameData} getGameData={getGameData}/>
      </Route>
      <Route path="/marioparty4">
        <GamePage bannerSrc={gameLogos.mp4} gameNumber="4" gameData={gameData} getGameData={getGameData}/>
      </Route>
      <Route path="/marioparty5">
        <GamePage bannerSrc={gameLogos.mp5} gameNumber="5" gameData={gameData} getGameData={getGameData}/>
      </Route>
      <Route path="/marioparty6">
        <GamePage bannerSrc={gameLogos.mp6} gameNumber="6" gameData={gameData} getGameData={getGameData}/>
      </Route>
      <Route path="/marioparty7">
        <GamePage bannerSrc={gameLogos.mp7} gameNumber="7" gameData={gameData} getGameData={getGameData}/>
      </Route>
    </Switch>
  </Router>
</main>
    );
}


export default App;
