import React from 'react'
import '../../../stylesheets/stretchDisplayWindow.scss'

 const StretchDisplayWindow = () => {
  
  let stretches = []

  /*
    - will populate stretches array with sub-components from back-end response
    - looping through piece of state (which contains objects from back-end)

  */
  return (
    <div className="StretchDisplayWindow">

      <div>
        {stretches}
      </div>
        Selected Stretches will be rendered here

         







    </div>
  )
}

export default StretchDisplayWindow;