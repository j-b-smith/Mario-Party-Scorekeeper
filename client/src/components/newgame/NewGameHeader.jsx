import React, {useState} from 'react'

function NewGameHeader({setShowForm, showForm}){

  const[formButton, setFormButton] = useState('+');

  //Display and hide the new game form
  const handleFormClick = (e) => {
    setShowForm(!showForm);
    setFormButton(!showForm ? '-' : '+');
  }

  return(
      <div className="new-game-header">
        <span>New Game</span>
        <button className="expand-button yellow-header" type="button" name="button" onClick={handleFormClick}>{formButton}</button>
      </div>
  );
}

export default NewGameHeader;
