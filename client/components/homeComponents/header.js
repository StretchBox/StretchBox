import React from 'react';
import Logo from '../../assets/brand-logo.png';
import '../../stylesheets/header.scss';

const Header = () => {
  return (
    <div className='headerContainer'>
      <img src={Logo}/>
    </div>
  )
}

export default Header