import React, {useState, useEffect} from "react";
import Home from "components/pages/home/Home"
import GamePage from "components/pages/GamePage"
import {Route, Switch, useLocation} from "react-router-dom";
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

  //Fetch game data from API
  const getGameData = () => {
    fetch(allGamesUrl)
      .then(res => res.json())
      .then(data => setGameData(data))
  }

  //Set initial form data
  const initialFormData = {
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
  }

  //Form Data state
  const [formData, setFormData] = useState(initialFormData);

  //Reset the formData state and form fields whenever the route path changes
  const location = useLocation();
  useEffect(() => {
    setFormData(initialFormData);

    //Reset form inputs
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = "")
    );
    //Reset form select options
    Array.from(document.querySelectorAll('select')).forEach(
      select => (select.value = "Select...")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);


    return (
<main>
    <Switch >
      <Route exact path="/" >
        <Home bannerSrc={gameLogos.main} />
      </Route>
      <Route path="/marioparty1" >
        <GamePage bannerSrc={gameLogos.mp1} gameNumber="1"
                  gameData={gameData} getGameData={getGameData}
                  formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/marioparty2">
        <GamePage bannerSrc={gameLogos.mp2} gameNumber="2"
                  gameData={gameData} getGameData={getGameData}
                  formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/marioparty3">
        <GamePage bannerSrc={gameLogos.mp3} gameNumber="3"
                  gameData={gameData} getGameData={getGameData}
                  formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/marioparty4">
        <GamePage bannerSrc={gameLogos.mp4} gameNumber="4"
                  gameData={gameData} getGameData={getGameData}
                  formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/marioparty5">
        <GamePage bannerSrc={gameLogos.mp5} gameNumber="5"
                  gameData={gameData} getGameData={getGameData}
                  formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/marioparty6">
        <GamePage bannerSrc={gameLogos.mp6} gameNumber="6"
                  gameData={gameData} getGameData={getGameData}
                  formData={formData} setFormData={setFormData}/>
      </Route>
      <Route path="/marioparty7">
        <GamePage bannerSrc={gameLogos.mp7} gameNumber="7"
                  gameData={gameData} getGameData={getGameData}
                  formData={formData} setFormData={setFormData}/>
      </Route>
    </Switch>
</main>
    );
}


export default App;
