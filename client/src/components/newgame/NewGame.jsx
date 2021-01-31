import React, {useState} from 'react'
import NewGameHeader from './NewGameHeader'
import NewGameForm from './NewGameForm'

function NewGame({gameNumber, gameData, getGameData, formData, setFormData}){

  //Sets whether or not to display the form
  const [showFormState, setShowFormState] = useState(false);


    return(
      <div className="new-game-container yellow-header med-blue-border">
        <NewGameHeader setShowForm={setShowFormState} showForm={showFormState}/>
        <NewGameForm
          gameNumber={gameNumber}
          showForm={showFormState}
          gameData={gameData}
          getGameData={getGameData}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    );
}
export default NewGame;
