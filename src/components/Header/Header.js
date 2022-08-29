import React from 'react';
import './Header.css';
import logo from '../../images/rancid-tomatillos.png'



export default function Header({}) {
    return (
      <div className="header-container">
        <h1>Rancid Tomatillos</h1>
        <img className='logo-header' src={logo} alt='logo' />
      </div>
    )
  }
  

