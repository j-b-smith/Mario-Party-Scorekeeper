import React from "react"
import Home from "components/pages/home/Home"
import GamePage from "components/pages/GamePage"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {gameLogos} from 'util.js'

function App() {
    return (
<main>
  <Router>
    <Switch>
      <Route exact path="/">
        <Home bannerSrc={gameLogos.main}/>
      </Route>
      <Route path="/marioparty1">
        <GamePage bannerSrc={gameLogos.mp1} apiSrc="1"/>
      </Route>
      <Route path="/marioparty2">
        <GamePage bannerSrc={gameLogos.mp2} apiSrc="2"/>
      </Route>
      <Route path="/marioparty3">
        <GamePage bannerSrc={gameLogos.mp3} apiSrc="3"/>
      </Route>
      <Route path="/marioparty4">
        <GamePage bannerSrc={gameLogos.mp4} apiSrc="4"/>
      </Route>
      <Route path="/marioparty5">
        <GamePage bannerSrc={gameLogos.mp5} apiSrc="5"/>
      </Route>
      <Route path="/marioparty6">
        <GamePage bannerSrc={gameLogos.mp6} apiSrc="6"/>
      </Route>
      <Route path="/marioparty7">
        <GamePage bannerSrc={gameLogos.mp7} apiSrc="7"/>
      </Route>
    </Switch>
  </Router>
</main>
    );
}


export default App;
