import React, { useState } from "react";
import RegionSelector from "./homeComponents/regionSelector";
import StretchDisplay from "./homeComponents/stretchDisplay";
import SavedStretches from './homeComponents/savedStretches';
import Routines from "./homeComponents/routines";
import Header from "./homeComponents/header";
import '../stylesheets/home.scss'


const Home = () => {
  const [stretchData, setStretchData] = useState('');
  return (
    <>
      <Header />
      <div id="main-flex">
        <div className="dynamic-direction">
          <RegionSelector value={setStretchData}/>
          <StretchDisplay value={stretchData}/>
        </div>
        {/* <div class="dynamic-direction">
          <SavedStretches />
          <Routines />
        </div> */}
      </div>
    </>
  )
}

export default Home