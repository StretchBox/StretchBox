import React from 'react';
import '../../stylesheets/regionSelector.scss'
import Body from '../../assets/bodyFrontBack.jpg'

const RegionSelector = () => {

  // function that will handle all region button clicks by toggling between inactive and active classes -> this will change the css styling and make it look like the region is highlighted when active
  const handleRegionClick = e => {
    e.currentTarget.classList.toggle('activeButton')
  }

  const queryDb = e => {
    // prevent page from refreshing when button is clicked
    e.preventDefault();

    // ADD LOGIN FOR QUERYING BACKEND FROM BUTTON CLICK HERE
  }

  return (
    <div className='bodyContainer'>

      <h3>Please select the body region(s) that you would like to stretch</h3>

      <button id='chest' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='forearms' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='glutes' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='lowerBack' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='middleBack' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='hamstrings' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='calves' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='neck' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='lats' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='traps' className='inactiveButton' onClick={handleRegionClick}></button>
      <button id='triceps1' className='inactiveButton' onClick={handleRegionClick}></button>

      <div className='bodyImgs'>
        <img src={Body} alt='Human anatomical diagram, front and back'/>
      </div>

      <div className='bottomPanel'>
        <label for="stretchCount">Choose your number of stretches per body part:</label>

        <select name="stretchCount" id="stretchCount" form='submit'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      
        <form id='submit'>
          <input
            onClick={queryDb}
            type='submit'
            className='submitBtn'
            value='SUBMIT'
          />
        </form>

    </div>
  )
}

export default RegionSelector;

