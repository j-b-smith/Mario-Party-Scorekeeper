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

//Set initial players data
  const initialPlayersData = [
          { name: '', character: '', stars: '', coins: ''},
          { name: '', character: '', stars: '', coins: ''},
          { name: '', character: '', stars: '', coins: ''},
          { name: '', character: '', stars: '', coins: ''}
        ]

  //Set initial form data
  const initialFormData = {
    board: '',
    players: initialPlayersData
  }

  //Form Data state
  const [formData, setFormData] = useState(initialFormData);
  const [playersData, setPlayersData] = useState(initialPlayersData);

  //Reset the formData state and form fields whenever the route path changes
  const location = useLocation();
  useEffect(() => {
    resetFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const resetFormData = () => {
    setFormData(initialFormData);
    setPlayersData(initialPlayersData);
  }


    return (
<main>
    <Switch >
      <Route exact path="/" >
        <Home bannerSrc={gameLogos.main} />
      </Route>
      {[1,2,3,4,5,6,7].map((gameNumber) => {
        return <Route path={`/marioparty${gameNumber}`} key={gameNumber}>
                  <GamePage bannerSrc={gameLogos.[gameNumber]} gameNumber={gameNumber}
                          gameData={gameData} getGameData={getGameData}
                          formData={formData} setFormData={setFormData}
                          playersData={playersData} setPlayersData={setPlayersData}
                          resetFormData={resetFormData} />
               </Route>
      })}

    </Switch>
</main>
    );
}


export default App;
