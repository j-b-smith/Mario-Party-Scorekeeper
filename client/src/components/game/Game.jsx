import React, {useState, useRef, useEffect} from "react";
import star from 'images/star.png'
import coin from 'images/coin.png'
import Player from './Player.jsx'
import GameHeader from './GameHeader.jsx'
import {deleteIcon} from 'util.js';
import ModalDialog from '../ModalDialog';



function Game({game, getGameData}){

  //Sort players by place
  const playersSorted = game.players.sort((a, b) => (a.placed > b.placed) ? 1: -1);

  const [showModal, setShowModal] = useState(false);

  const deleteGame = () => {
    fetch('http://localhost:8080/api/deletegame', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({_id: game._id})
    }).then(response => {
      if (response.status === 200){
        console.log("Delete Successful")
        getGameData();
      } else {
        console.log("Unable to delete")
      }
    })
  }

  // const [isVisible, setVisible] = useState(true);
  // const domRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRef.current);
  //   let current = domRef.current;
  //   return () => observer.unobserve(current);
  // }, []);


  return(
    <div>
    <ModalDialog showModal={showModal} setShowModal={setShowModal}
                 deleteGame={deleteGame} modalAction="Delete" />
      <div className="game-div med-blue-border">
        <GameHeader board={game.board} date={new Date(game.date).toDateString()}/>
        <table className="scores-table yellow-header">
          <thead>
            <tr className="scores-headers">
              <th>Players</th>
              <th>
                <img className="table-header-icon" src={star} alt="Star"/>
                Stars
                <img className="table-header-icon" src={star} alt="Star"/>
              </th>
              <th>
                <img className="table-header-icon" src={coin} alt="Coin"/>
                Coins
                <img className="table-header-icon" src={coin} alt="Coin"/>
              </th>
              <th>Placed</th>
            </tr>
          </thead>
          <tbody>
            {playersSorted.length > 0 && playersSorted.map((player) => {
              return <Player player={player} key={player._id}/>
            })}
          </tbody>
      </table>
      <div className="game-buttons">
        <button onClick={() => setShowModal(true)}>
          <img className='game-button-img' src={deleteIcon} alt='Yellow Delete Icon'/>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Game;
