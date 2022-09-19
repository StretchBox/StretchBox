import React from 'react';
import '../../stylesheets/stretchDisplay.scss';
import StretchDisplayWindow from  './subComponents/stretchDisplayWindow';

const StretchDisplay = () => {
  return (

    <div className="stretchDisplay">
      <h3>Display For Selected Stretches</h3>
      <StretchDisplayWindow />
    </div>
  )
}

export default StretchDisplay;


