import React, {useState} from 'react'
import NewGameHeader from './NewGameHeader'
import NewGameForm from './NewGameForm'

function NewGame({gameNumber, gameData, getGameData}){

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
        />
      </div>
    );
}
export default NewGame;
