import React from "react";
import RegionSelector from "./homeComponents/regionSelector";
import StretchDisplay from "./homeComponents/stretchDisplay";
import SavedStretches from './homeComponents/savedStretches';
import Routines from "./homeComponents/routines";
import Header from "./homeComponents/header";

const Home = () => {
  return (
    <>
      <Header />
      <RegionSelector />
      <StretchDisplay />
      <SavedStretches />
      <Routines />
    </>
  )
}

export default Home