import React from 'react';
import {characterReference} from 'util.js';

function PlayerEntry({playerNumber, gameNumber, setFormData, formData}){

  //Update the form data state
  const setField = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return(
      <div className="player">
        <h1>Player {playerNumber}</h1>
        <div className="form-field">
          <label>Name</label>
          <input type="text" name={`player${playerNumber}Name`} onChange={(e) => setField(e)}/>
        </div>
        <div className="form-field">
          <label>Character</label>
          <select className="character-select" name={`player${playerNumber}Character`} onChange={(e) => setField(e)}>
            <option defaultValue>Select...</option>
            {characterReference[gameNumber].map((character, index) => {
              return <option key={index}>{character}</option>
            })}
          </select>
        </div>
        <div className="form-field">
          <label>Stars</label>
          <input type="number" name={`player${playerNumber}Stars`} onChange={(e) => setField(e)}/>
        </div>
        <div className="form-field">
          <label>Coins</label>
          <input type="number" name={`player${playerNumber}Coins`} onChange={(e) => setField(e)}/>
        </div>
        <div className="form-field">
          <label>Placed</label>
          <select className="placed-select" name={`player${playerNumber}Placed`} onChange={(e) => setField(e)}>
            <option defaultValue>Select...</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
        </div>
      </div>
    );
}

export default PlayerEntry;
