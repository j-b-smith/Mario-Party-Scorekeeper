import React from 'react';


function ValidationDialog({showValidationDialog, setShowValidationDialog, gameType}) {
  if (showValidationDialog ){
    return(
      <div className={`${gameType === 'new' ? 'overlay' : 'edit-overlay'}`}>
        <div className='validation-alert alert thick-yellow-border centered'>
            <h2 className='yellow-header'>Whoops, Looks like you're missing a field! </h2>
            <div className='alert-buttons'>
                <button className='yellow-header dark-blue-border thin-yellow-border' onClick={() => setShowValidationDialog(false)}>Ok</button>
            </div>
        </div>
      </div>
    );
  } else return null;
}

export default ValidationDialog;
