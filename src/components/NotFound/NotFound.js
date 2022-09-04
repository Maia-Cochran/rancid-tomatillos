import React from 'react';
import Status from '../Status/Status';
import './NotFound.css';
import splat from '../../images/404-splat.svg';





const NotFound = () => {
    return (
      <Status code={404}>
        <div className='error-wrapper'>
          <h1>Sorry, can't find that.</h1>
          <h2>404</h2>
          <img className="splat" src={splat} />
        </div>
      </Status>
    );
  }

export default NotFound