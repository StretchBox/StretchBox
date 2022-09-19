import React, { useState } from "react";
import RegionSelector from "./homeComponents/regionSelector";
import StretchDisplay from "./homeComponents/stretchDisplay";
import SavedStretches from './homeComponents/savedStretches';
import Routines from "./homeComponents/routines";
import Header from "./homeComponents/header";

const Home = () => {
  const [stretchData, setStretchData] = useState('');
  return (
    <>
      <Header />
      <RegionSelector value={setStretchData}/>
      <StretchDisplay value={stretchData}/>
      <SavedStretches />
      <Routines />
    </>
  )
}

export default Home