import React, { useState } from 'react';
import '../../stylesheets/regionSelector.scss'
import Body from '../../assets/bodyFrontBack.jpg'

const RegionSelector = ({value}) => {
  const [currentRegion, setCurrentRegion] = useState('');
  const [numberOfStretches, setNumberOfStretches] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // function that will handle all region button clicks by toggling between inactive and active classes -> this will change the css styling and make it look like the region is highlighted when active
  const handleRegionClick = e => {
    if (!currentRegion) {
      setCurrentRegion(e.currentTarget.id);
      e.currentTarget.classList.toggle('activeButton')
    }
    else if (currentRegion === e.currentTarget.id) {
      setCurrentRegion('');
      e.currentTarget.classList.toggle('activeButton')
    }
    else {
      // this block of code will only be evaluted if there is already a region selected and highlighted on screen
      const regionToDeselect = document.querySelector('button.activeButton');
      regionToDeselect.classList.toggle('activeButton');
      // after current region is deselected, overwrite state with current region that has just been clicked and highlight current region
      setCurrentRegion(e.currentTarget.id);
      e.currentTarget.classList.toggle('activeButton');
    }
  }

  const queryDb = async (e) => {
    // prevent page from refreshing when button is clicked
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify({
          [currentRegion]: numberOfStretches,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      value(result);
      // do something with result here
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bodyContainer'>

      <h3>Please select the body region(s) that you would like to stretch</h3>

      <button id='chest' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='forearms' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='glutes' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='lower_back' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='middle_back' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='hamstrings' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='calves' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='neck' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='lats' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='traps' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='triceps' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='quadriceps' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='biceps' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='abdominals' className='inactiveButton' onClick={handleRegionClick}></button>



      <div className='bodyImgs'>
        <img src={Body} alt='Human anatomical diagram, front and back'/>
      </div>

      <div className='bottomPanel'>
        <label htmlFor="stretchCount">Choose your number of stretches per body part:</label>

        <select name="stretchCount" id="stretchCount" form='submit' onChange={(e) => setNumberOfStretches(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      
        <form id='submit'>
          <input
            onClick={(e) => {
              if (currentRegion) queryDb(e);
              }}
            type='submit'
            className='submitBtn'
            value='SUBMIT'
          />
        </form>

    </div>
  )
}

export default RegionSelector;

