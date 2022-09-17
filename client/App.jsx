import React from 'react';
// import './stylesheets/App.scss';
import SavedStretches from './components/savedStretches';
import RegionSelector from './components/regionSelector';
import StretchDisplay from './components/stretchDisplay';
import Routines from './components/routines';

const App = () => {
  return (
    <>
      <p>Hello world</p>
      <RegionSelector />
      <StretchDisplay />
      <SavedStretches />
      <Routines />    
    </>
  )     
}

export default App;