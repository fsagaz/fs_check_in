import React from 'react';
import './TopNav.scss';
import './icons.scss';
import logo from '../..//logo.svg';
import BpkLargeAccessibilityIcon from 'bpk-component-icon/lg/menu';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
    <div>
    <BpkLargeAccessibilityIcon className="menu-icon__a11y" />
    </div>
  </header>
);

export default TopNav;
