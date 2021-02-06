import React from 'react';

function ModalDialog({showDeleteModal, setShowDeleteModal, deleteGame}){

  if (showDeleteModal){
    return(
      <div className='overlay'>
        <div className='delete-alert thick-yellow-border centered'>
            <h2 className='yellow-header'>Are you sure you want to delete this game?</h2>
            <div className='delete-alert-buttons'>
                <button className='yellow-header thin-yellow-border' onClick={deleteGame}>Yes</button>
                <button className='yellow-header dark-blue-border thin-yellow-border' onClick={() => setShowDeleteModal(false)}>No</button>
            </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalDialog;
