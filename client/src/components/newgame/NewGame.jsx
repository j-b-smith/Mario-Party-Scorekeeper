import React, {useState} from 'react'
import NewGameHeader from './NewGameHeader'
import NewGameForm from './NewGameForm'

function NewGame({gameNumber, gameData, getGameData,
                  formData, setFormData, playersData,
                  setPlayersData, formValid, resetFormData,
                  setShowValidationDialog}){

  //Sets whether or not to display the form
  const [showFormState, setShowFormState] = useState(false);


    return(
      <div className="game-form-container new-game yellow-header med-blue-border">
        <NewGameHeader setShowForm={setShowFormState} showForm={showFormState}/>
        <NewGameForm gameNumber={gameNumber} showForm={showFormState}
                     gameData={gameData} getGameData={getGameData}
                     formData={formData} setFormData={setFormData}
                     playersData={playersData} setPlayersData={setPlayersData}
                     formValid={formValid} resetFormData={resetFormData}
                     setShowValidationDialog={setShowValidationDialog}/>
      </div>
    );
}
export default NewGame;
