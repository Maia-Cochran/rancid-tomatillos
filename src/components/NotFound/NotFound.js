import React from 'react';
import Status from '../Status/Status';
import './NotFound.css';
import splat from '../../images/tom-splt.png';





const NotFound = () => {
    return (
      <Status code={404}>
        <div className='error-wrapper'>
          <h1>Sorry,</h1>
          <h1>can't find that.</h1>
          <h2>404</h2>
          <img className="splat" src={splat} alt='Not Found'/>
        </div>
      </Status>
    );
  };

export default NotFound;