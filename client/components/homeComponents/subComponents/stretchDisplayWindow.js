import React, { useEffect, useState } from 'react'
import '../../../stylesheets/stretchDisplayWindow.scss'
import StretchInfo from './stretchInfo';

const StretchDisplayWindow = ({value}) => {
  const [stretches, setStretches] = useState([]);
  const [stretchCounter, setStretchCounter] = useState(0);

  useEffect(() => {
    // if (value) setStretches(stretches.concat(value));
    if (value) setStretches(stretches.concat(<StretchInfo 
      key = {stretchCounter}
      name =  {value[0].name}
      muscle = {value[0].muscle}
      instructions = {value[0].instructions}
      />));
    setStretchCounter(stretchCounter + 1);
  }, [value])

  return(
    <div className="StretchDisplayWindow">
      <div>
        {stretches}
      </div>
    </div>
  )
}

export default StretchDisplayWindow;