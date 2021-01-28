import React, {useState, useEffect} from 'react'
import NewGameHeader from './NewGameHeader'
import NewGameForm from './NewGameForm'

function NewGame({gameNumber, gameData}){

  //Sets whether or not to display the form
  const [showFormState, setShowFormState] = useState(false);
  const [formData, setFormData] = useState({
    board: '',
    date: '',
    players: [
      {
        character: ''
      }
    ],
    player2: {},
    player3: {},
    player4: {},
    gameNumber: gameNumber
  });

  useEffect(() => {
    console.log(formData);
  })


  // useEffect(() => {
  //   console.log(formData);
  //   //Post the form information to the api
  //   fetch('http://localhost:8080/api/newgame', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(formData)
  //   }).then(response => {
  //     console.log(response.status);
  //   })
  // });

    return(
      <div className="new-game-container yellow-header med-blue-border">
        <NewGameHeader setShowForm={setShowFormState} showForm={showFormState}/>
        <NewGameForm
          gameNumber={gameNumber}
          showForm={showFormState}
          setFormData={setFormData}
          formData={formData}
        />
      </div>
    );
}
export default NewGame;
