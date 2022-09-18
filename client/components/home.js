import React from "react";
import RegionSelector from "./homeComponents/regionSelector";
import StretchDisplay from "./homeComponents/stretchDisplay";
import SavedStretches from './homeComponents/savedStretches';
import Routines from "./homeComponents/routines";

const Home = () => {
  return (
    <>
      <RegionSelector />
      <StretchDisplay />
      <SavedStretches />
      <Routines />
    </>
  )
}

export default Home