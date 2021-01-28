import React from 'react';
import {characterReference} from 'util.js';

function PlayerEntry({playerNumber, gameNumber, setPlayer, player, setFormData, formData}){

  const setField = (e) => {
    setPlayer({...player, [e.target.name]: e.target.value});
  };

  return(
      <div className="player">
        <h1>Player {playerNumber}</h1>
        <div className="form-field">
          <label>Name</label>
          <input type="text" name={`player${playerNumber}`} onChange={(e, formData) => setFormData({...formData, [e.target.name]: e.target.value})}/>
        </div>
        <div className="form-field">
          <label>Character</label>
          <select className="character-select" name="character" onChange={(e) => setFormData((formData) => ({...formData, [formData.players[0].character] : e.target.value}))}>
            <option defaultValue>Select...</option>
            {characterReference[gameNumber].map((character, index) => {
              return <option key={index}>{character}</option>
            })}
          </select>
        </div>
        <div className="form-field">
          <label>Stars</label>
          <input type="number" name="stars"/>
        </div>
        <div className="form-field">
          <label>Coins</label>
          <input type="number" name="coins"/>
        </div>
      </div>
    );
}

export default PlayerEntry;
