import React from 'react';
import '../../../stylesheets/stretchinfo.scss';

const StretchInfo = value => {
    console.log(value)
  return (
    <div className="stretch-info">
      <div className="name-muscle">
        <p><strong>Name:</strong> {value.name}</p>
        <p><strong>Muscle:</strong> {value.muscle}</p>
      </div>
      <div className="instructions">
        <p><strong>Instructions:</strong> {value.instructions}</p>
      </div>
    </div>
  )
}

export default StretchInfo;