import React from 'react';
import '../../stylesheets/savedStretches.scss';
import SavedStretchDisplay from './subComponents/savedStretchDisplay';

const SavedStretches = () => {
  return (
    <div className='savedStretchContainer'>
      <h3>Saved Stretches</h3>
      <SavedStretchDisplay />
    </div>
  )
}

export default SavedStretches;